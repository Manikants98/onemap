import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useTheme } from "../../Context/ThemeContext";

const singaporePosition: [number, number] = [1.3521, 103.8198];

const MapComponent: React.FC = () => {
  const { mode } = useTheme();
  const baseMapUrl = (style: string) =>
    `https://www.onemap.gov.sg/maps/tiles/${style}/{z}/{x}/{y}.png`;
  return (
    <MapContainer
      center={singaporePosition}
      zoom={13}
      style={{ height: "91.5%", width: "100%" }}
    >
      <TileLayer url={baseMapUrl(mode === "dark" ? "Night" : "Default")} />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
