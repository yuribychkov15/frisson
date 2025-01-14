import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { gsap } from 'gsap';
import RebrandLogo from './assets/FRISSON LOGO - HOME - BLUE.svg?react';
import RebrandFrissonIcon from './assets/FRISSON - REBRAND - FINAL-01.svg?react';
import RebrandInstagramIcon from './assets/FRISSON - REBRAND - FINAL-04.svg?react';
import RebrandSpotifyIcon from './assets/FRISSON - REBRAND - FINAL-05.svg?react';
import RebrandTikTokIcon from './assets/FRISSON - REBRAND - FINAL-06.svg?react';


const Contact: React.FC = () => {
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

      // Fade-in for the text
      gsap.fromTo(
        bottomTextRef.current.querySelectorAll('.contact-bottom-text'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.3 }
      );

      // Fade-in for other text
      gsap.fromTo(
        topTextRef.current.querySelectorAll('.contact-top-text'),
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.3 }
      );
    }
  }, []);

  return (
    <div className="contact-page">
        <div className="corner-icons" ref={socialIconsRef}>
            <a href="/" target="_self" rel="noopener noreferrer" className="top-left">
            <RebrandFrissonIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-right">
            <RebrandInstagramIcon />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="bottom-left">
            <RebrandSpotifyIcon />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bottom-right">
            <RebrandTikTokIcon />
            </a>
      </div>
      <div className="contact-text-top" ref={topTextRef}>
        <div className="contact-top-text">Email us</div>
        <div className="contact-top-text">frissonprojects@gmail.com</div>
      </div>
      <div className="contact-logo" ref={logoRef}>
        <RebrandLogo />
      </div>
      <div className="contact-text-bottom" ref={bottomTextRef}>
        <div className="contact-bottom-text">DM Us</div>
        <div className="contact-bottom-text">@frissonprojects</div>
      </div>
    </div>
  );
};

export default Contact;
