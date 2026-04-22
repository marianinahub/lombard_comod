import { useState } from "react";

export default function AdvancedCalculator() {
  const [type, setType] = useState("gold");
  const [days, setDays] = useState(10);

  const [goldSample, setGoldSample] = useState(375);
  const [silverSample, setSilverSample] = useState(925);
  const [category, setCategory] = useState(1);
  const [weight, setWeight] = useState(5);

  const [year, setYear] = useState(2018);

  const [carat, setCarat] = useState(0.5);
  const [clarity, setClarity] = useState("VS1");
  const [color, setColor] = useState("G");

const GOLD_PRICES = {
  375: { 1: 2300, 2: 1575, 3: 1585 },
  500: { 1: 3080, 2: 2010, 3: 1910 },
  583: { 1: 3580, 2: 2830, 3: 2475 },
  585: { 1: 3600, 2: 3050, 3: 2535 },
  750: { 1: 4615, 2: 3425, 3: 2820 },
  900: { 1: 5535, 2: 3825, 3: 2930 },
  916: { 1: 5655, 2: 3850, 3: 3265 },
  958: { 1: 5895, 2: 4010, 3: 3350 },
  999: { 1: 6145, 2: 5800, 3: 5400 }
};

  const SILVER_PRICES = {
    875: { 1: 35, 2: 25, 3: 15 },
    925: { 1: 48, 2: 35, 3: 24 }
  };

  const getGoldPrice = () => GOLD_PRICES[goldSample]?.[category] || 0;
  const getSilverPrice = () => SILVER_PRICES[silverSample]?.[category] || 0;

  const baseAmount =
    type === "gold"
      ? weight * getGoldPrice()
      : type === "silver"
      ? weight * getSilverPrice()
      : 0;

  const getRate = () => {
    if (baseAmount <= 2000) return 0.0105;
    if (baseAmount <= 5000) return 0.01;
    if (baseAmount <= 10000) return 0.0086;
    if (baseAmount <= 20000) return 0.006;
    return 0.005;
  };

  const rate = getRate();
  const total = baseAmount + baseAmount * rate * days;
  const profit = total - baseAmount;

  // 💎 НОРМАЛЬНА ОЦІНКА ДІАМАНТІВ
 const getDiamondPrice = () => {
  const base = 22000;

  const clarityCoef = {
    IF: 1.3,
    VVS1: 1.2,
    VS1: 1.1,
    SI1: 0.9
  };

  const colorCoef = {
    D: 1.3,
    F: 1.2,
    G: 1.1,
    H: 1
  };

  return carat * base * clarityCoef[clarity] * colorCoef[color] * 0.65;
};

  return (
    <section id="calculator" className="section">
      <div className="container">

        <h2 className="title">Онлайн калькулятор</h2>

        <div className="card">

          {/* 🔥 ТАБИ (FIX OVERFLOW) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px,1fr))",
              gap: "10px",
              marginBottom: "20px"
            }}
          >
            {["gold", "silver", "tech", "auto", "diamond"].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className="btn"
                style={{
                  background: type === t ? "#1387B8" : "#f1f5f9",
                  color: type === t ? "#fff" : "#000",
                  width: "100%"
                }}
              >
                {{
                  gold: "Золото",
                  silver: "Срібло",
                  tech: "Техніка",
                  auto: "Авто",
                  diamond: "Діаманти"
                }[t]}
              </button>
            ))}
          </div>

         <div className="calc-grid">
            {/* LEFT */}
            <div className="form-card">

  <h3 style={{ marginBottom: "15px" }}>
    Введіть дані
  </h3>

  {(type === "gold" || type === "silver") && (
    <>
      {/* ПРОБА */}
      <select
        className="input"
        value={type === "gold" ? goldSample : silverSample}
        onChange={(e) =>
          type === "gold"
            ? setGoldSample(+e.target.value)
            : setSilverSample(+e.target.value)
        }
      >
        {(type === "gold"
          ? Object.keys(GOLD_PRICES)
          : Object.keys(SILVER_PRICES)
        ).map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      {/* КАТЕГОРІЯ */}
      <select
        className="input"
        value={category}
        onChange={(e) => setCategory(+e.target.value)}
      >
        <option value={1}>1 категорія</option>
        <option value={2}>2 категорія</option>
        <option value={3}>3 категорія</option>
      </select>

      {/* ЦІНА ЗА ГРАМ */}
      <p style={{ color: "#64748b", marginBottom: "10px" }}>
        Ціна за грам:{" "}
        <b style={{ color: "#1387B8" }}>
          {type === "gold"
            ? getGoldPrice()
            : getSilverPrice()} грн
        </b>
      </p>

      {/* ВАГА */}
      <input
        className="input"
        type="number"
        value={weight}
        onChange={(e) => setWeight(+e.target.value)}
      />
      <label style={{ fontSize: "14px", color: "#64748b" }}>
  Термін: {days} днів
</label>

<input
  type="range"
  min="1"
  max="30"
  value={days}
  onChange={(e) => setDays(+e.target.value)}
  style={{ width: "100%", marginBottom: "10px" }}
/>

<input
  type="number"
  className="input"
  value={days}
  onChange={(e) => setDays(Math.max(1, +e.target.value))}
  placeholder="Введіть дні"
/>
    </>
  )}

{type === "auto" && (
  <div className="expert-box">
    <div className="expert-icon">🚗</div>

    <h3>Оцінка авто</h3>

    <p>
      Оцінка авто проводиться індивідуально експертом-оцінщиком
    </p>

    <a className="btn btn-primary"
      href="https://t.me/mariianina"
      target="_blank"
      className="btn btn-primary"
    >
      Зв’язатися →
    </a>

    <span className="expert-note">
      Консультація безкоштовна
    </span>
  </div>
)}

 {type === "tech" && (
  <div className="expert-box">
    <div className="expert-icon">📱</div>

    <h3>Оцінка техніки</h3>

    <p>
      Для точної оцінки техніки надішліть фото нашому експерту-оцінщику
    </p>

    <a className="btn btn-primary"
      href="https://t.me/mariianina"
      target="_blank"
      className="btn btn-primary"
    >
      Надіслати фото →
    </a>

    <span className="expert-note">
      Відповідь протягом 5 хвилин
    </span>
  </div>
)}

  {type === "diamond" && (
  <>
    <h3>Оцінка діамантів</h3>

    <input
      type="number"
      className="input"
      value={carat}
      onChange={(e) => setCarat(+e.target.value)}
      placeholder="Карат"
    />

    <select
      className="input"
      value={clarity}
      onChange={(e) => setClarity(e.target.value)}
    >
      <option value="IF">IF</option>
      <option value="VVS1">VVS1</option>
      <option value="VS1">VS1</option>
      <option value="SI1">SI1</option>
    </select>

    <select
      className="input"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    >
      <option value="D">D</option>
      <option value="F">F</option>
      <option value="G">G</option>
      <option value="H">H</option>
    </select>
  </>
)}

</div>

            {/* RIGHT */}
 {type !== "tech" && type !== "auto" && (
  <div className="result-card">

    {/* DIAMOND */}
    {type === "diamond" ? (
      <>
        <p className="result-label">Оціночна сума</p>

        <div className="result-number">
          {Math.round(getDiamondPrice()).toLocaleString()} грн
        </div>

        <div className="result-divider" />

        <a
          href="https://t.me/mariianina"
          target="_blank"
          className="btn btn-primary"
        >
          Отримати точну оцінку
        </a>

        <p className="trust">
          Кінцеву оцінку надає експерт-оцінщик
        </p>
      </>
    ) : (
      <>
        {/* GOLD / SILVER */}
        <p className="result-label">Ви отримаєте</p>

        <div className="result-number">
          {Math.round(baseAmount).toLocaleString()} грн
        </div>

        <div className="result-row">
          <span>Відсотки</span>
          <span>{Math.round(profit).toLocaleString()} грн</span>
        </div>

        <div className="result-row">
          <span>Термін</span>
          <span>{days} днів</span>
        </div>

        <a
          href="https://t.me/mariianina"
          target="_blank"
          className="btn btn-primary"
        >
          Отримати гроші
        </a>

        <p className="trust">
          Без перевірок • Відповідь за 5 хв
        </p>

        <p style={{ fontSize: "12px", color: "#94a3b8" }}>
          Кінцеву оцінку надає експерт-оцінщик
        </p>
      </>
    )}

  </div>
)}
</div>
        </div>
      </div>
    </section>
  );
}