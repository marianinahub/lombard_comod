import { FaGem, FaLaptop, FaCar } from "react-icons/fa";

export default function Services() {
  const items = [
    { icon: <FaGem />, title: "Золото", text: "Вигідна оцінка прикрас" },
    { icon: <FaLaptop />, title: "Техніка", text: "Ноутбуки, смартфони" },
    { icon: <FaCar />, title: "Авто", text: "Під заставу авто" }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="title">Послуги</h2>
        <p className="subtitle">Що ми приймаємо під заставу</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: "20px" }}>
          {items.map((item, i) => (
            <div key={i} className="card">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}