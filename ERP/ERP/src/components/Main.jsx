import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './main.css';
import './point.css';

const Main = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Points Scored',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(55,55,55,0.2)',
                borderColor: 'rgba(55,55,55,1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Points',
                },
            },
        },
    };

    return (
        <main id='main' className='main'>
            <div className="welcome-container">
                <div className="row welcome-content gap-5">
                    <div className="col-md-12 left-content">
                        <div className="text-content">
                            <h3>Welcome <span>John Doe</span>. <br />Step into Streamlined Operations and Enhanced Productivity</h3>
                            <p>Empowering Your Workflow with Advanced Tools and Actionable Insights for Optimal Productivity.</p>
                        </div>
                        <div>
                            <img src="./src/assets/img15.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart-container chart">
                <h5>Point Score</h5>
                <PointScoredChart />
            </div>
        </main>
    );
};

const PointScoredChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Points Scored',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(55,55,55,0.2)',
                borderColor: 'rgba(55,55,55,1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Points',
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default Main;
