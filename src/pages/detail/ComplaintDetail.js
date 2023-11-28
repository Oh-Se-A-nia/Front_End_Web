import './ComplaintDetail.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../../components/header/TopBar';
import SingleMap from '../../components/kakao/Kakao.SingleMarker';
import axios from 'axios';  
const { kakao } = window;

function ComplaintDetail() {
  const { id } = useParams();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/api/complaints/detail?complaintId=${id}`);
        console.log(response.data);
        setComplaints(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);
  
  const [isDropdownView, setDropdownView] = useState(false)
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView)
  }

  return (
    <div>
      <div className="bar">
                <div><TopBar/></div>   
            </div> 
      <div className="complaint_detail_box">
        <table className="complaint_detail_table_top">
          <tbody>
            <tr>
              <td>{complaints.date}</td>
              <td>{complaints.time}</td>
              <td>{complaints.regionName}</td>
              <td>{complaints.ecotagType}</td>
            </tr>
          </tbody>
        </table>

        <div className="complaint-detail-center-box">
        <img
  className="garbage_image"
  src={process.env.PUBLIC_URL + '/img/complaint_image.jpg'}
  alt="garbage_image"
  style={{ width: '300px', height: 'auto' }}  // Adjust the width and height as needed
/>
          <div className="single-map">
            <SingleMap lat={37.54950756979954} lng={127.0751609448731} />
          </div>
        </div>

        <table className="complaint_detail_table_under">
          <tbody>
            <tr>
              <td>처리 과정</td>
              <td>처리 완료 <button className="modify-button">미처리</button><button className="modify-button">처리중</button><button className="modify-button">처리완료</button></td>  
            </tr>
            <tr>
              <td>민원 내용</td>
              <td>담배꽁초</td>
            </tr>
            <tr>
              <td>상세 위치</td>
              <td>대한민국 서울특별시 광진구 군자동 339-1</td>
            </tr>
            <tr>
              <td>신고 누적 횟수</td>
              <td>1회</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintDetail;