import React, { useState, useEffect } from 'react';
import TopBar from '../../components/header/TopBar'; 
import Kakao from '../../components/kakao/Kakao_MultiMarker';
import Entire from '../../components/kakao/Kakao_EntireMarker';
import './MapPage.css'; 
const MapPage = ( ) =>{
    const [isKakaoLoaded, setKakaoLoaded] = useState(false);
    const [isEntireLoaded, setEntireLoaded] = useState(true);
  const handleButtonClick = () => {
    // 담배 버튼을 누를 때 호출되는 함수 
    setKakaoLoaded(true); //카카오 나오고
    setEntireLoaded(false); //전체안나오고
  };

  const handleButtonClick2 = () => {
    // 전체 버튼을 누를 때 호출되는 함수 
    setKakaoLoaded(false); //카카오 안나오고 
    setEntireLoaded(true); //전체나오고
  };


    return ( 
        <div className="mapPage">
        <div className="bar">
                <div><TopBar/></div>   
             </div> 
        <div className="mapBox"> 
        <div className="buttonBox">
            <p className="filter-select-text">필터 선택   </p>
            <button className="filter-button "onClick={handleButtonClick2}>전체</button>
            <button className="filter-button" onClick={handleButtonClick}>
  담배
</button>
            <button className="filter-button ">플라스틱류</button>
            <button className="filter-button ">종이</button>
            <button className="filter-button ">유리</button>
            <button className="filter-button ">캔</button>
            <button className="filter-button ">비닐</button> 
        </div>
            <div className="map">
            <div>{isEntireLoaded&&<Entire/>}{isKakaoLoaded&&<Kakao/>}</div>
            </div>
        
        </div>
        </div>
    )
}

export default MapPage;