import heroImg from "/src/assets/hero.jpg";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* WAVE */}
      <svg className="hero-wave" viewBox="0 0 800 600">
        <path
          d="M800,0 C500,200 500,400 800,600 L800,0 Z"
          fill="url(#grad)"
        />
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#0b5ed7" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="hero-container">

        <div className="hero-main">

          {/* IMAGE */}
          <div className="hero-image">
            <img src={heroImg} alt="Кредит онлайн" />
          </div>

          {/* TEXT */}
          <div className="hero-left">

            <h1>
              ЛОМБАРД <br />ШВИДКИЙ  КРЕДИТ
            </h1>

            <p>
              З нами вигідно і безпечно.
            </p>

            {/* BUTTONS */}
            <div className="hero-actions">

              <a href="#calculator" className="btn btn-primary">
{/* RIGHT ARROW */}
  <svg className="btn-arrow right" viewBox="0 0 24 24">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>

  <span className="btn-text">Оцінка онлайн</span>

  {/* LEFT ARROW */}
  <svg className="btn-arrow left" viewBox="0 0 24 24">
    <path
      d="M19 12H5M11 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>

</a>

              <a href="#shop" className="btn btn-glass">
                <div className="btn-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 6h18l-2 12H5L3 6z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                    <path d="M8 6a4 4 0 018 0" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  </svg>
                </div>
                <span>Вигідні комісійні товари</span>
              </a>

            </div>

            {/* TRUST */}
            <div className="hero-trust">
              ✔ Без довідок • ✔ Без прихованих комісій • ✔ Швидке рішення
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
