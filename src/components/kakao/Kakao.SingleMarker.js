import React, { useEffect } from "react";

const { kakao } = window;

export default function SingleMap({ lat, lng }) {
  useEffect(() => {
    mapScript();
  }, [lat,lng]);  

  const mapScript = () => {
    const container = document.getElementById("map");

    if (container) {
      const options = {
        center: new kakao.maps.LatLng(lat || 37.54983461173545, lng || 127.04270842167057),
        level: 5
      };

      const map = new kakao.maps.Map(container, options);

      if (lat && lng) {
        addMarker(map, lat, lng);
      }
    } else {
      console.error("Map container not found.");
    }
  };

  const addMarker = (map, lat = 0, lng = 0) => {
    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(lat, lng), 
    });
  };

  return <div id="map" style={{ width: "70%", height: "300px" }}></div>;
}