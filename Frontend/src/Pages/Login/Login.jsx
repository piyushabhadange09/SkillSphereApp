import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsActive(true), 100);
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  const containerStyle = {
    position: "relative",
    height: "100vh",
    width: "100%",
    backgroundColor: "#1a1a1a", // Prevent white flash
    backgroundImage: "url('/assets/images/login.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.65)",
    zIndex: 1,
  };

  const loginBoxStyle = {
    position: "relative",
    zIndex: 2,
    padding: "40px 60px",
    background: "rgba(255, 255, 255, 0.07)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    transform: isActive ? "translateY(0)" : "translateY(50px)",
    opacity: isActive ? 1 : 0,
    transition: "all 1s ease-in-out",
  };

  const titleStyle = {
    fontFamily: "Oswald, sans-serif",
    fontSize: "48px",
    color: "#ffe46b",
    marginBottom: "30px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#fff" : "#f56664",
    color: isHovered ? "#f56664" : "#fff",
    fontFamily: "Montserrat, sans-serif",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle} />
      <div style={loginBoxStyle}>
        <h1 style={titleStyle}>LOGIN</h1>
        <Button
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleGoogleLogin}
        >
          <FaGoogle /> Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
