import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // scroll shadow + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["services","calculator","shop","contact"];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">

          {/* LOGO */}
          <a href="/">
            <img src={logo} alt="КОМОД" className="logo" />
          </a>

          {/* NAV */}
          <nav className="nav">
            <a href="#services" className={active==="services" ? "active" : ""}>Послуги</a>
            <a href="#calculator" className={active==="calculator" ? "active" : ""}>Калькулятор</a>
            <a href="#shop" className={active==="shop" ? "active" : ""}>Магазин</a>
            <a href="#contact" className={active==="contact" ? "active" : ""}>Контакти</a>
          </nav>

          {/* ACTIONS */}
          <div className="header-actions">

            <a
              href="https://web.pawnexpert.com.ua:8011/#/pay/0179170615"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline pay-btn"
            >
              <span className="pay-icon">💳</span>
              Оплата
            </a>

            <a href="tel:+380962697569" className="btn btn-primary call-btn">
              <span className="call-icon">📞</span>
              Дзвінок
            </a>

          </div>

          {/* BURGER */}
          <div className="burger" onClick={() => setOpen(true)}>
            ☰
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`mobile-menu ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div
          className="mobile-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close" onClick={() => setOpen(false)}>✕</button>

          <a href="#services" onClick={handleClick}>Послуги</a>
          <a href="#calculator" onClick={handleClick}>Калькулятор</a>
          <a href="#shop" onClick={handleClick}>Магазин</a>
          <a href="#contact" onClick={handleClick}>Контакти</a>

          <a
            href="https://web.pawnexpert.com.ua:8011/#/pay/0179170615"
            className="btn btn-outline"
          >
            Оплатити
          </a>

          <a href="tel:+380962697569" className="btn btn-primary">
            Дзвінок
          </a>

        </div>
      </div>
    </>
  );
}