const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const multer = require("multer")

// моделі
const User = require("./models/User")
const Request = require("./models/Request")
const Product = require("./models/Product")

const app = express()

app.use(express.json())

// ---------- MONGODB ----------

mongoose.connect("mongodb://127.0.0.1:27017/lombard")
console.log("MongoDB connected")

// ---------- FILE UPLOAD ----------

const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "frontend", "uploads"),
  filename: (req,file,cb)=>{
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({storage})

// ---------- FRONTEND ----------

const frontendPath = path.join(__dirname, "..", "frontend")

app.use(express.static(frontendPath))

app.get("/", (req,res)=>{
  res.sendFile(path.join(frontendPath,"index.html"))
})

// ---------- AUTH ----------

// реєстрація
app.post("/api/register", async (req, res) => {

  const { email, password } = req.body

  const user = new User({
    email,
    password
  })

  await user.save()

  res.json({ message: "Користувач створений" })
})

// логін
app.post("/api/login", async (req, res) => {

  const { email, password } = req.body

  const user = await User.findOne({ email, password })

  if(!user){
    return res.json({ message: "Невірний email або пароль" })
  }

  res.json({
    message:"Вхід успішний",
    email:user.email,
    role:user.role
  })

})

// ---------- REQUESTS ----------

// створення заявки
app.post("/api/request", async (req,res)=>{

  const { user, item, price } = req.body

  const request = new Request({
    user,
    item,
    price
  })

  await request.save()

  res.json({message:"Заявка створена"})
})

// отримати заявки
app.get("/api/requests", async (req,res)=>{

  const requests = await Request.find()

  res.json(requests)
})

// змінити статус
app.post("/api/request/status", async (req,res)=>{

  const { id, status } = req.body

  await Request.findByIdAndUpdate(id,{
    status: status
  })

  res.json({message:"Статус змінено"})
})

// ---------- PRODUCTS ----------

// додати товар
app.post("/api/product", upload.single("image"), async (req,res)=>{

  const { name, price, description } = req.body

  const product = new Product({
    name,
    price,
    description,
    image: "/uploads/" + req.file.filename
  })

  await product.save()

  res.json({message:"Товар додано"})
})

// отримати товари
app.get("/api/products", async (req,res)=>{

  const products = await Product.find()

  res.json(products)
})

// ---------- STATS ----------

app.get("/api/stats", async (req,res)=>{

  const users = await User.countDocuments()
  const requests = await Request.countDocuments()
  const products = await Product.countDocuments()

  const total = await Request.aggregate([
    { $group:{ _id:null, sum:{ $sum:"$price" } } }
  ])

  res.json({
    users,
    requests,
    products,
    total: total[0] ? total[0].sum : 0
  })

})

// ---------- CREATE ADMIN ----------

app.get("/create-admin", async (req,res)=>{

  const admin = new User({
    email:"admin@lombard.com",
    password:"123456",
    role:"admin"
  })

  await admin.save()

  res.send("Admin створений")

})

// ---------- SERVER ----------

app.listen(3000, ()=>{
  console.log("Server running on http://127.0.0.1:3000")
})