import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import Filters from "./Filters";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // 🔍 фільтрація
  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  // 💰 сортування
  if (sort === "cheap") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }
  if (sort === "expensive") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <section id="shop" className="section">
      <div className="container">

        <h2 className="title">Магазин</h2>

        {/* 🔥 ФІЛЬТРИ */}
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        {/* 📦 ТОВАРИ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
            >

              {/* IMAGE */}
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "10px",
                    transition: "0.3s"
                  }}
                />
              </Link>

              {/* CONTENT */}
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ marginBottom: "5px" }}>
                  {p.title}
                </h3>

                <p
                  style={{
                    color: "#1387B8",
                    marginBottom: "10px",
                    fontWeight: 600
                  }}
                >
                  {p.price.toLocaleString()} грн
                </p>
              </div>

              {/* BUTTON */}
              <Link
                to={`/product/${p.id}`}
                className="btn btn-outline"
                style={{
                  marginTop: "auto",
                  textAlign: "center"
                }}
              >
                Деталі
              </Link>

            </div>
          ))}
        </div>

        {/* ❗ якщо нічого не знайдено */}
        {filtered.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Нічого не знайдено 😢
          </p>
        )}

      </div>
    </section>
  );
}