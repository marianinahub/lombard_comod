import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// 🔥 фікс іконки (обовʼязково)
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const icon = new L.Icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Map() {
  const locations = [
    {
      name: "Центр",
      coords: [49.5535, 25.5948]
    },
    {
      name: "Слівенська 3",
      coords: [49.54921968560542, 25.62172246507542]
    },
    {
      name: "Дружба",
      coords: [49.5400, 25.5800]
    }
  ];

  return (
    <MapContainer
      center={[49.54921968560542, 25.62172246507542]}
      zoom={13}
      style={{ height: "380px", width: "100%", borderRadius: "20px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc, i) => (
        <Marker key={i} position={loc.coords} icon={icon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}