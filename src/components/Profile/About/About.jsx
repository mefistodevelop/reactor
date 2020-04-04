import React from 'react';
import './About.scss';

function About(props) {
  return (
    <div className="about">
      <h3 className="about__name">{ props.profile.fullName }</h3>
      <p className="about__status">{ props.profile.aboutMe }</p>
      <div className="about__work">Job: { props.profile.lookingForAJobDescription }</div>
      <div className="about__location">location</div>
    </div>
  );
}

export default About;
