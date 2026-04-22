import { useState } from "react";

export default function Hero() {
  const [type, setType] = useState("gold");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!amount) return;

    let coef = 0.7;

    if (type === "gold") coef = 0.85;
    if (type === "tech") coef = 0.6;
    if (type === "auto") coef = 0.75;

    const res = Math.round(amount * coef);
    setResult(res);
  };

  return (
    <section className="hero section">
      <div className="hero-bg"></div>

      <div className="container hero-grid">

        {/* LEFT */}
        <div>
          <h1>
            Грошей не вистачає? <br />
            <span style={{ color: "#1387B8" }}>
              Ломбард виручає!
            </span>
          </h1>

          <p>
            Золото, техніка, авто — швидка оцінка без перевірок
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn btn-primary">
              Отримати гроші
            </button>

            <a href="tel:+380XXXXXXXXX" className="btn btn-outline">
              Подзвонити
            </a>
          </div>

          <div style={{ marginTop: "20px", color: "#64748b", fontSize: "14px" }}>
            ✔ Без перевірок ✔ Конфіденційно ✔ 15 хв
          </div>
        </div>

        {/* RIGHT */}
        <div className="float-card">
          <h3 style={{ marginBottom: "10px" }}>
            Швидка оцінка
          </h3>

          {/* тип */}
          <select
            className="input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="gold">Золото</option>
            <option value="tech">Техніка</option>
            <option value="auto">Авто</option>
          </select>

          {/* сума */}
          <input
            className="input"
            type="number"
            placeholder="Орієнтовна вартість (грн)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* кнопка */}
          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={calculate}
          >
            Розрахувати
          </button>

          {/* результат */}
          {result && (
            <div
              style={{
                marginTop: "10px",
                padding: "12px",
                background: "#f1f5f9",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              Орієнтовна сума:
              <br />
              <strong style={{ color: "#1387B8" }}>
                {result.toLocaleString()} грн
              </strong>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}