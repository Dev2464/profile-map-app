import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const MapComponent = ({ address }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0], // Dummy center
      zoom: 2,
    });

    // Mock address to coordinates conversion (replace with real geocoding)
    const coords = { lng: 0, lat: 0 }; // Replace with real coordinates
    new mapboxgl.Marker().setLngLat([coords.lng, coords.lat]).addTo(map);
  }, [address]);

  return <div ref={mapContainer} style={{ height: "400px", width: "100%" }} />;
};

export default MapComponent;