import React from 'react';
import './About.scss';
import Status from './Status/Status';

function About(props) {
  return (
    <div className="about">
      <h3 className="about__name">{ props.profile.fullName }</h3>
      <div className="about__status">
        <Status text={ props.userStatus }/>
      </div>
      <div className="about__about-me">
        <span className="about__info-title">About me: </span>
        { props.profile.aboutMe }
      </div>
      <div className="about__work">
        <span className="about__info-title">Job: </span>
        { props.profile.lookingForAJobDescription }
      </div>
      <div className="about__location">location</div>
    </div>
  );
}

export default About;
