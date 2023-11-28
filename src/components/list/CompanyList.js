import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanyList.css';

const CompanyList = () => {
  const [mostTrash, setMostTrash] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    callNumber: '',
    memo: '',
  });

  // Define getData function outside useEffect
  const getData = async () => {
    try {
      const response = await axios.get('/api/cleaning/cleaning-list');
      console.log(response.data);
      setMostTrash(response.data);
    } catch (error) {
      // 응답 실패
      console.error(error);
    }
  };

  useEffect(() => {
    getData(); // Call getData on component mount
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({
      ...newCompany,
      [name]: value,
    });
  };

  const handleAddCompany = async () => {
    try {
      // Use Axios to send the newCompany data to the server
      const response = await axios.put('/api/cleaning/registration', newCompany);
      console.log('Server response:', response.data);

      // Reset the input fields after adding the company
      setNewCompany({
        name: '',
        callNumber: '',
        memo: '',
      });

      // Fetch updated data after adding the new company
      getData();
    } catch (error) {
      // Handle error
      console.error('Error adding new company:', error);
    }
  };

  return (
    <div>
      <div className="statistics-box">
        <table className='statistics-table'>
          <thead>
            <tr>
              <th className="statistics-th">업체명</th>
              <th className="statistics-th">연락처</th>
              <th className="statistics-th">특이사항</th>
            </tr>
          </thead>
          <tbody>
            {mostTrash.map((item, index) => (
              <tr key={index}>
                <td className="statistics-td">{item.name}</td>
                <td className="statistics-td">{item.callNumber}</td>
                <td className="statistics-td">{item.memo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="statistics-title">신규 업체 등록</div>
        <div className="registration-form">
          <div>
            <label className="register-name">업체명  </label>
            <input
              className="register-input"
              type="text"
              name="name"
              value={newCompany.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="register-name">연락처  </label>
            <input
             className="register-input"
              type="text"
              name="callNumber"
              value={newCompany.callNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="register-name">특이사항  </label>
            <input
             className="register-input2"
              type="text"
              name="memo"
              value={newCompany.memo}
              onChange={handleInputChange}
            />
          </div>
          <button className="register-button" onClick={handleAddCompany}>등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;