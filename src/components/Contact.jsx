export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="title">Контакти</h2>
        <p className="subtitle">
          Залиште заявку — ми передзвонимо за 5 хвилин
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "center"
          }}
        >

          {/* MAP */}
          <iframe
            src="https://maps.google.com/maps?q=ternopil&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{
              width: "100%",
              height: "350px",
              borderRadius: "20px",
              border: "none"
            }}
          />

          {/* FORM */}
          <div className="card">

            {/* додатковий текст довіри */}
            <p style={{ color: "#64748b", marginBottom: "15px" }}>
              Безкоштовна консультація • Конфіденційно
            </p>

            <input
              className="input"
              placeholder="Ваше ім'я"
            />

            <input
              className="input"
              placeholder="Телефон"
              type="tel"
            />

            <textarea
              className="input"
              placeholder="Що хочете здати?"
              style={{ minHeight: "80px" }}
            />

            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "10px" }}
            >
              Отримати консультацію
            </button>

            {/* соц доказ */}
            <p
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#94a3b8",
                textAlign: "center"
              }}
            >
              Відповідаємо протягом 5 хвилин
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}