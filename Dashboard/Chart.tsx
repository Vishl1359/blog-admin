"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 

// Registering the components required for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BalanceChart = () => {
  const data = {
    labels: ['Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'User count',
        data: [300, 400, 500, 300, 400, 500, 600, 500, 600, 700],
        backgroundColor: '	rgb(64, 0, 255)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Post count',
        data: [200, 300, 400, 200, 300, 400, 500, 400, 500, 600],
        backgroundColor: 'rgb(0, 191, 255)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Usercount vs postcount',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-white rounded-md mb-4 shadow-2xl"> {/* Adjust height for responsiveness */}
      <Bar data={data} options={options} className='text-black' />
    </div>
  );
};

export default BalanceChart;
