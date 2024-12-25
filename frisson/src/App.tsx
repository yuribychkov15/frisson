import React, { useRef, useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';
import Logo from './assets/frisson_logo.svg?react';
import FrissonIcon from './assets/F_LOGO.svg?react';
import InstagramIcon from './assets/ig_icon.svg?react';
import SpotifyIcon from './assets/spotify_icon.svg?react';
import TikTokIcon from './assets/tiktok_icon.svg?react';

const App: React.FC = () => {
  const mainLogoRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainLogoRef.current && socialIconsRef.current) {
      // Fade-in animation for the logo
      gsap.fromTo(
        mainLogoRef.current,
        { opacity: 0 }, // Initial state
        { opacity: 1, duration: 1.5, ease: "power2.out" } // Final state
      );
  
      // Fade-in animation for the social media icons
      gsap.fromTo(
        socialIconsRef.current.querySelectorAll('a'),
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.2, delay: 0.5 }
      );
    }
  }, []);

  return (
    <div className="landing-page">
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

      <div className="main-logo-container" ref={mainLogoRef}>
        <Logo />
        <nav className="menu-links">
          <a href="#projects" className="projects">PROJECTS</a>
          <a href="#services" className="services">SERVICES</a>
          <a href="#info" className="info">INFO</a>
          <a href="#contact" className="contact">CONTACT</a>
        </nav>
      </div>
    </div>
  );
};

export default App;
