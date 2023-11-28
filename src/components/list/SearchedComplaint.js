import './SearchedComplaint.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import ComplaintDetail from '../../pages/detail/ComplaintDetail';

const SearchedComplaint  = ({
    selectedLocation,
    selectedType,
    selectedProcess,
  }) => {  
  
  const navigate = useNavigate();  

  const handleLinkClick = (link) => {
    navigate(link);
  };  

  const [complaints, setComplaints] = useState([]);  
  const complaintNumber=0;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('api/complaints/list', {
          params: {
            ecotagType: selectedType,  
            processType: selectedProcess,    
            regionName: selectedLocation, 
          },
        });
        console.log(response.data);
        setComplaints(response.data);
      } catch (error) {
        console.error(error); 
      }  
    }
    getData();
  }, []);

  return (
    <div> 
        <div>
          <Routes>
            {complaints.map((item) => (
              <Route key={item.id} path={`/${item.id}`} element={<ComplaintDetail item={item} />} />
            ))}
          </Routes>

          <div className="complaint-box"> 
            <table className='complaint-table'> 
              <tbody>
                {complaints.map((item, complaintNumber) => (
                  <tr key={item.id}> 
                    <td>{complaintNumber+1}</td>  
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.regionName}</td>
                    <td>{item.ecotagType}</td>
                    <td>{item.processType}</td>
                    <td>
                      <button className='move' onClick={() => handleLinkClick(`/${item.id}`)}>
                        상세 정보 확인
                      </button>
                    </td> 
                  </tr>
                ))}
              </tbody> 
            </table>   
             
          </div>
        </div> 
    </div>
  );
};

export default SearchedComplaint;