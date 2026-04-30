import "./header.css";
import logo from "/src/assets/logo.svg";
import { useState, useEffect, useRef } from "react";
import { FiPhone } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hide, setHide] = useState(false);

  const lastScroll = useRef(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);

      if (current > lastScroll.current && current > 80) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScroll.current = current;

      const sections = ["services", "calculator", "shop", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (current >= top && current < bottom) {
            setActive(id);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""} ${hide ? "hide" : ""}`}>
        <div className="container header-inner">

          {/* LOGO */}
          <a href="/" className="logo-link">
            <img src={logo} alt="КОМОД" className="logo" />
          </a>

          {/* NAV */}
          <nav className="nav">
            <a href="#services" className={active === "services" ? "active" : ""}>Послуги</a>
            <a href="#calculator" className={active === "calculator" ? "active" : ""}>Калькулятор</a>
            <a href="#shop" className={active === "shop" ? "active" : ""}>Магазин</a>
            <a href="#contact" className={active === "contact" ? "active" : ""}>Контакти</a>
          </nav>

          {/* ACTIONS */}
          <div className="header-actions">

            <a
              href="https://web.pawnexpert.com.ua:8011/#/pay/0179170615"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold-premium pay-btn"
            >
              💳 Оплата
            </a>

            <a href="tel:+380636121217" className="btn btn-call">
              <FiPhone size={18} /> Дзвінок
            </a>

          </div>

          {/* BURGER */}
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <div className="mobile-content">

          <button className="close-btn" onClick={() => setOpen(false)} aria-label="Закрити меню">
  <span></span>
  <span></span>
</button>

          <a href="#services" onClick={handleClick}>Послуги</a>
          <a href="#calculator" onClick={handleClick}>Калькулятор</a>
          <a href="#shop" onClick={handleClick}>Магазин</a>
          <a href="#contact" onClick={handleClick}>Контакти</a>

          <a
            href="https://web.pawnexpert.com.ua:8011/#/pay/0179170615"
            className="btn btn-gold-premium pay-btn"
            onClick={handleClick}
          >
            💳 Оплата
          </a>

          <a
            href="tel:+380636121217"
            className="btn btn-call"
            onClick={handleClick}
          >
            <FiPhone size={18} /> Дзвінок
          </a>

        </div>
      </div>
    </>
  );
}