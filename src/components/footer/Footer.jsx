import "./footer.css"
import logo from "/src/assets/logo.svg";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaTelegram,
  FaClock,
  FaViber,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-compact">
      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
         <a href="#home">
            <img src={logo} alt="КОМОД" />
          </a>
          <p>Грошей не вистачає? Ломбард виручає!</p>
        </div>

        {/* NAV */}
        <div className="footer-links">
          <a href="#services">Послуги</a>
          <a href="#about">Про нас</a>
          <a href="#calculator">Калькулятор</a>
        </div>

        {/* CONTACT */}
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

        {/* CTA */}
        <div className="footer-socials">

  <a
    href="viber://chat?number=%2B380962697569"
    data-name="Viber"
  >
    <FaViber />
  </a>

  <a
    href="https://t.me/mariianina"
    target="_blank"
    rel="noreferrer"
    data-name="Telegram"
  >
    <FaTelegram />
  </a>

  <a
    href="https://instagram.com/your_username"
    target="_blank"
    rel="noreferrer"
    data-name="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://facebook.com/your_page"
    target="_blank"
    rel="noreferrer"
    data-name="Facebook"
  >
    <FaFacebookF />
  </a>

</div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Ломбард «Комод». Всі права захищені.
        </span>

      </div>
    </footer>
  );
}