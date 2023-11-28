import './ComplaintTableTh.css';
import React, { useState } from 'react';  
import axios from 'axios'; 
import locationData from '../data/locationData';
import trashTypeData from '../data/trashTypeData';
import processData from '../data/processData';

const ComplaintTableTh = ({
  isSearchButtonOn,
  setIsSearchButtonOn,
  selectedLocation,
  setSelectedLocation,
  selectedType,
  setSelectedType,
  selectedProcess,
  setSelectedProcess
}) =>  {   
  
  //선택된 위치,유형,처리과정 값이 바뀌면 바꿔주고, 로그에 출력하는 인스턴트 
  const handleTypeSelect = (selectedTypeValue) => {
    if (selectedType === selectedTypeValue){
      //두번 체크하면 체크 해제
        setSelectedType(null);
    }
    else {
        setSelectedType(selectedTypeValue);
    } 
    console.log('Selected type:', selectedTypeValue); 
  }; 

  const handleLocationSelect = (selectedLocationValue) => { 
    if (selectedLocation === selectedLocationValue) { 
        //두번 체크하면 체크 해제
        setSelectedLocation(null);
      } 
    else { 
        setSelectedLocation(selectedLocationValue);
    } 
    console.log('Selected location:', selectedLocationValue);
  };

  const handleProcessSelect = (selectedProcessValue) => {
    if (selectedProcess === selectedProcessValue){
      //두번 체크하면 체크 해제
        setSelectedProcess(null); 
    }
    else{
        setSelectedProcess(selectedProcessValue);
    }
    console.log('Selected process:', selectedProcessValue);  
  };
 
  
  //검색 버튼이 눌리면 로그에 선택된 위치, 유형, 처리과정 값 출력
  const handleSearchButtonClick = () => {
    console.log( selectedType,selectedLocation,selectedProcess);
    setIsSearchButtonOn(true);  
    return(isSearchButtonOn,selectedType,selectedLocation,selectedProcess);
  };

  //드롭다운이 나타나게 하기 위한 컨스턴트 

  const [showDateDropdown, setShowDateDropdown] = useState(false);  
  const [isDateButtonOn, setIsDateButtonOn] = useState(false);

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);  
  const [isLocationButtonOn, setIsLocationButtonOn] = useState(false);

  const [showTypeDropdown, setShowTypeDropdown] = useState(false);  
  const [isTypeButtonOn, setIsTypeButtonOn] = useState(false);

  const [showProcessDropdown, setShowProcessDropdown] = useState(false);  
  const [isProcessButtonOn, setIsProcessButtonOn] = useState(false);


  const handleDateButtonClick = () => {  
    setIsDateButtonOn(!isDateButtonOn);  //버튼 글씨바뀜
    setShowDateDropdown(!showDateDropdown); //드롭다운 팝업
  };

  const handleLocationButtonClick  = () => {
    setIsLocationButtonOn(!isLocationButtonOn);  //버튼 글씨바뀜
    setShowLocationDropdown(!showLocationDropdown); //드롭다운 팝업
  }

  const handleTypeButtonClick = () => {
    setIsTypeButtonOn(!isTypeButtonOn);
    setShowTypeDropdown(!showTypeDropdown);
  }

  const handleProcessButtonClick = () => {
    setIsProcessButtonOn(!isProcessButtonOn);
    setShowProcessDropdown(!showProcessDropdown);
  }

  const handleInitButtonClick = () =>{
    setIsSearchButtonOn(false);  
    return(isSearchButtonOn,selectedType,selectedLocation,selectedProcess);
  }
  
  return (
    <div>  
      <div className="complaint-box"> 
    <div className="button-container">
    <button className="search-button" onClick={handleSearchButtonClick}>
      검색
    </button>
    <button className="init-button" onClick={handleInitButtonClick}>
      검색 초기화
    </button>
  </div>
        <table className='complaint-table'> 
          <thead> 
            <tr> 
              <th style={{ width: '25%' }}>날짜</th> 
              <th style={{ width: '4%' }}>시간</th> 

              <th className="location-th" style={{ width: '21%' }}> 
              <button 
                className="location-button"
                onClick={handleLocationButtonClick} 
              >
               {isLocationButtonOn ? '▲ 위치' : '▼ 위치'}  
              </button>   
             </th>

              <div className="location-drop-button"
               style={{ 
                marginLeft:'180px',
                marginTop: '-60px',
                background: isLocationButtonOn ? 'white' : 'transparent',
                border: isLocationButtonOn ? '1px solid black' : 'none',
                borderRadius: isLocationButtonOn ? '15px' : 'none'  
              }}
                >
                {showLocationDropdown && (
                  <>
                    <div className="dropdown-container" > 
                     {locationData.map((location) => (
                         <div key={location}>
                         <input
                            type="checkbox"
                             onChange={() => handleLocationSelect(location)}
                              checked={selectedLocation === location}
                         />
                         {location}
                    </div>
                    ))}
            </div>
             </>
             )}
            </div>  

              <th style={{ width: '22%' }}>
              <button
                className="type-button"
                onClick={handleTypeButtonClick} 
              >
               {isTypeButtonOn ? '▲ 유형' : '▼ 유형'} 
              </button>  
              </th> 

              <th style={{ width: '17%' }}>
              <button
                className="process-button"
                onClick={handleProcessButtonClick} 
              >
               {isProcessButtonOn ? '▲ 처리 과정' : '▼ 처리 과정'} 
              </button> </th> 
              <div style={{marginLeft:'30px', marginTop:'15px',fontWeight:'bold'}}>상세</div>
  

              


              <div className="type-drop-button"
              style={{
                
                marginLeft:'240px',
                marginTop: '65px',
                background: isTypeButtonOn ? 'white' : 'transparent',
                border: isTypeButtonOn ? '1px solid black' : 'none',
                borderRadius: isTypeButtonOn ? '15px' : 'none'  
              }}
                >
                {showTypeDropdown && (
                      <>
                 <div className="dropdown-container">
          {trashTypeData.map((location) => (
            <div key={location}>
              <input
                type="checkbox"
                onChange={() => handleTypeSelect(location)}
                checked={selectedType === location}
              />
              {location}
              </div>
                    ))}
            </div>
    </>
  )}

          </div> 
            <div className="process-drop-button"
               style={{
                width:'100px',
                marginLeft:'265px',
                marginTop: '65px',
                background: isProcessButtonOn ? 'white' : 'transparent',
                border: isProcessButtonOn ? '1px solid black' : 'none',
                borderRadius: isProcessButtonOn ? '15px' : 'none'  
             }}>
                {showProcessDropdown &&(
                  <> <div className="dropdown-container">
                    {processData.map((location) => (
                       <div key={location}>
                          <input
                           type="checkbox"
                           onChange={() => handleProcessSelect(location)}
                           checked={selectedProcess === location}
                          />
                        {location}
              </div>
                    ))}
            </div>
    </>
  )}
              </div> 
              
            </tr>
          </thead>
           
        </table>   
        
      </div> 
    </div>
  );
};

export default ComplaintTableTh;