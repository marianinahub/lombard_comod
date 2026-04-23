export default function Hero() {
  return (
    <section className="hero">
      {/* glow */}
      <div className="hero-bg" />

      <div className="container hero-inner">

        <div className="hero-left fade-up">
          <h1>
            Гроші під заставу <br />
            <span>за 5 хвилин</span>
          </h1>

          <p>
            Швидка оцінка • Без перевірок •
            Гроші одразу після погодження
          </p>

          <div className="hero-actions">
            <a href="#calculator" className="btn btn-primary">
              Розрахувати
            </a>

            <a href="#shop" className="btn btn-outline">
              Товари
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right fade-up delay">
          <div className="hero-card">
            <p>Сума до</p>
            <h2>50 000 грн</h2>
            <span>вже сьогодні</span>
          </div>
        </div>

      </div>
    </section>
  );
}