"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { Flame } from "lucide-react";
import { LOCATIONS } from "@/data/locations";

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
  popupAnchor: [0, -18],
});

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(target, 15, { duration: 1.2 });
  }, [target, map]);
  return null;
}

export default function MapView({ active }: { active: string | null }) {
  const target = LOCATIONS.find((l) => l.id === active)?.coords ?? null;

  return (
    <MapContainer center={[52.513, 13.42]} zoom={12} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo target={target} />
      {LOCATIONS.map((loc) => (
        <Marker key={loc.id} position={loc.coords} icon={markerIcon}>
          <Popup>
            <div className="font-body">
              <strong className="font-display text-base tracking-wide">{loc.name}</strong>
              <br />
              {loc.street}, {loc.city}
              <br />
              <span className="text-xs">{loc.hours}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
