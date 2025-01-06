import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { gsap } from 'gsap';
import Logo from './assets/frisson_logo.svg?react';
import FrissonIcon from './assets/F_LOGO.svg?react';
import InstagramIcon from './assets/ig_icon.svg?react';
import SpotifyIcon from './assets/spotify_icon.svg?react';
import TikTokIcon from './assets/tiktok_icon.svg?react';


const Contact: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current && textRef.current && socialIconsRef.current) {
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
        textRef.current.querySelectorAll('div'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.3 }
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
      <div className="contact-text-top" ref={textRef}>
        <div className="contact-top-text">Email us</div>
        <div className="contact-email">frissonprojects@gmail.com</div>
      </div>
      <div className="contact-logo" ref={logoRef}>
        <Logo />
      </div>
      <div className="contact-text-bottom" ref={textRef}>
        <div className="contact-bottom-text">DM Us</div>
        <div className="contact-bottom-text">@frissonprojects</div>
      </div>
    </div>
  );
};

export default Contact;
