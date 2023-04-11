import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About PerfectPC</h1>
      <p className="about-text">
        PerfectPC is your go-to platform for designing and building custom PCs with ease. Our mission is to
        simplify the process of choosing PC components, allowing users to create their dream computers in a
        user-friendly and visually appealing interface.
      </p>
      <p className="about-text">
        Whether you're a gaming enthusiast, a professional content creator, or an everyday computer user,
        PerfectPC is tailored to meet your needs. Our extensive component database, compatibility checks, and
        real-time price updates make PC building an enjoyable and efficient experience.
      </p>
      <p className="about-text">
        Our dedicated team of experts constantly updates the platform, ensuring that you have access to the
        latest components and the most accurate information. Join the PerfectPC community today and take the
        first step towards creating your ideal computer.
      </p>
    </div>
  );
};

export default About;