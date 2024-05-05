import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css'

const ProfileCard = ({profileImageUrl, bio, name, skills, rating }) => {
  return (
    <div className="card-container">
    <img src={profileImageUrl} alt="user"/>
    <h3>{name}</h3>
    <h6>{rating}</h6>
    <p>{bio}</p>
    <div className="prof-buttons">
        <button className="primary">
            Connect
        </button>
        <button className="primary ghost">
            View Profile
        </button>
    </div>
    <div className="profskills">
        <h6>Skills</h6>
        <div className="profskill-boxes">
            {skills.map((skill, index) => (
                <div key={index} className="profskill-box">
                <span className="skill">{skill}</span>
                </div>
            ))}
        </div>
    </div>
</div>
  );
};

export default ProfileCard;
