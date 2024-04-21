import React from 'react';
import profileIcon from './Assets/user.png';
import locationIcon from './Assets/location.png';
import aboutUsIcon from './Assets/info.png';
import privacyPolicyIcon from './Assets/privacy.png';

const Registerworker = () => {
    return (
        <div className='container'>
            <style>
                {`
                .container {
                    height: 100vh;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0;
                }
                
                .header-box {
                    height: 15%;
                    width:100%;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    background: #FFBB70;
                    color: #153448;
                    border-radius: 20px;
                }
                
                .header {
                    font-size: 60px;
                    padding: 20px;
                    font-weight: bold;
                }
                
                .profile-box {
                    height: 10%;
                    display: flex;
                    align-items: center;
                    padding-left: 20px;
                    padding-top:200px;
                }
                
                .profile-section {
                    display: flex;
                    align-items: center;
                }
                
                .profile-info {
                    display: flex;
                    align-items: center;
                }
                
                .profile-image img {
                    width: 170px;
                    height: 170px;
                    border-radius: 50%;
                    margin-right: 10px;
                    padding: 0px 40px;
                    border-radius: 50%;
                }
                
                .user-details {
                    display: flex;
                    flex-direction: column;
                }
                
                .user-name {
                    font-size: 35px;
                }
                
                .user-email {
                    font-size: 25px;
                }
                
                .menu-box {
                    height: 20%;
                    width: 100%;
                    padding-top:250px;
                    padding-bottom: 300px;
                }
                
                .menu-section {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                
                .menu-item {
                    width: 100%;
                    height:10%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #FFBB70;
                    color: white;
                    border-radius: 20px;
                    margin-bottom:20px;
                    padding: 0 20px;
                    padding: 40px;
                }
                
                .menu-item img {
                    width: 80px;
                    height: 80px;
                    margin-right: 10px;
                }
                
                .login-button-box {
                    height: 10%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 50px;
                }
                
                .menu-item span{
                    font-size: 70px;
                }
                .login-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 40%;
                    background-color: #FFBB70;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 55px;
                    border-radius:  20px;
                }
                `}
            </style>
            <div className="header-box">
                <div className="header">Account</div>
            </div>
            <div className="profile-box">
                <div className="profile-section">
                        <div className="profile-image">
                            <img src={profileIcon} alt="Profile" />
                        </div>
                        <div className="user-details">
                            <div className="user-name">Hey Guest</div>
                            <div className="user-email">abc@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="menu-box">
                <div className="menu-section">
                    <div className="menu-item">
                        <img src={locationIcon} alt="Location" />
                        <span>Address</span>
                    </div>
                    <div className="menu-item">
                        <img src={aboutUsIcon} alt="About Us" />
                        <span>About Us</span>
                    </div>
                    <div className="menu-item">
                        <img src={privacyPolicyIcon} alt="Privacy Policy" />
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
            <div className="login-button-box">
                <div className="login-button">
                    <span>Login</span>
                </div>
            </div>
        </div>
    );
}

export default Registerworker;
