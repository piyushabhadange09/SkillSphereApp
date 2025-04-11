import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const COLORS = {
    heading: "#FFFAE5",
    text: "#EAEAEA",
    background: "#2D2D2D",
    blurBg: "rgba(0, 0, 0, 0.5)",
  };

  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      backgroundColor: COLORS.background,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      padding: "80px 40px",
    },
    background: {
      backgroundImage: "url('/assets/images/about.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.4,
      zIndex: 0,
      animation: "fadeScale 2s ease-in-out forwards",
    },
    contentWrapper: {
      zIndex: 1,
      backgroundColor: COLORS.blurBg,
      borderRadius: "20px",
      padding: "40px",
      maxWidth: "900px",
      backdropFilter: "blur(6px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
    },
    title: {
      fontFamily: "Oswald, sans-serif",
      color: COLORS.heading,
      fontSize: "3.5rem",
      fontWeight: "bold",
      marginBottom: "30px",
      textAlign: "center",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    },
    paragraph: {
      fontFamily: "Montserrat, sans-serif",
      color: COLORS.text,
      fontSize: "1.1rem",
      lineHeight: "1.8",
      marginBottom: "20px",
      textAlign: "justify",
      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div style={styles.container}>
      <div className="animated-bg" style={styles.background}></div>
      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>About Us</h2>
        <p style={styles.paragraph}>
          <i>
            As students, we have looked for upskilling everywhere. Mostly, we end up paying big amounts to gain
            certifications and learn relevant skills. We thought of SkillSwap to resolve that. Learning new skills and
            gaining more knowledge all while networking with talented people!
          </i>
        </p>
        <p style={styles.paragraph}>
          At SkillSwap, we believe in the power of learning and sharing knowledge. Our platform connects individuals
          from diverse backgrounds to exchange practical skills and expertise. Whether you're a seasoned professional
          looking to mentor others or a beginner eager to learn, SkillSwap provides a supportive environment for growth
          and collaboration.
        </p>
        <p style={styles.paragraph}>
          Our mission is to empower individuals to unlock their full potential through skill sharing. By facilitating
          meaningful interactions and fostering a culture of lifelong learning, we aim to create a community where
          everyone has the opportunity to thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;


