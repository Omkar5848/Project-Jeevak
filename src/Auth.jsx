import React, { useState } from 'react';
import { FaHospitalUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import './Login.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isLogin ? 'Login Submitted!' : 'Registration Submitted!');
        if (isLogin) {
            alert('Login Successful!');
            navigate("/success");
        } else {
            alert('Registration Submitted!');
            setIsLogin(true);
        }
        
    };

    return (
        <div className="wrapper">
            <form 
                onSubmit={handleSubmit} 
                className={`auth-form ${isLogin ? 'login-mode' : 'register-mode'}`}
            >
                <h1>{isLogin ? 'Jeevak' : 'Register'}</h1>

                {!isLogin && (
                    <div className="input-box">
                        <input type="text" placeholder="Full Name" required />
                        <FaHospitalUser className="icon" />
                    </div>
                )}

                <div className="input-box">
                    <input type="email" placeholder="Email ID" required />
                    <FaEnvelope className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                {!isLogin && (
                    <>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm Password" required />
                            <FaLock className="icon" />
                        </div>

                        <div className="input-box">
                            <select required>
                                <option value="">Select Profession</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Technician">Technician</option>
                                <option value="Technician">Headnurse</option>
                            </select>
                            
                        </div>
                    </>
                )}

                {isLogin && (
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgot">Forgot Password?</Link>
                    </div>
                )}

                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

                <div className="register-link">
                    {isLogin ? (
                        <p>
                            Don't have an account?{" "}
                            <span 
                                className="toggle-link" 
                                onClick={() => setIsLogin(false)}
                            >
                                Register
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <span 
                                className="toggle-link" 
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Auth;
