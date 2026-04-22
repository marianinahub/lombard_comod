export default function About() {
  return (
    <section id="about" className="section">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center"
        }}
      >

        {/* TEXT */}
        <div>
          <h2 className="title" style={{ textAlign: "left" }}>
            Ломбард КОМОД у Тернополі
          </h2>

          <p className="text-muted" style={{ marginBottom: "15px" }}>
            Ми надаємо швидкі фінансові послуги під заставу золота,
            техніки та автомобілів. Наша мета — допомогти вам отримати
            кошти максимально швидко та без зайвих процедур.
          </p>

          <p className="text-muted" style={{ marginBottom: "15px" }}>
            Оцінка проводиться чесно та прозоро, без прихованих умов.
            Ви отримуєте гроші вже протягом 15 хвилин після звернення.
          </p>

          <p className="text-muted">
            Ми гарантуємо конфіденційність та індивідуальний підхід
            до кожного клієнта.
          </p>

          {/* FACTS */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "25px",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h3 style={{ color: "#1387B8" }}>10+</h3>
              <p className="text-muted">років досвіду</p>
            </div>

            <div>
              <h3 style={{ color: "#1387B8" }}>1000+</h3>
              <p className="text-muted">клієнтів</p>
            </div>

            <div>
              <h3 style={{ color: "#1387B8" }}>15 хв</h3>
              <p className="text-muted">оформлення</p>
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="card">
          <h3 style={{ marginBottom: "15px" }}>
            Наші переваги
          </h3>

          <ul style={{ color: "#64748b", lineHeight: "1.8" }}>
            <li>✔ Вигідні умови кредитування</li>
            <li>✔ Швидка оцінка майна</li>
            <li>✔ Без прихованих платежів</li>
            <li>✔ Конфіденційність</li>
            <li>✔ Зручне розташування у Тернополі</li>
          </ul>
        </div>

      </div>
    </section>
  );
}