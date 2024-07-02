import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './loginpage.css';

function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordChange, setIsPasswordChange] = useState(false);


    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const togglePasswordChange = () => {
        setIsPasswordChange(!isPasswordChange);
    };



    return (
        <div className='loginpage'>
            <div className="overlay">



                <div className="top-logo">
                    <div className="container">

                        <h3>ERP</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row login-form">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-5 form-container">

                            {isSignUp ? (
                                <>
                                    <h3>Create an Account</h3>

                                    <form action="">
                                        <input type="text" required placeholder='Company Name' />
                                        <input type="email" placeholder='Email' required />
                                        <input type="text" required placeholder='Address' />
                                        <div className='select mb-2'>

                                            <select name="" id="">
                                                <option value="Country">Country</option>
                                                <option value="Country">Country</option>  <option value="Country">Country</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="Country">State</option>
                                                <option value="Country">State1</option>  <option value="Country">State2</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="Country">District</option>
                                                <option value="Country">District1</option>  <option value="Country">District2</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="Country">Taluka</option>
                                                <option value="Country">Taluka1</option>  <option value="Country">Taluka2</option>
                                            </select>
                                        </div>
                                        <input type="num" placeholder='Gst Number' />
                                        <input type="password" required placeholder='Password' />
                                        <button type='submit'>Sign Up</button>
                                    </form>
                                    <div className="form-bottom">
                                        <p>Already have an account? <span onClick={toggleSignUp}>Sign In</span></p>
                                    </div>
                                </>
                            ) : isPasswordChange ? (
                                <>
                                    <h3>Change Password</h3>


                                    <form action="">
                                        <input type="password" required placeholder='Current Password' />
                                        <input type="password" required placeholder='New Password' />
                                        <input type="password" required placeholder='Confirm New Password' />
                                        <button type='submit'>Change Password</button>
                                    </form>
                                    <div className="form-bottom">
                                        <p>Remember your password? <span onClick={togglePasswordChange}>Sign In</span></p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <>
                                        <h3>Hello There</h3>

                                    </>

                                    <form action="">
                                        <input type="text" required placeholder='Name' />
                                        <input type="password" required placeholder='Password' />
                                        <Link to="" onClick={togglePasswordChange}><h6>Forgot Password?</h6></Link>
                                        <button type='button'>Sign In</button>
                                        <div className="form-bottom">
                                            <p>Don't have an account? <span onClick={toggleSignUp}>Sign Up</span></p>
                                        </div>
                                    </form>
                                </>
                            )}

                        </div>

                    </div>

                </div>
                <div className="extra-info">
                    <ul>
                        <li><a href="">Proivacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default LoginPage;
