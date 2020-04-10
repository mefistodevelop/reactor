import React from 'react';
import './About.scss';
import Status from './Status/Status';

function About(props) {
  return (
    <div className="about">
      <h3 className="about__name">{ props.profile.fullName }</h3>
      <div className="about__status">
        <Status text={ props.profile.aboutMe }/>
      </div>
      <div className="about__work">Job: { props.profile.lookingForAJobDescription }</div>
      <div className="about__location">location</div>
    </div>
  );
}

export default About;
