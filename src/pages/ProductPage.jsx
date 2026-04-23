import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (product) {
      setActiveImg(product.img);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="section">
        <div className="container">
          <h2>Товар не знайдено</h2>
          <Link to="/#shop">Повернутись до магазину</Link>
        </div>
      </div>
    );
  }

  const tgMessage = encodeURIComponent(
    `Хочу купити ${product.title} (${product.id}) за ${product.price} грн`
  );

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <section className="section">
      <div className="container product-page">

        {/* LEFT */}
        <div>
          <img
            src={activeImg}
            alt={product.title}
            className="main-img"
          />
        </div>

        {/* RIGHT */}
        <div className="product-info">

          <h1>{product.title}</h1>

          <div className="product-price-big">
            {product.price.toLocaleString()} грн
          </div>

          <p style={{ fontSize: "13px", color: "#94a3b8" }}>
            Ціна актуальна на сьогодні
          </p>

          <p className="stock">✔ В наявності</p>

          <p className="product-desc">
            Оригінальний товар у хорошому стані. Перевірений експертами ломбарду.
          </p>

          {/* TELEGRAM */}
          <a
            href={`https://t.me/mariianina?text=${tgMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tg-btn"
          >
            Написати в Telegram
          </a>

          <div className="product-trust">
            <p>✔ Перевірено експертами ломбарду</p>
            <p>✔ Оригінальний товар</p>
            <p>✔ Відправка в день звернення</p>
          </div>

          <Link to="/#shop" className="back-link">
            ← Назад до магазину
          </Link>

        </div>
      </div>

      {/* 🔥 RELATED */}
      {related.length > 0 && (
        <div className="container related">
          <h3>Схожі товари</h3>

          <div className="shop-grid">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="related-card">

                <div className="related-img">
                  <img src={p.img} alt={p.title} />
                </div>

                <p>{p.title}</p>

              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 📱 STICKY BUTTON */}
      <div className="sticky-cta">
        <a
          href={`https://t.me/mariianina?text=${tgMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Написати в Telegram
        </a>
      </div>

    </section>
  );
}