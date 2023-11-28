import React, { useEffect , useState} from "react";
import mappingData from "../data/mappingData";   
import axios from 'axios'; 
const { kakao } = window;

export default function Map() {
  /*
  const [complaints, setComplaints] = useState([]); 
*/

  useEffect(() => {
    mapScript();
  }, []);
/*
  useEffect(()=>{
    async function getData() {
      try {
        //응답 성공
        const response = await axios.get('api/ecotag/coordinate');
        console.log(response.data);
        setComplaints(response.data);
      } catch (error) {
        //응답 실패
        console.error('에러 발생:', error);
      }
    }
    getData();
  }, []);

  */
  const mapScript = () => {
    let container = document.getElementById("map");
//담배꽁초 중심좌표 37.5483185552874, 127.05873420541882
    let options = {
      center: new kakao.maps.LatLng(37.548399939149164  , 127.0581401651654  ),
      level: 1
    };
    

    const map = new kakao.maps.Map(container, options);

    mappingData.forEach((el) => {
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