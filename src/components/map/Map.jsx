import "./map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

// 📍 стандарт маркер
const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36]
});

// 🔥 активний
const activeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  className: "marker-active"
});

// 👤 користувач
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

// 🔥 fly to
function FlyTo({ coords }) {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 15, { duration: 0.8 });
    }
  }, [coords]);

  return null;
}

// 📏 відстань
function getDistance(a, b) {
  const toRad = (v) => (v * Math.PI) / 180;

  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);

  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);

  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  return R * (2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)));
}

export default function Map() {
  const [active, setActive] = useState(null);
  const [userPos, setUserPos] = useState(null);
  const [nearest, setNearest] = useState(null);

  const locations = [
    {
      name: "15 квітня 9",
      coords: [49.56021626518944, 25.643396004891258]
    },
    {
      name: "Слівенська 3",
      coords: [49.54921968560542, 25.62172246507542]
    },
    {
      name: "Злуки 8",
      coords: [49.56068897907157, 25.618684874265696]
    }
  ];

  // 📍 геолокація
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setUserPos(coords);

        // 🔥 шукаємо найближче
        let min = 999;
        let index = 0;

        locations.forEach((loc, i) => {
          const dist = getDistance(coords, loc.coords);
          if (dist < min) {
            min = dist;
            index = i;
          }
        });

        setNearest(index);
        setActive(index);
      },
      () => {}
    );
  }, []);

  return (
    <div className="map-wrapper">

      <MapContainer
        center={[49.555, 25.63]}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

        <FlyTo coords={active !== null ? locations[active].coords : null} />

        {/* 📍 користувач */}
        {userPos && (
          <Marker position={userPos} icon={userIcon}>
            <Popup>Ви тут</Popup>
          </Marker>
        )}

        {locations.map((loc, i) => (
          <Marker
            key={i}
            position={loc.coords}
            icon={active === i ? activeIcon : icon}
            eventHandlers={{
              click: () => setActive(i)
            }}
          >
            <Popup>
              <div className="map-popup">
                <strong>{loc.name}</strong>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coords[0]},${loc.coords[1]}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Прокласти маршрут →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 🔥 список */}
      <div className="map-list">
  {locations.map((loc, i) => {
    const distance =
      userPos && getDistance(userPos, loc.coords).toFixed(2);

    return (
      <div
        key={i}
        className={`map-card 
          ${active === i ? "active" : ""} 
          ${nearest === i ? "nearest" : ""}
        `}
        onClick={() => setActive(i)}
      >
        <div className="map-card-top">
          <span className="map-title">📍 {loc.name}</span>

          {nearest === i && (
            <span className="badge">Найближче</span>
          )}
        </div>

        {distance && (
          <div className="map-distance">
            ~ {distance} км від вас
          </div>
        )}

        <a
          className="map-route"
          href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coords[0]},${loc.coords[1]}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Прокласти маршрут →
        </a>
      </div>
    );
  })}
</div>
    </div>
  );
}