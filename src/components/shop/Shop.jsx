
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "/src/components/data/products";
import Filters from "/src/components/filters/Filters";
import "./shop.css";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [visible, setVisible] = useState(8);

  const ITEMS_STEP = 8;
  const bottomRef = useRef(null);

  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (sort) {
    filtered = filtered.filter((p) => p.condition === sort);
  }

  const visibleItems = filtered.slice(0, visible);

  return (
    <section id="shop" className="section">
      <div className="container">

        <h2 className="title fade-in">Магазин</h2>
        <p className="about-lead">
            Комісійний магазин, де ви можете знайти широкий вибір товарів за вигідними цінами.
          </p>
        <Filters
          search={search}
          setSearch={(v) => {
            setSearch(v);
            setVisible(8);
          }}
          category={category}
          setCategory={(v) => {
            setCategory(v);
            setVisible(8);
          }}
          sort={sort}
          setSort={(v) => {
            setSort(v);
            setVisible(8);
          }}
        />

        <div className="shop-grid">
          {visibleItems.map((p, i) => (
            <div
              key={p.id}
              className="product-card fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >

              <Link to={`/product/${p.id}`} className="img-wrap">
                <img src={p.img} alt={p.title} />
              </Link>

              <div className="product-body">
                <p className="condition">
                  {p.condition === "used" ? "Б/У" : "Новий"}
                </p>

                <h3 className="product-title">{p.title}</h3>

                <p className="product-price">
                  {p.price.toLocaleString()} грн
                </p>
              </div>

              <Link
                to={`/product/${p.id}`}
                className="tg-btn"
                style={{ margin: "10px" }}
              >
                Деталі
              </Link>

            </div>
          ))}
        </div>

        <div className="load-more" ref={bottomRef}>

          {visible < filtered.length && (
            <button
              className="btn btn-primary"
              onClick={() => {
                setVisible((v) => v + ITEMS_STEP);
                setTimeout(() => {
                  bottomRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                  });
                }, 100);
              }}
            >
              Показати ще
            </button>
          )}

          {visible > ITEMS_STEP && (
            <button
              className="btn btn-outline"
              onClick={() => {
                setVisible(ITEMS_STEP);
                setTimeout(() => {
                  bottomRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                  });
                }, 100);
              }}
            >
              Згорнути
            </button>
          )}

        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Нічого не знайдено 😢
          </p>
        )}

      </div>
    </section>
  );
}