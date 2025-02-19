import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Project.css';

import FrissonIcon from '../assets/f_logo.svg?react';
import InstagramIcon from '../assets/ig_icon.svg?react';
import SpotifyIcon from '../assets/spotify_icon.svg?react';
import TikTokIcon from '../assets/tiktok_icon.svg?react';
import Logo from '../assets/FRISSON - CONTACT PAGE - LOGO - BLACK.svg?react'; // Your dotted frisson logo

import ProjectImage1 from '../assets/Mask Group 6.jpg';

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
          <FrissonIcon />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-right">
          <InstagramIcon />
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="bottom-left">
          <SpotifyIcon />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bottom-right">
          <TikTokIcon />
        </a>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="project-grid">
          {/* First Project Item */}
          <div className="project-item">
            <div className="project-image-container">
              <img src={ProjectImage1} alt="KEFI SERIES #1" className="project-image" />
            </div>
            <div className="project-info">
              <div className="project-title">KEFI SERIES #1</div>
              <div className="project-subtitle">Photo Synthetic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;