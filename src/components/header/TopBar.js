import './TopBar.css';
import { useNavigate } from 'react-router-dom';
import React from 'react'; 

function TopBar() {  
  //상단바(로고&메뉴)

  const navigate = useNavigate(); 
  const handleClick = (path) => {
    navigate(path);
  };
  
  return (
    <div className="web">
      <div className="topbar"> 
         <img
            className="logoImage"
            alt="logoImage"
           src={`${process.env.PUBLIC_URL}/img/ecotag_logo.png`}
            /> 
          <button className="logout-button" onClick={() => handleClick('/login')}>로그아웃</button>    
      </div> 

      <div className="navbar"> 
        <button className="complaint_list_button" onClick={() => handleClick('/')}>
          민원 리스트
        </button>
        <button className="map_button" onClick={() => handleClick('/mapPage')}>
          지도
        </button>  
        <button className="statistics_button" onClick={() => handleClick('/statistics')}>
          통계
        </button>  
        <button className="cleaning_button" onClick={() => handleClick('/cleaning')}>
          청소 업체
        </button>  
      </div>


    </div> 
  );
}

export default TopBar;