import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Chloe1.css';

import FrissonBlueIcon from '../assets/FRISSON - F ICON - BLUE.png';
import InstaBlueIcon from '../assets/FRISSON - INSTA ICON - BLUE.png';
import TikTokBlueIcon from '../assets/FRISSON-TIKTOK ICON - BLUE.png';
import SpotifyBlueIcon from '../assets/FRISSON - SPOTIFY - BLUE.png';
import Logo from '../assets/FRISSON - CONTACT PAGE - LOGO - BLACK.svg?react';

import MainImage from '../assets/WEBSITE-CHLOE SOUTHERN-BLUEPRINTS -HERO.png';
import Service1Image from '../assets/IMG_1106 2.jpg';
import Service2Image from '../assets/IMG_3695.jpg';
import Service3Image from '../assets/IMG_4279 2.jpg';
import Service4Image from '../assets/IMG_0143 2.jpg';


const Chloe1: React.FC = () => {
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

      <div className="chloe1-content">
        <div className="chloe1-header">
          <h1><u>CHLOE SOUTHERN:</u> HOW CAN I <br />CAPTURE NEW LISTENERS?</h1>
          <div className="chloe-services">
            Services: Creative strategy, single <br/>
            promotion flyer, single promotion post <br/>
            card
            </div>
        </div>

        <div className="main-image-container">
          <img src={MainImage} alt="Chloe Southern" className="main-image" />
          <div className="image-credit">Photographer: Brad Lynn</div>
        </div>

        <div className="project-description">
          <p>To expand Chloe's reach beyond her social media following, we launched a guerrilla marketing campaign in Brooklyn, NY. Through eye-catching posters featuring lyrics from Chloe's song, Blueprints, and a scannable QR code, we drove over 1,000 direct visits to her Spotify profile, successfully engaging new listeners in the local community.</p>
          <p>We took it further by creating printed post cards promoting her new single that we handed out at one of her shows.</p>
        </div>

        {/* Project Services */}
        <div className="project-services">
            <div className="service-item service-1">
                <img src={Service1Image} alt="Blueprints Promotional Flyer" className="service-image" />
                <div className="image-credit">Blueprints' Promotional Flyer</div>
            </div>
            
            <div className="service-item service-2">
                <img src={Service2Image} alt="Blueprints Instagram Post" className="service-image" />
                <div className="image-credit">Blueprints' Promotional Flyer</div>
            </div>
            <div className="service-item service-3">
                <img src={Service3Image} alt="Blueprints Promotional Flyer" className="service-image" />
                <div className="image-credit">Blueprints' Promotional Flyer</div>
            </div>
            
            <div className="service-item service-4">
                <img src={Service4Image} alt="Blueprints Instagram Post" className="service-image" />
                <div className="image-credit">Blueprints' Promotional Flyer</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chloe1;