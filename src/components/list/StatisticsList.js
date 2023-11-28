import './StatisticsList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const StatisticsList = () => {
  const [mostTrash, setMostTrash] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    series: [{
      name: "Desktops",
      data: [14,23,17,21,15,18,13]
    }],
    chart: {
      height: 350,
      type: 'line', 
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },  
    xaxis: {
      categories: []
    }
  });

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/api/ecotag/most-trash');
        console.log(response.data);
        setMostTrash(response.data);
 /*
        // 차트 데이터 설정
        const categories = response.data.map(item => item.region_name);
        const seriesData = response.data.map(item => item.ecotag_type);

        setChartOptions({
          ...chartOptions,
          series: [{ data: seriesData }],
          xaxis: { categories: categories }
        });
        */
      } catch (error) {
        // 응답 실패
        console.error(error);
      }
    }
    getData();
  }, []);

  // Set of unique region names
  const uniqueRegionNames = new Set();

  return (
    <div>
      <div className="statistics-box">
        <div className="statistics-title">동별 불법 투기 쓰레기 주요 유형 통계 </div>
        <table className='statistics-table'>
          <tbody>
            {mostTrash.map((item, index) => {
              if (!uniqueRegionNames.has(item.region_name)) {
                uniqueRegionNames.add(item.region_name);
                return (
                  <tr key={index}>
                    <th className="statistics-th">{item.region_name}</th>
                    <td className="statistics-td">{item.ecotag_type}</td>
                  </tr>
                );
              }
              // 만약 region_name이 이미 있으면 다음 행으로
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className="statistics-title">주간 민원량 통계 </div>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={350} />
    </div>
  );
};

export default StatisticsList;