import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Не знайдено</p>;

  return (
    <section className="section">
      <div className="container">

        <h1>{product.title}</h1>

        <img src={product.images[0]} />

        <p>{product.desc}</p>

        <h2 style={{ color: "#1387B8" }}>
          {product.price.toLocaleString()} грн
        </h2>

      </div>
    </section>
  );
}