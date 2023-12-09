import React from 'react'
import './About.css';
import ProfilePic from '../../assets/prof-pic1.jpg';

export default function About() {
  return (
    <div>
      <main>
        <img src={ProfilePic} alt="Profile" className='profile-pic' />
        <hr />
        <h2>About Me: </h2>      
        <p>
          I'm a full-stack engineer who is passionate about problem solving. I am transitioning from 7 years of manufacturing engineering where I specialized in custom fabrication. I love knowing how things come together and come apart, whether it's a refrigerated counter or a dynamic user responsive web app. I thrive in a team work-environment because I'm firm believer in communication.
        </p>
        <hr />
      </main>
    </div>
  )
}
