import './Main.css';  
import React, { useState } from 'react'; 
import TopBar from '../../components/header/TopBar';
import ComplaintList from '../../components/list/ComplaintList';
import ComplaintTableTh from '../../components/list/ComplaintTableTh';
import SearchedComplaint from '../../components/list/SearchedComplaint';

const Main = () => {     
      
    const [isSearchButtonOn, setIsSearchButtonOn]=useState(false);
    //useState로 선택된 위치, 유형, 처리과정 값!! 초기 선언
    const [selectedLocation,setSelectedLocation] = useState(null); 
    const [selectedType, setSelectedType] = useState(null); 
    const [selectedProcess, setSelectedProcess] = useState(null);
    return ( 
        <div className="main-box">  
             <div className="bar">
                <div><TopBar/></div>   
            </div> 
            <div className="complaint_list">
                <div><ComplaintTableTh isSearchButtonOn={isSearchButtonOn} setIsSearchButtonOn={setIsSearchButtonOn}
                selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} 
                selectedType={selectedType} setSelectedType={setSelectedType} 
                selectedProcess={selectedProcess} setSelectedProcess={setSelectedProcess}/></div>
                {isSearchButtonOn ? (
                 <div><SearchedComplaint selectedLocation={selectedLocation}  
                                         selectedType={selectedType}  
                                         selectedProcess={selectedProcess}  /></div>
                 ) : (
                 <div><ComplaintList/></div>
                 )} 
            </div>   
        </div>  
    )
}

export default Main;