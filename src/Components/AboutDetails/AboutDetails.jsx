import React from "react";
import "./AboutDetails.css";
import img from '../Images/about-us.png'
export default function LearningIntro() {
  return (
    <div className="learning-container">
      {/* Left Section - Text */}
      <div className="left-section">
        <p className="highlight">How It Started</p>
        <h1 className="heading">
          Our Dream is <br /> Global Learning <br /> Transformation
        </h1>
        <p className="description">
          Kawruh was founded by Robert Anderson, a passionate lifelong learner, and
          Maria Sanchez, a visionary educator. Their shared dream was to create a
          digital haven of knowledge accessible to all. United by their belief in
          the transformational power of education, they embarked on a journey to
          build 'Kawruh.' With relentless dedication, they gathered a team of
          experts and launched this innovative platform, creating a global community
          of eager learners, all connected by the desire to explore, learn, and grow.
        </p>
      </div>

      {/* Right Section - Image and Stats */}
      <div className="right-section">
        <div className="image-wrapper">
          <img
            src={img}
            alt="Team working together"
            className="main-image"
          />
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {[
            { number: "3.5", label: "Years Experience" },
            { number: "23", label: "Project Challenge" },
            { number: "830+", label: "Positive Reviews" },
            { number: "100K", label: "Trusted Customers" }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
