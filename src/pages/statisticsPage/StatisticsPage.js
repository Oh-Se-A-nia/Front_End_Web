 import './StatisticsPage.css'; 
import TopBar from '../../components/header/TopBar'; 
import StatisticsList from '../../components/list/StatisticsList';
const StatiscsPage =() => {

    return ( 
        <div className="mapPage">
        <div className="bar">
                <div><TopBar/></div>   
        </div>  
        <div className="statisticsBox">
            <div><StatisticsList/></div>
        </div>
        </div>
    )
}


export default StatiscsPage;