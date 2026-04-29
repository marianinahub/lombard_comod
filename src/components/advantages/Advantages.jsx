import "./advantages.css";
import { useEffect, useRef } from "react";
import {
  FaBolt,
  FaUserShield,
  FaClock,
  FaCheckCircle,
  FaGem,
  FaPercent
} from "react-icons/fa";

export default function WhyUs() {
  const refs = useRef([]);

  const items = [
    {
      icon: <FaBolt />,
      number: 5,
      suffix: " хв",
      title: "Оцінка майна",
      text: "Швидке визначення вартості без зайвих процедур"
    },
    {
      icon: <FaUserShield />,
      number: 0,
      suffix: " перевірок",
      title: "Без довідок",
      text: "Не перевіряємо кредитну історію"
    },
    {
      icon: <FaClock />,
      number: 10,
      suffix: " хв",
      title: "Оформлення",
      text: "Оформлення договору займає мінімум часу"
    },
    {
      icon: <FaCheckCircle />,
      number: 100,
      suffix: "%",
      title: "Надійність",
      text: "Гарантія безпеки та збереження майна"
    },
    {
      icon: <FaGem />,
      number: 100,
      suffix: "%",
      title: "Оцінка дорогоцінностей",
      text: "Професійна оцінка золота та діамантів"
    },
    {
      icon: <FaPercent />,
      number: 0,
      suffix: " прихованих комісій",
      title: "Чесні умови",
      text: "Прозорі договори без додаткових платежів"
    }
  ];
  useEffect(() => {
  const cards = document.querySelectorAll(".why-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120); // 🔥 stagger як Apple
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
}, []);
  useEffect(() => {
    refs.current.forEach((el, i) => {
      let start = 0;
      const end = items[i].number;
      const duration = 1000;
      const step = end / (duration / 16);

      const counter = () => {
        start += step;
        if (start < end) {
          el.textContent = Math.floor(start);
          requestAnimationFrame(counter);
        } else {
          el.textContent = end;
        }
      };

      counter();
    });
  }, []);

  return (
    <section className="section why-us">
      <div className="container">

        <h2 className="title">Чому обирають нас</h2>
        <p className="subtitle">
          Працюємо швидко, чесно та без зайвих складнощів
        </p>

        <div className="why-grid">
          {items.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{item.icon}</div>

              <div className="why-number">
                <span ref={(el) => (refs.current[i] = el)}>0</span>
                {item.suffix}
              </div>

              <h3>{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}