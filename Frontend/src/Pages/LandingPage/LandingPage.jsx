import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const COLORS = {
    primary: "#3BB4A1",
    background: "#2D2D2D",
    white: "#FFFFFF",
    dark: "#1A3C40",
  };

  const styles = {
    container: {
      backgroundColor: COLORS.background,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "100px",
    },
    hero: {
      position: "relative",
      marginTop: "200px",
      marginBottom: "100px",
      textAlign: "center",
    },
    heroTitleContainer: {
      border: `8px solid ${COLORS.primary}`,
      padding: "30px 50px",
      backgroundColor: COLORS.dark,
      zIndex: 1,
      position: "relative",
    },
    heroTitle: {
      fontSize: "5rem",
      fontFamily: "Josefin Sans, sans-serif",
      color: COLORS.primary,
      fontWeight: "bold",
      letterSpacing: "3px",
      textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
    },
    heroImageTop: {
      position: "absolute",
      left: `${scrollPosition}px`,
      top: "-150px",
      width: "350px",
      zIndex: 0,
      transition: "left 0.3s ease",
    },
    heroImageBottom: {
      position: "absolute",
      right: `${scrollPosition}px`,
      bottom: "-150px",
      width: "350px",
      zIndex: 0,
      transition: "right 0.3s ease",
    },
    sectionTitle: {
      color: COLORS.background,
      backgroundColor: COLORS.primary,
      fontFamily: "Oswald",
      fontSize: "3rem",
      fontWeight: "700",
      padding: "20px 40px",
      borderRadius: "12px",
      marginTop: "100px",
      textAlign: "center",
      textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
      marginTop: "60px",
      padding: "0 40px",
      width: "100%",
      justifyItems: "center",
    },
    secondRowGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "30px",
      marginTop: "30px",
      padding: "0 150px",
      width: "100%",
      justifyItems: "center",
    },
    featureBox: {
      borderRadius: "16px",
      padding: "25px 30px",
      width: "280px",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
      textAlign: "left",
      transition: "all 0.3s ease-in-out",
      cursor: "default",
      transform: "scale(1)",
    },
    featureBoxHover: {
      transform: "scale(1.05)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.5)",
    },
    featureTitle: {
      fontSize: "1.4rem",
      fontWeight: "700",
      marginBottom: "10px",
      textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    },
    featureText: {
      fontSize: "1rem",
      lineHeight: "1.6",
      textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
    },
  };

  const FeatureCard = ({ title, text, bgColor, textColor }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        style={{
          ...styles.featureBox,
          ...(hovered ? styles.featureBoxHover : {}),
          backgroundColor: bgColor,
          color: textColor,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p style={{ ...styles.featureTitle, color: textColor }}>{title}</p>
        <p style={{ ...styles.featureText, color: textColor }}>{text}</p>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* <div style={styles.hero}>
        <img src="/assets/images/1.png" alt="Top Image" style={styles.heroImageTop} />
        <div style={styles.heroTitleContainer}>
          <h1 style={styles.heroTitle}>SKILL SPHERE</h1>
        </div>
        <img src="/assets/images/2.png" alt="Bottom Image" style={styles.heroImageBottom} />
      </div> */}
      <div style={styles.hero}>
  <div style={styles.heroBackground}></div>

  <div style={styles.heroTitleContainer}>
    <div style={styles.heroTitleRow}>
      <img
        src="/assets/images/image.png"
        alt="Logo"
        style={styles.heroLogo}
      />
      <h1 style={styles.heroGradientText}>SKILL SPHERE</h1>
    </div>
  </div>

  <img src="/assets/images/1.png" alt="Top Image" style={styles.heroImageTop} />
  <img src="/assets/images/2.png" alt="Bottom Image" style={styles.heroImageBottom} />
</div>

      <h2 style={styles.sectionTitle}>WHY SKILL SPHERE?</h2>

      <div style={styles.featuresGrid}>
        <FeatureCard
          title="➊ Learn From Experts"
          text="Gain insights and practical knowledge from experienced mentors across diverse fields—be it programming, cooking, or digital marketing."
          bgColor="#3BB4A1"
          textColor="#FFFFFF"
        />
        <FeatureCard
          title="➋ Share Your Expertise"
          text="Passionate about something? Become a mentor and empower others. It’s a platform for growth and giving back."
          bgColor="#FF6B6B"
          textColor="#FFFFFF"
        />
        <FeatureCard
          title="➌ Collaborative Environment"
          text="Join hands with like-minded learners in group projects, discussions, and more. Skill Sphere promotes a community-first mindset."
          bgColor="#FFD93D"
          textColor="#333333"
        />
      </div>

      <div style={styles.secondRowGrid}>
        <FeatureCard
          title="➍ Diverse Learning Opportunities"
          text="Learn skills for free—from traditional crafts to the latest tech trends. There's something for everyone, regardless of background."
          bgColor="#6C5CE7"
          textColor="#FFFFFF"
        />
        <FeatureCard
          title="➎ Continuous Growth"
          text="Stay curious and keep evolving. Whether you’re just starting out or a pro, Skill Sphere helps you grow at every step."
          bgColor="#00B894"
          textColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default LandingPage;
