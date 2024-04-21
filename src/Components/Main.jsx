import React from 'react';
import plumberIcon from './Assets/plumber.png';
import carpenterIcon from './Assets/carpenter.png';
import homeMakerIcon from './Assets/cleaning.png';
import electricianIcon from './Assets/engineering.png';
import contractorIcon from './Assets/worker.png';
import wallRepairsIcon from './Assets/spatula.png';
import painterIcon from './Assets/painter.png';
import searchIcon from './Assets/loupe.png';

const Main = () => {
    return (
        <div className='container'>
            <style>
                {`
                .container {
                    font-family: Arial, sans-serif;
                    background: #F7418F;
                    position: relative; /* Added position relative */
                }
                
                .upper-block {
                    background-image: url('https://i.pinimg.com/236x/49/de/f2/49def2efec314a803d24a257d8134398.jpg');
                    background-size: cover;
                    background-position: center;
                    color: white;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 50px 20px;
                }
                
                .upper-block-content {
                    margin-bottom: 20px;
                    margin-up: 20px
                }
                
                .header-title {
                    font-size: 25px;
                    font-weight: bold;
                    color: #E3E1D9;
                    font-family: 'Arial Black', sans-serif;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                .header-subtitle{
                    font-size: 37px;
                    font-weight: BOLD;
                    color: #E3E1D9;
                    font-family: 'Arial Black', sans-serif;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                
                .search-container {
                    width: 70%;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.7);
                    border-radius: 30px;
                    padding: 10px;
                }
                
                .search-container input[type="text"] {
                    flex: 1;
                    border: none;
                    padding: 10px;
                    height: 30px;
                    font-size: 28px;
                    outline: none;
                    background-color: transparent;
                }
                
                .search-container button {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 5px; /* Adjusted padding */
                }
                
                .services-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 20px;
                    overflow-y: auto;
                    background: #E5E483;
                }
                
                .service {
                    width: calc(33.33% - 20px); /* Adjusted width for three items per row */
                    margin: 10px;
                    font-size: 28px;
                    padding: 20px;
                    border: 2px solid #B2B377;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor:pointer;
                }
                
                .service img {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 10px;
                }
                
                /* New styles for circular block */
                .circle-block {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    background-color: white;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }
                `}
            </style>
            <div className="upper-block">
                <div className="upper-block-content">
                    <div className="header-title">How can we help you</div>
                    <div className="header-subtitle">today?</div>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search..." />
                    <button><img src={searchIcon} alt="Search" /></button>
                </div>
            </div>
            <div className="services-container">
                <ServiceCard icon={plumberIcon} title="Plumber" />
                <ServiceCard icon={carpenterIcon} title="Carpenter" />
                <ServiceCard icon={homeMakerIcon} title="Home Maker" />
                <ServiceCard icon={electricianIcon} title="Electrician" />
                <ServiceCard icon={contractorIcon} title="Contractor" />
                <ServiceCard icon={wallRepairsIcon} title="Wall Repairs" />
                <ServiceCard icon={painterIcon} title="Painter" />
            </div>
            {/* Circular block */}
            <div className="circle-block" onClick={() => handleClick()}>
                {/* You can put any content here, like an arrow icon */}
                {/* For example: <img src="arrow.png" alt="Go to other page" /> */}
                <span>&#8594;</span>
            </div>
        </div>
    );
}

const ServiceCard = ({ icon, title }) => {
    return (
        <div className="service">
            <img src={icon} alt={title} />
            {title}
        </div>
    );
}

// Function to handle click on the circular block
const handleClick = () => {
    // Navigate to the other page here
}

export default Main;
