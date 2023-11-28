 
import CompanyList from '../../components/list/CompanyList';
import './CleaningPage.css'; 
import TopBar from '../../components/header/TopBar'; 

const CleaningPage =() => { 
    
    return (
        <div>
            
        <div className="bar">
            <div><TopBar/></div>    
        </div> 
        <div className="company-list-box"> 
           <div><CompanyList/></div>
        </div> 

        </div>
        
    )
}


export default CleaningPage;