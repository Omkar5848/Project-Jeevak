import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import './Login.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const mockOTP = "123456"; 

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`OTP sent to ${email}`);
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === mockOTP) {
      setStep(3);
    } else {
      alert("Invalid OTP");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password successfully changed!");
    setStep(1);
    setEmail('');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="wrapper">
      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit}>
          <h1>Verify OTP</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <FaKey className="icon" />
          </div>
          <button type="submit">Verify</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordReset}>
          <h1>Reset Password</h1>
          <div className="input-box">
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Change Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
