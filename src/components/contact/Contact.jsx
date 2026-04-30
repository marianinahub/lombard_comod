import "./contact.css";
import { useState } from "react";
import { FaClock } from "react-icons/fa";
import Map from "../map/Map";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const schedule = {
    0: null,
    1: { open: 9, close: 20 },
    2: { open: 9, close: 20 },
    3: { open: 9, close: 20 },
    4: { open: 9, close: 20 },
    5: { open: 9, close: 20 },
    6: { open: 10, close: 18 }
  };

  const getWorkStatus = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    const today = schedule[day];

    if (!today) {
      return { text: "Зачинено", sub: "Пн–Сб", open: false };
    }

    const { open, close } = today;

    if (hour >= open && hour < close) {
      return { text: "Відкрито", sub: `${open}:00–${close}:00`, open: true };
    }

    return { text: "Зачинено", sub: `${open}:00–${close}:00`, open: false };
  };

  const work = getWorkStatus();

  const handleSubmit = async () => {
    if (!name || !phone) return;

    setLoading(true);

    try {
      const TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
      const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `${name} ${phone}`
        })
      });

      setShowToast(true);
      setName("");
      setPhone("");
    } catch {}

    setLoading(false);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section className="contact" id="contact">

      {/* MAP BACKGROUND */}
      <div className="contact-bg">
        <Map />
      </div>

      <div className="contact-inner">

        {/* RIGHT COLUMN (графік + форма) */}
        <div className="contact-form-wrap">

          <div className={`contact-worktime ${work.open ? "open" : "closed"}`}>
            <FaClock />
            <div>
              <div className="work-main">{work.text}</div>
              <div className="work-sub">{work.sub}</div>
            </div>
          </div>

          <div className="contact-card">

  <h3 className="contact-title">
    Залишити заявку
  </h3>

  <p className="contact-desc">
    Передзвонимо протягом 5 хвилин
  </p>

  <input
    placeholder="Ім’я"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    placeholder="Телефон"
    value={phone}
    onChange={(e) =>
      setPhone(e.target.value.replace(/\D/g, "").slice(0, 12))
    }
  />

  <button onClick={handleSubmit} disabled={loading}>
    {loading ? "Відправка..." : "Отримати гроші"}
  </button>

</div>

        </div>

      </div>

      {showToast && <div className="toast">Повідомлення надіслано</div>}
    </section>
  );
}