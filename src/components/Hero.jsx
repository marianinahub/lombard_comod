import heroImg from "../assets/hero.png";
import logo from "../assets/logo.svg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      {/* LOGO */}
      <img src={logo} alt="Комод" className="hero-logo" />

      {/* BUTTONS */}
      <div className="hero-actions">

  <a href="#calculator" className="btn btn-primary">
    <span className="btn-icon">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4 6h16v12H4V6zm2 2v2h12V8H6zm0 4v4h12v-4H6z"
        />
      </svg>
    </span>
    Отримати гроші
  </a>

  <a href="#shop" className="btn btn-outline">
    <span className="btn-icon">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6 2l3 7h6l3-7M4 9h16l-1.5 11h-13z"
        />
      </svg>
    </span>
    Переглянути товари
  </a>

</div>
    </section>
  );
}