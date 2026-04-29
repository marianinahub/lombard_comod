import "./services.css";

import {
  FaGem,
  FaLaptop,
  FaCar,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";
import { FaRing } from "react-icons/fa6";
import { useEffect } from "react";

export default function Services() {

  const items = [
    {
  icon: <FaRing />,
  title: "Золото та срібло",
  text: "Кредит під заставу ювелірних виробів за вигідною оцінкою"
},
    {
      icon: <FaGem />,
      title: "Діаманти",
      text: "Професійна оцінка діамантів та дорогоцінного каміння"
    },
    {
      icon: <FaLaptop />,
      title: "Техніка",
      text: "Ноутбуки, смартфони та електроніка"
    },
    {
      icon: <FaMobileAlt />,
      title: "Смартфони",
      text: "Швидка оцінка сучасних гаджетів"
    },
    {
      icon: <FaCar />,
      title: "Авто",
      text: "Кредит під заставу автомобіля"
    },
    {
      icon: <FaTools />,
      title: "Інше майно",
      text: "Розглядаємо різні цінні речі"
    }
  ];

  // ✅ ВАЖЛИВО — ВСЕРЕДИНІ КОМПОНЕНТА
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="services" className="section services">
      <div className="container">

        <h2 className="title">Кредит під заставу</h2>
        <p className="subtitle">
          Отримайте гроші швидко під заставу майна
        </p>

        <div className="services-grid">
          {items.map((item, i) => (
            <div key={i} className="card service-card">
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