import React, { useEffect } from "react";
import entireData from "../data/entireData";
import axios from 'axios';
const { kakao } = window;

const EntireMap = () => {
  useEffect(() => {
    mapScript();
  }, []);

  const mapScript = () => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.548399939149164, 127.0581401651654),
      level: 1
    };

    const map = new kakao.maps.Map(container, options);

    entireData.forEach((el) => {
      if (el.lat && el.lng) {
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
        });
      }
    });
  }

  return <div id="map" style={{ width: "80vw", height: "75vh" }}></div>;
}

export default EntireMap;