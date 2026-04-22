import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        padding: "15px 20px",
        zIndex: 100
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        {/* ✅ ЛОГО */}
        <img
          src={logo}
          alt="КОМОД"
          style={{ width: "120px" }}
        />

        {/* NAV */}
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#services">Послуги</a>
          <a href="#shop">Магазин</a>
          <a href="#calculator">Калькулятор</a>
          <a href="#contact">Контакти</a>
        </nav>

        {/* ACTIONS */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href="https://web.pawnexpert.com.ua:8011/#/pay/0179170615"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Оплатити договір
          </a>

          <a href="tel:+380962697569" className="btn btn-primary">
            Дзвінок
          </a>
        </div>

      </div>
    </header>
  );
}