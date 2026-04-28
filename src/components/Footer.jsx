import logo from "../assets/logo.svg";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaTelegram,
  FaClock
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* БРЕНД */}
        <div className="footer-brand">
          <img src={logo} alt="КОМОД" />

          <p>
            Ломбард «Комод» — швидкі гроші під заставу у Тернополі.
          </p>
        </div>

        {/* МЕНЮ */}
        <div>
          <h4>Меню</h4>

          <div className="footer-links">
            <a href="#services">Послуги</a>
            <a href="#about">Про нас</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#contact">Контакти</a>
          </div>
        </div>

        {/* ВІДДІЛЕННЯ */}
        <div>
          <h4>Відділення</h4>

          <div className="footer-contacts">
            <div>
              <FaMapMarkerAlt />
              <span>15 квітня 9</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Слівенська 3</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Злуки 8</span>
            </div>
          </div>
        </div>

        {/* КОНТАКТИ + CTA */}
        <div>
          <h4>Зв’язок</h4>

          <div className="footer-contacts">
            <div>
              <FaPhone />
              <a href="tel:+380962697569">+380 96 269 75 69</a>
            </div>

            <div>
              <FaClock />
              <span>Щодня 09:00–19:00</span>
            </div>
          </div>
          <a
            href="https://t.me/mariianina"
            target="_blank"
            className="footer-telegram"
          >
            <FaTelegram />
            Написати в Telegram
          </a>
        </div>

      </div>

      {/* ЛІНІЯ */}
      <div className="footer-divider" />

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Ломбард «Комод». Всі права захищені.
      </div>
    </footer>
  );
}