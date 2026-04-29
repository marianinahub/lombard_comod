import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "/src/components/data/products";
import "./product.css";

export default function ProductPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id.toString() === id);

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
          <Link to="/">← Назад</Link>
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
        <div className="gallery">
          <div className="main-image">
            <img src={activeImg || product.img} alt={product.title} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-info">

          <h1 className="product-title">{product.title}</h1>

          <div className="price-block">
            <span className="price-big">
              {product.price.toLocaleString()} грн
            </span>
            <span className="price-note">Актуальна ціна</span>
          </div>

          <div className="stock">✔ В наявності</div>

          <p className="product-desc">
            Оригінальний товар у хорошому стані. Перевірений експертами ломбарду.
          </p>

          <a
            href={`https://t.me/mariianina?text=${tgMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-btn"
          >
            Написати в Telegram
          </a>

          <div className="trust">
            <div>✔ Перевірено експертами</div>
            <div>✔ Оригінальний товар</div>
            <div>✔ Швидка відправка</div>
          </div>

          <Link to="/" className="back-link">
            ← Назад до магазину
          </Link>

        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div className="container related">
          <h3>Схожі товари</h3>

          <div className="shop-grid">
            {related.map((p, i) => (
              <Link
                key={p.id + "-" + i}
                to={`/product/${p.id}`}
                className="related-card"
              >
                <div className="related-img">
                  <img src={p.img} alt={p.title} />
                </div>
                <p>{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE CTA */}
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