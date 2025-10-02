"use client";

import React, { useEffect } from "react";

import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import VectorSource from "ol/source/Vector.js";
import VectorLayer from "ol/layer/Vector.js";
import { Icon, Style } from "ol/style.js";
import { fromLonLat } from "ol/proj.js";

const MapSection = () => {
  useEffect(() => {
    // Base map
    const baseLayer = new TileLayer({
      source: new OSM(),
    });

    // Buat marker (contoh: koordinat Jakarta)
    const marker = new Feature({
      geometry: new Point(fromLonLat([106.8456, -6.2088])), // [longitude, latitude]
    });

    // Style marker pakai icon PNG
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1], // titik bawah icon sebagai anchor
          src: "/assets/marker.svg", // contoh icon
        }),
      })
    );

    // Vector source & layer untuk marker
    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Inisialisasi map
    const map = new Map({
      target: "map",
      layers: [baseLayer, vectorLayer],
      view: new View({
        center: fromLonLat([106.8456, -6.2088]), // pusat ke Jakarta
        zoom: 19,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <>
      {/* Map Section */}
      <div id="map" className="map w-full mt-10"></div>
    </>
  );
};

export default MapSection;
