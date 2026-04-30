import { useEffect, useState } from "react";
import "./about.css";

export default function About() {
  const branches = [
    { name: "Відділення м.Тернопіль, вул 15 квітня 9", img: "/src/assets/kvitna.jpg" },
    { name: "Відділення м.Збараж, м-н І.Франка,8", img: "/src/assets/zbaraz.jpg" },
    { name: "Відділення м.Підволочиськ, вул Шевченка, 4а", img: "/src/assets/pidvolochisk.jpg" },
  ];

  const [activeImage, setActiveImage] = useState("/src/assets/kvitna.jpg");

  useEffect(() => {
    const el = document.querySelector(".about");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="about-inner">

          {/* 🔥 ГОЛОВНЕ ФОТО */}
          <div className="about-image">
            <img src={activeImage} alt="Ломбард Комод" />
          </div>

          {/* TEXT */}
          <div className="about-card">
            <span className="about-badge">Про компанію</span>

            <h2 className="about-title">
              Надійний фінансовий партнер
            </h2>

            <p className="about-lead">
              Отримайте гроші під заставу за 5 хвилин — без бюрократії
            </p>

            <p className="about-text">
              Ломбард «Комод» — сучасний сервіс кредитування з чесною оцінкою,
              швидким оформленням та повною конфіденційністю.
            </p>

            <div className="about-features">
              <span>⚡ Швидко</span>
              <span>💰 Вигідно</span>
              <span>🔒 Безпечно</span>
              <span>📊 Чесно</span>
            </div>

            <div className="about-stats">
              <div className="stat">
                <span>5 хв</span>
                <p>Оцінка</p>
              </div>
              <div className="stat">
                <span>0%</span>
                <p>Бюрократії</p>
              </div>
              <div className="stat">
                <span>100%</span>
                <p>Надійність</p>
              </div>
            </div>

            <a href="#calculator" className="btn btn-primary about-btn">
              Отримати гроші
            </a>
          </div>

        </div>

        {/* 🔥 ВІДДІЛЕННЯ */}
        <div className="about-branches">
          <h3 className="branches-title">Наші відділення</h3>

          <div className="branches-grid">
            {branches.map((b, i) => (
              <div
                key={i}
                className={`branch-card ${
                  activeImage === b.img ? "active" : ""
                }`}
                onClick={() => setActiveImage(b.img)}
              >
                <img src={b.img} alt={b.name} />
                <div className="branch-overlay">
                  <span>{b.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}