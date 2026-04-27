import { useEffect } from "react";

export default function About() {
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
    <section id="about" className="section about">
      <div className="container about-inner">

        {/* IMAGE */}
        <div className="about-image">
          <img src="/about.jpg" alt="Ломбард Комод" />
        </div>

        {/* TEXT */}
        <div className="about-content">
          <h2 className="title">Про нас</h2>

          <p className="about-lead">
            Надійний ломбард із вигідними умовами та швидким отриманням коштів
          </p>

          <p className="text-muted">
            Ломбард «Комод» — це сучасний сервіс кредитування під заставу,
            який допомагає отримати гроші швидко, без зайвих перевірок та
            складних процедур.
          </p>

          <p className="text-muted">
            Ми спеціалізуємося на оцінці ювелірних виробів, техніки,
            автомобілів та дорогоцінного каміння, пропонуючи клієнтам
            максимально вигідні умови.
          </p>

          <p className="text-muted">
            Наша мета — зробити процес отримання коштів простим,
            прозорим і зручним. Ми гарантуємо чесну оцінку,
            конфіденційність та надійне зберігання вашого майна.
          </p>

          {/* FEATURES */}
          <div className="about-features">
            <div>✔ Швидке оформлення</div>
            <div>✔ Вигідні умови</div>
            <div>✔ Без перевірок</div>
            <div>✔ Конфіденційність</div>
          </div>

          {/* STATS */}
          <div className="about-stats">
            <div>
              <span>5 хв</span>
              <p>Оцінка</p>
            </div>
            <div>
              <span>0%</span>
              <p>Зайвих перевірок</p>
            </div>
            <div>
              <span>100%</span>
              <p>Надійність</p>
            </div>
          </div>

          {/* CTA */}
          <a href="#calculator" className="btn btn-primary about-btn">
            Отримати гроші
          </a>
        </div>

      </div>
    </section>
  );
}