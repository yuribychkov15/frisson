import React, { useEffect, useRef } from 'react';
import './Services.css';
import { gsap } from 'gsap';
import FrissonIcon from './assets/F_LOGO.svg?react';
import InstagramIcon from './assets/ig_icon.svg?react';
import SpotifyIcon from './assets/spotify_icon.svg?react';
import TikTokIcon from './assets/tiktok_icon.svg?react';


const Services: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current && topTextRef.current && bottomTextRef.current && socialIconsRef.current) {
      // Logo shrinking animation
      gsap.fromTo(
        logoRef.current,
        { scale: 1 },
        { scale: 0.5, duration: 2, ease: "power2.inOut" }
      );

      gsap.fromTo(
        socialIconsRef.current.querySelectorAll('a'),
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.2, delay: 0.5 }
      );
    }
  }, []);

  return (
    <div className="contact-page">
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

    <div className="container">
        
        <div className="services-text-top" ref={topTextRef}>
            <h1 className="services-top-text"><u>CREATIVE STRATEGY</u></h1>
            <p className="services-top-text-two">We use design as the visual execution of our creative strategy and see{"\n"}
            how it belongs in the artist's world. From branding to digital and print{"\n"}
            applications and more, we use design to effectively communicate the{"\n"}
            message to the artist's intended audience.
            </p>
        </div>

        <div className="services-text-bottom-one" ref={bottomTextRef}>
            <h1 className="services-bottom-text"><u>DESIGN</u></h1>
            <div className="branding">
                <p><u>Branding</u></p>
                <h1>BRAND IDENTITY / LOGO {"\n"}
                    DESIGN / COVER {"\n"}
                    ARTWORK
                </h1>
            </div>
            <div className="digital">
                <p><u>Digital</u></p>
                <h1>ARTIST WEBSITE / {"\n"}
                    ADVERTISING / TITLE {"\n"}
                    SEQUENCE / ANIMATION
                </h1>
            </div>
            <div className="other">
                <p><u>Other</u></p>
                <h1>PRINT & POSTER {"\n"}
                    DESIGN / MERCHANDISE
                </h1>
            </div>
        </div>

    </div>
      

    
    </div>
  );
};

export default Services;
