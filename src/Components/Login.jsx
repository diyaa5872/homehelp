import React from 'react';
import user_icon from './Assets/user.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/lock.png';

const Login = () => {
    return (
        <div className='container'>
            <style>
                {`
                body {
                    background: #6AD4DD;
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    width: 80%; 
                    max-width: 600px; 
                    margin-top: 10%; 
                    border-radius: 30px;
                    background: #DDDDDD;
                    padding-bottom: 30px;
                }
                .header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 9px;
                    width: 100%;
                    margin-top: 5%; 
                }
                .text {
                    color: #6AD4DD;
                    font-size: 4vw; 
                    font-weight: 700;
                }
                .underline {
                    width: 25%; 
                    height: 4px; 
                    background: #6AD4DD;
                    border-radius: 9px;
                }
                .inputs {
                    margin-top: 5%; 
                    display: flex;
                    flex-direction: column;
                    gap: 5%; 
                }
                .input {
                    display: flex;
                    align-items: center;
                    margin: auto;
                    width: 80%; 
                    max-width: 400px; 
                    height: 15vw; 
                    background: #eaeaea;
                    border-radius: 20px;
                }
                .input img {
                    margin: 0px 5%; 
                    height: 6vw; 
                    max-height: 40px; 
                    width: auto; 
                }
                .input input {
                    height: 10vw; 
                    width: 70%; 
                    background: transparent;
                    border: none;
                    outline: none;
                    color: #797979;
                    font-size: 4vw; 
                }
                .forgot-password {
                    margin-top: 2%; 
                    color: #797979;
                    font-size: 3vw; 
                    margin-left:5%;
                }
                .forgot-password span {
                    color: #6AD4DD;
                    cursor: pointer;
                }
                .sign-up{
                    margin-top: 2%; 
                    color: #797979;
                    font-size: 3vw; 
                    margin-left:5%;
                }
                .sign-up span {
                    color: #6AD4DD;
                    cursor: pointer;
                }
                .submit-container {
                    display: flex;
                    justify-content: center;
                    gap: 5%; 
                    margin: 5% auto; 
                }
                .submit {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40%; 
                    max-width: 220px; 
                    height: 12vw; 
                    background: #6AD4DD;
                    border-radius: 10px; /* Adjusted border-radius */
                    font-size: 5vw; 
                    font-weight: 400;
                    cursor: pointer;
                    margin:20%;
                    padding:10% 55%;
                }

                @media screen and (max-width: 600px) {
                    .container {
                        width: 90%;
                    }
                    .text {
                        font-size: 6vw;
                    }
                    .underline {
                        width: 40%;
                    }
                    .input {
                        height: 20vw;
                    }
                    .input img {
                        height: 8vw;
                    }
                    .input input {
                        height: 12vw;
                        font-size: 6vw;
                    }
                    .forgot-password {
                        font-size: 5vw;
                    }
                    .submit {
                        width: 80%;
                        height: 15vw;
                        font-size: 5vw;
                    }
                }
                `}
            </style>
            <div className='header'>
                <div className='text'>Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt='img'/>
                    <input type='text' placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt='img'/>
                    <input type='email' placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt='img'/>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="sign-up">Don't have an account? <span>Sign UP</span></div>
            <div className="submit-container">
                {/* <div className="submit">Sign UP</div> */}
                <div className="submit">Login</div>
            </div>
        </div>
    );
}

export default Login;
