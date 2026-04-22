import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f8fafc",
        padding: "60px 20px 30px",
        marginTop: "60px"
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "30px",
          textAlign: "left"
        }}
      >

        {/* БРЕНД */}
        <div>
           <img
          src={logo}
          alt="КОМОД"
          style={{ width: "120px" }}
        />

          <p style={{ color: "#64748b" }}>
            Ломбард у Тернополі — швидко, надійно, вигідно
          </p>
        </div>

        {/* НАВІГАЦІЯ */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Меню</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <a href="#services">Послуги</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#contact">Контакти</a>
          </div>
        </div>

        {/* КОНТАКТИ */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Контакти</h4>

          <p>м. Тернопіль</p>
          <a href="tel:+380XXXXXXXXX">+380 XXX XX XX</a>
        </div>

        {/* CTA */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Зв’язок</h4>

          <button className="btn btn-primary">
            Отримати консультацію
          </button>
        </div>

      </div>

      {/* ЛІНІЯ */}
      <div
        style={{
          height: "1px",
          background: "#e2e8f0",
          margin: "30px 0"
        }}
      />

      {/* COPYRIGHT */}
      <div style={{ textAlign: "center", color: "#94a3b8", fontSize: "14px" }}>
        © {new Date().getFullYear()} КОМОД. Всі права захищені.
      </div>
    </footer>
  );
}