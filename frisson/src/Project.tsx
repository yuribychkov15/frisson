import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Project.css';

import FrissonIcon from './assets/F_LOGO.svg?react';
import InstagramIcon from './assets/ig_icon.svg?react';
import SpotifyIcon from './assets/spotify_icon.svg?react';
import TikTokIcon from './assets/tiktok_icon.svg?react';

import InfoGif from './assets/FRISSON-WEBSITE-INFO-GIF.gif';

const Project: React.FC = () => {
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const gifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (socialIconsRef.current) {
      gsap.fromTo(
        socialIconsRef.current.querySelectorAll('a'),
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.2, delay: 0.5 }
      );
    }

    if (gifRef.current) {
      gsap.fromTo(
        gifRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
      );
    }
  }, []);

  return (
    <div className="project-page">
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
        <div className="text-content">
            <h1>
                A BROOKLYN<br />
                BASED STRATEGIC<br />
                CREATIVE STUDIO<br />
                SPECIALIZING IN<br />
                IMMERSIVE WORLD<br />
                BUILDING FOR<br />
                ARTISTS.
            </h1>
        </div>
        <div className="gif-content" ref={gifRef}>
          {/* Replace the src with your actual GIF file */}
          <img src={InfoGif} alt="Info GIF" />
        </div>
      </div>
    </div>
  );
};

export default Project;