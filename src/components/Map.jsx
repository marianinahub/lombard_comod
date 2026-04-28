import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// 🔥 кастомний маркер (синій під твій стиль)
const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35]
});

export default function Map() {
  const locations = [
    {
      name: "Відділення — 15 квітня 9",
      coords: [49.56021626518944, 25.643396004891258]
    },
    {
      name: "Відділення — Слівенська 3",
      coords: [49.54921968560542, 25.62172246507542]
    },
    {
      name: "Відділення — Злуки 8",
      coords: [49.56068897907157, 25.618684874265696]
    }
  ];

  return (
    <MapContainer
      center={[49.555, 25.63]} // 🔥 трохи по центру всіх точок
      zoom={13}
      scrollWheelZoom={false} // 🔥 щоб не бісило
      style={{
        height: "380px",
        width: "100%",
        borderRadius: "20px"
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((loc, i) => (
        <Marker key={i} position={loc.coords} icon={icon}>
          <Popup>
            <div style={{ textAlign: "center" }}>
              <strong>{loc.name}</strong>
              <br />
              <a
                href={`https://www.google.com/maps?q=${loc.coords[0]},${loc.coords[1]}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0b5ed7", fontSize: "13px" }}
              >
                Відкрити в Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}