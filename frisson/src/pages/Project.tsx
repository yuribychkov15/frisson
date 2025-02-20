import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

import FrissonBlueIcon from '../assets/FRISSON - F ICON - BLUE.png';
import InstaBlueIcon from '../assets/FRISSON - INSTA ICON - BLUE.png';
import TikTokBlueIcon from '../assets/FRISSON-TIKTOK ICON - BLUE.png';
import SpotifyBlueIcon from '../assets/FRISSON - SPOTIFY - BLUE.png';

import Logo from '../assets/FRISSON - CONTACT PAGE - LOGO - BLACK.svg?react'; // Your dotted frisson logo

import Project1Image from '../assets/Mask Group 6.jpg';
import Project2Video from '../assets/WEBSITE - PROJECT CARD - SOPHIA MESSA - PUTP.mp4';
import Project3Imaage from '../assets/gray-simple-textured-design-background_53876-108318.png';
import Project4Video from '../assets/WEBSITE - PROJECT CARD - LIZ STUART - HSE.mp4';


const Project: React.FC = () => {
  const socialIconsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (socialIconsRef.current) {
      gsap.fromTo(
        socialIconsRef.current.querySelectorAll('a'),
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.2, delay: 0.5 }
      );
    }
  }, []);

  return (
    <div className="project-page">
      {/* Background Logo */}
      <div className="project-logo">
        <Logo />
      </div>

      {/* Corner social icons */}
      <div className="corner-icons" ref={socialIconsRef}>
        <a href="/" target="_self" rel="noopener noreferrer" className="top-left">
          <img src={FrissonBlueIcon} alt="Frisson Icon" className="corner-icons"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-right">
          <img src={InstaBlueIcon} alt="Instagram Icon" className="corner-icons"/>
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="bottom-left">
          <img src={SpotifyBlueIcon} alt="Spotify Icon" className="corner-icons"/>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bottom-right">
          <img src={TikTokBlueIcon} alt="TikTok Icon" className="corner-icons"/>
        </a>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="project-grid">

          {/* First Project Item */}
          <div className="project-item">
            <div className="project-image-container">
              <img src={Project1Image} alt="KEFI SERIES #1" className="project1-image" />
            </div>
            <div className="project1-info">
              <Link to="/chloe1" className="project-title">Chloe Southern</Link>
              <div className="project-subtitle">KEFI SERIES #1</div>
            </div>
          </div>

          {/* Second Project Item */}
          <div className="project-item">
            <div className="project-image-container">
              <video controls className="project2-video">
                <source src={Project2Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project2-info">
              <Link to="/sophia-messa" className="project-title">Sophia Messa</Link>
              <div className="project-subtitle">PICK UP THE PHONE</div>
            </div>
          </div>

          {/* Third Project Item */}
          <div className="project-item">
            <div className="project-image-container">
              <img src={Project3Imaage} alt="Guerilla Marketing" className="project3-image" />
            </div>
            <div className="project3-info">
              <div className="project-title">Chloe Southern</div>
              <div className="project-subtitle">GUERILLA MARKETING</div>
            </div>
          </div>

          {/* Fourth Project Item */}
          <div className="project-item">
            <div className="project-image-container">
              <video controls className="project4-video">
                <source src={Project4Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project4-info">
              <Link to="/liz1" className="project-title">Liz Stuart</Link>
              <div className="project-subtitle">HOTTEST SUMMER EVER</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;