"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import type { MapLocation } from "../config/portfolio";

type Props = { locations: MapLocation[] };

export default function TravelMap({ locations }: Props) {
  // "current" pin: map opens centered on it and it renders last (on top)
  const current = locations.find((loc) => loc.type === "current");
  const others = locations.filter((loc) => loc !== current);

  return (
    <MapContainer
      center={current ? current.coords : [30, 10]}
      zoom={current ? 4 : 2}
      minZoom={2}
      maxZoom={16}
      style={{ height: "100%", width: "100%", background: "#0a0a0a" }}
      zoomControl={true}
      attributionControl={true}
      scrollWheelZoom={true}
      maxBounds={[[-85, -180], [85, 180]]}
      maxBoundsViscosity={1.0}
    >
      {/* Esri Dark Gray Canvas: keyless, but attribution is required */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="&copy; Esri"
        maxZoom={16}
      />
      {others.map((loc) => (
        <CircleMarker
          key={loc.name}
          center={loc.coords}
          radius={loc.type === "lived" ? 5 : 4}
          pathOptions={{
            color: "white",
            weight: 1.5,
            fillColor: "white",
            fillOpacity: loc.type === "lived" ? 1 : 0,
            opacity: loc.type === "lived" ? 1 : 0.6,
          }}
        >
          <Tooltip
            direction="top"
            offset={[0, -8]}
            permanent={false}
            className="map-tooltip"
          >
            <span className="font-mono text-[12px]">
              {loc.name}
              {loc.note ? ` · ${loc.note}` : ""}
            </span>
          </Tooltip>
        </CircleMarker>
      ))}
      {current && (
        <>
          <CircleMarker
            center={current.coords}
            radius={14}
            interactive={false}
            pathOptions={{
              className: "map-pulse",
              color: "white",
              weight: 1,
              fillColor: "white",
              fillOpacity: 0.15,
            }}
          />
          <CircleMarker
            center={current.coords}
            radius={7}
            pathOptions={{
              color: "white",
              weight: 2,
              fillColor: "white",
              fillOpacity: 1,
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -10]}
              permanent={true}
              className="map-tooltip"
            >
              <span className="font-mono text-[12px]">
                {current.name}
                {current.note ? ` · ${current.note}` : ""}
              </span>
            </Tooltip>
          </CircleMarker>
        </>
      )}
    </MapContainer>
  );
}
