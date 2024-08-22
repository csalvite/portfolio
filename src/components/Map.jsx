'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Asegúrate de importar Leaflet

// URL del icono del marcador (puedes usar un icono de Leaflet o uno personalizado)
const customIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // URL del icono del marcador
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
  popupAnchor: [1, -34], // Punto de anclaje del popup
});

const MyMap = ({ fullw = false }) => {
  return (
    <MapContainer
      center={[42.84064, -8.90257]}
      zoom={10}
      style={{ height: '300px', width: fullw ? '100%' : '80%' }}
    >
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      />
      <Marker position={[42.84064, -8.90257]} icon={customIcon}>
        <Popup>holi 😄</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
