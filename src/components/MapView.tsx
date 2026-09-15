"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { Flame } from "lucide-react";

const POSITION: [number, number] = [52.4996, 13.418];

const markerIcon = L.divIcon({
  html: renderToStaticMarkup(
    <div className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fire/50" />
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream bg-fire shadow-lg">
        <Flame className="h-4 w-4 text-cream" fill="currentColor" />
      </span>
    </div>
  ),
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

export default function MapView() {
  return (
    <MapContainer
      center={POSITION}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={POSITION} icon={markerIcon}>
        <Popup>
          <div className="font-body">
            <strong className="font-display text-base tracking-wide">
              Ateş Feuerdöner
            </strong>
            <br />
            Musterstraße 27, 10999 Berlin
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
