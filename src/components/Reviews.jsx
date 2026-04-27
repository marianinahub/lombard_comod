import { useState, useEffect } from "react";

export default function Reviews() {
  const defaultReviews = [
    { name: "Олена", text: "Дуже швидко отримала гроші", rating: 5 },
    { name: "Ігор", text: "Оцінили дорожче ніж інші", rating: 5 },
    { name: "Марія", text: "Сервіс на рівні 👍", rating: 5 },
    { name: "Андрій", text: "Все чесно і без прихованих платежів", rating: 5 },
    { name: "Наталія", text: "Дуже привітний персонал", rating: 5 },
    { name: "Василь", text: "Оформили за 10 хвилин", rating: 5 }
  ];

  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    setReviews(saved ? JSON.parse(saved) : defaultReviews);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [reviews]);

  const handleAdd = () => {
    if (!name || !text) return;

    const newReview = { name, text, rating };
    setReviews([newReview, ...reviews]);

    setName("");
    setText("");
    setRating(5);
  };

  return (
    <section className="section reviews">
      <div className="container">

        <h2 className="title">Відгуки клієнтів</h2>

        {/* SLIDER */}
        <div className="slider">

          <button className="arrow left" onClick={prev}>←</button>

          <div className="slider-window">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${index * (100 / 3)}%)`
              }}
            >
              {reviews.map((r, i) => (
                <div key={i} className="slide-card">

                  <div className="stars">
                    {"★".repeat(r.rating)}
                  </div>

                  <p>“{r.text}”</p>
                  <h4>{r.name}</h4>

                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={next}>→</button>

        </div>

        {/* FORM */}
        <div className="review-form">

          <h3>Залишити відгук</h3>

          <div className="star-select">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={i <= rating ? "active" : ""}
                onClick={() => setRating(i)}
              >
                ★
              </span>
            ))}
          </div>

          <input
            placeholder="Ваше ім’я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Ваш відгук"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleAdd}>
            Додати відгук
          </button>

        </div>

      </div>
    </section>
  );
}