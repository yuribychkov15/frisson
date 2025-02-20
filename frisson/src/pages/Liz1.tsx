import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Liz1.css';

import FrissonBlueIcon from '../assets/FRISSON - F ICON - BLUE.png';
import InstaBlueIcon from '../assets/FRISSON - INSTA ICON - BLUE.png';
import TikTokBlueIcon from '../assets/FRISSON-TIKTOK ICON - BLUE.png';
import SpotifyBlueIcon from '../assets/FRISSON - SPOTIFY - BLUE.png';
import Logo from '../assets/FRISSON - CONTACT PAGE - LOGO - BLACK.svg?react';

import MainVideo from '../assets/WEBSITE-LIZ STUART-HSE MV (2) (1) (1).mp4';
import Service1Image from '../assets/HSE - COVER ART - FINAL copy.jpg';
import Service2Image from '../assets/IMG_9121 2.jpg';
import Service3Image from '../assets/WEBSITE - PROJECT CARD - LIZ STUART - HSE.mp4';


const Liz1: React.FC = () => {
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

      <div className="liz1-content">
        <div className="liz1-header">
          <h1><u>LIZ STUART:</u> HOW DO I<br />VISUALIZE MY MUSIC?</h1>
            <div className="liz-services">
                Services: Photography, Video Production,<br />
                Short Form, Teasers, Spotify Canvas,<br /> 
                Cover Artwork, Title Sequence
            </div>
        </div>

        <div className="main-video-container">
            <video controls className="liz-project-video">
                <source src={MainVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          <div className="video-credit"><u>Hottest Summer Ever Music Video</u><br /> Director of Photography: Aislyn Murray</div>
        </div>

        <div className="project-description">
          <p>
            Brooklyn-based independent artist Liz Stuart approached us with a <br />
            complete musical project, but no clear visual concept. Frisson Projects <br />
            provided end-to-end creative direction, overseeing the development of <br />
            the storyboard, video treatment, shot list, styling, director of <br />
            photography, and catering. <br /><br />

            Thus, the Hottest summer Ever music video was born. <br /><br />

            Retreat: We hosted a three-day, all-female retreat in the heart of the <br />
            Poconos Mountains, providing all-inclusive accommodations, <br />
            transportation, and gourmet meals prepared by a private chef.
          </p>
        </div>

        {/* Project Services */}
        <div className="project-services">
            <div className="service-item service-1">
                <img src={Service1Image} alt="Hottest Summer Ever Cover Art" className="service-image" />
                <div className="liz-image-credit"><u>Hottest Summer Ever Cover Art</u><br />Photographer: Aislyn Murray</div>
            </div>
            
            <div className="service-item service-2">
                <img src={Service2Image} alt="Blueprints Instagram Post" className="service-image" />
                <div className="liz-image-credit"><u>Hottest Summer Ever BTS</u><br />Photographer: Lillee Bellia</div>
            </div>
            <div className="service-item service-3">
                <video controls className="service-image">
                    <source src={Service3Image} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="liz-image-credit"><u>Hottest Summer Ever Spotify Canvas</u><br />Director of Photography: Aislyn Murray</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Liz1;