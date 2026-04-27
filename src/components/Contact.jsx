import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const icon = new L.Icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const locations = [
    { name: "Ломбард Комод — Центр", coords: [49.5535, 25.5948] },
    { name: "Ломбард Комод — Східний", coords: [49.5500, 25.6100] },
    { name: "Ломбард Комод — Дружба", coords: [49.5400, 25.5800] }
  ];

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Введіть ім'я та телефон");
      return;
    }

    setLoading(true);

    const TOKEN = "ТУТ_ТВОЙ_TOKEN";
    const CHAT_ID = "ТУТ_CHAT_ID";

    const textMsg = `
📩 Нова заявка з сайту

👤 Ім'я: ${name}
📞 Телефон: ${phone}
💬 Повідомлення: ${message || "-"}
`;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMsg
        })
      });

      setShowToast(true);

      setName("");
      setPhone("");
      setMessage("");

      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      alert("Помилка відправки в Telegram");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <h2 className="title">Контакти</h2>
        <p className="subtitle">
          Залиште заявку — ми передзвонимо за 5 хвилин
        </p>

        <div className="contact-grid">

          {/* MAP */}
          <div className="contact-map">
            <MapContainer
              center={[49.5535, 25.5948]}
              zoom={13}
              style={{
                height: "380px",
                width: "100%",
                borderRadius: "20px"
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {locations.map((loc, i) => (
                <Marker key={i} position={loc.coords} icon={icon}>
                  <Popup>{loc.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* FORM */}
          <div className="contact-card">

            <p className="contact-note">
              Безкоштовна консультація • Конфіденційно
            </p>

            <input
              className="input"
              placeholder="Ваше ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="input"
              placeholder="Телефон"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              className="input"
              placeholder="Що хочете здати?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ minHeight: "80px" }}
            />

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={loading}
              style={{ width: "100%", marginTop: "10px" }}
            >
              {loading ? "Відправка..." : "Отримати консультацію"}
            </button>

            <p className="contact-hint">
              Відповідаємо протягом 5 хвилин
            </p>

          </div>
        </div>

        {/* TOAST */}
        {showToast && (
          <div className="toast">
            Заявку надіслано ✅
          </div>
        )}

      </div>
    </section>
  );
}