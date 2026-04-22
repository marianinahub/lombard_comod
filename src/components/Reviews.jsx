export default function Reviews() {
  const reviews = [
    { name: "Олена", text: "Дуже швидко отримала гроші" },
    { name: "Ігор", text: "Оцінили дорожче ніж інші" },
    { name: "Марія", text: "Сервіс на рівні 👍" }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Відгуки клієнтів</h2>
        <p className="subtitle">
          Нам довіряють сотні клієнтів у Тернополі
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
            gap: "20px"
          }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="card">

              {/* ⭐ рейтинг */}
              <div style={{ marginBottom: "10px", color: "#f59e0b" }}>
                ★★★★★
              </div>

              {/* текст */}
              <p style={{ color: "#334155", marginBottom: "15px" }}>
                “{r.text}”
              </p>

              {/* ім’я */}
              <h4 style={{ color: "#1387B8", fontWeight: 600 }}>
                {r.name}
              </h4>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}