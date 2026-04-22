export default function Advantages() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Чому ми</h2>

        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h3 style={{ color: "#1387B8" }}>10+</h3>
            <p>років досвіду</p>
          </div>

          <div>
            <h3 style={{ color: "#1387B8" }}>1000+</h3>
            <p>клієнтів</p>
          </div>

          <div>
            <h3 style={{ color: "#1387B8" }}>15 хв</h3>
            <p>оформлення</p>
          </div>
        </div>
      </div>
    </section>
  );
}