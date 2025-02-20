import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Chloe2.css';

import FrissonBlueIcon from '../assets/FRISSON - F ICON - BLUE.png';
import InstaBlueIcon from '../assets/FRISSON - INSTA ICON - BLUE.png';
import TikTokBlueIcon from '../assets/FRISSON-TIKTOK ICON - BLUE.png';
import SpotifyBlueIcon from '../assets/FRISSON - SPOTIFY - BLUE.png';
import Logo from '../assets/FRISSON - CONTACT PAGE - LOGO - BLACK.svg?react';

import MainImage from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-HERO IMAGE.jpg';
import Service1Image from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-SOLO SHOT.jpg';
import Service2Image from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-IMG3.jpg';
import Service3Image from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-IMG4.jpg';
import Service4Image from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-IMG5.jpg';
import Service5Image from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-IMG6.jpg';
import Service6Image from '../assets/WEBSITE-CHLOE SOUTHERN KEFI-IMG7.jpg';

import Gallery1Image from '../assets/Mask Group 6.jpg';
import Gallery2Image from '../assets/IMG_2852.jpg';
import Gallery3Image from '../assets/L53A0631.jpg';
import Gallery4Image from '../assets/L53A0572.jpg';
import Gallery5Image from '../assets/IMG_2859.jpg';


const Chloe2: React.FC = () => {
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

      <div className="chloe2-content">
        <div className="chloe2-header">
          <h1><u>CHLOE SOUTHERN:</u> WHAT CAN <br />I DO BEYOND SOCIAL MEDIA?</h1>
            <div className="chloe2-services">
                <u>Services:</u> Event production, short form,<br />
                photography and video production, event<br />
                menus, event invitation, promotional show<br />
                graphic
            </div>
        </div>

        <div className="main-image-container">
          <img src={MainImage} alt="Chloe Southern" className="main-image" />
          <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
        </div>

        <div className="project-description">
          <p>
            With a visual production team handling her music videos and cover art,<br />
            Chloe Southern came to us with a different question:<br />
            “How can I connect with my audience beyond social media?”<br /><br />
            
            We hosted an exclusive dinner for music industry professionals and<br />
            tastemakers to discuss their connection with music.<br /><br /> 
            
            In partnership with The Luna Collective, we served a three-course meal<br />
            with bottomless Greek wine, reflective of Chloe’s Greek heritage.<br />
            Guests also received a Frisson x Luna Collective gift bag and a ticket to<br />
            Chloe’s concert the next evening.
          </p>
        </div>

        {/* Project Services */}
        <div className="project-services">
            <div className="service-item service-1">
                <img src={Service1Image} alt="Kefi Series" className="service-image" />
                <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
            </div>
            
            <div className="service-item service-2">
                <img src={Service2Image} alt="Kefi Series" className="service-image" />
                <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
            </div>
            <div className="service-item service-3">
                <img src={Service3Image} alt="Kefi Series" className="service-image" />
                <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
            </div>
            
            <div className="service-item service-4">
                <img src={Service4Image} alt="Kefi Series" className="service-image" />
                <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
            </div>

            <div className="service-item service-5">
                <img src={Service5Image} alt="Kefi Series" className="service-image" />
                <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
            </div>

            <div className="service-item service-6">
                <img src={Service6Image} alt="Kefi Series" className="service-image" />
                <div className="image-credit"><u>Kefi Series #1</u><br />Photographer: Sydney Tate</div>
            </div>
        </div>

        {/* Bottom Gallery */}
        <div className="bottom-gallery">
            <div className="gallery-image-container">
                <img src={Gallery1Image} alt="Event Image 1" className="gallery-image" />
            </div>
            <div className="gallery-image-container">
                <img src={Gallery2Image} alt="Event Image 2" className="gallery-image" />
            </div>
            <div className="gallery-image-container">
                <img src={Gallery3Image} alt="Event Image 3" className="gallery-image" />
            </div>
            <div className="gallery-image-container">
                <img src={Gallery4Image} alt="Event Image 4" className="gallery-image" />
            </div>
            <div className="gallery-image-container">
                <img src={Gallery5Image} alt="Event Image 5" className="gallery-image" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chloe2;