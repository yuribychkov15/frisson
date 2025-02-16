import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Services.css';

import FrissonIcon from './assets/f_logo.svg?react';
import InstagramIcon from './assets/ig_icon.svg?react';
import SpotifyIcon from './assets/spotify_icon.svg?react';
import TikTokIcon from './assets/tiktok_icon.svg?react';

const Services: React.FC = () => {
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
    <div className="contact-page">
      <div className="services-wrapper">
        
        {/* Top block – CREATIVE STRATEGY */}
        <div className="services-text-top">
          <h1 className="services-top-text"><u>CREATIVE STRATEGY</u></h1>
          <p className="services-top-text-two">
            We use design as the visual execution of our creative strategy and see <br />
            how it belongs in the artist's world. From branding to digital and print <br />
            applications and more, we use design to effectively communicate the <br />
            message to the artist's intended audience.
          </p>
        </div>

        {/* Bottom block – three columns */}
        <div className="services-text-bottom">
          <div className="services-bottom-columns">
            {/* Column 1 – DESIGN */}
            <div className="services-column design-column">
              <h2><u>DESIGN</u></h2>
              <div className="sub-block">
                <h3><u>Branding</u></h3>
                <p>BRAND IDENTITY / LOGO <br />
                  DESIGN / COVER <br />
                  ARTWORK</p>
              </div>
              <div className="sub-block">
                <h3><u>Digital</u></h3>
                <p>ARTIST WEBSITE / <br />
                ADVERTISING / TITLE <br />
                SEQUENCE / ANIMATION</p>
              </div>
              <div className="sub-block">
                <h3><u>Other</u></h3>
                <p>PRINT &amp; POSTER <br />
                DESIGN / MERCHANDISE</p>
              </div>
            </div>

            {/* Column 2 – CONTENT */}
            <div className="services-column content-column">
              <h2><u>CONTENT</u></h2>
              <div className="sub-block">
                <h3><u>Social Content</u></h3>
                <p>SHORT FORM / TEASERS</p>
              </div>
              <div className="sub-block">
                <h3><u>Video Production</u></h3>
                <p>MUSIC VIDEO / <br />
                VISUALIZER / <br />
                DOCUMENTATION</p>
              </div>
              <div className="sub-block">
                <h3><u>Photography</u></h3>
                <p>COVER ART / <br />
                DOCUMENTATION / <br />
                PRESS PHOTOS </p>
              </div>
            </div>

            {/* Column 3 – EVENTS */}
            <div className="services-column events-column">
              <h2><u>EVENTS</u></h2>
              <p>
                CREATIVE DIRECTION / <br />
                PRODUCTION / FAN <br />
                ENGAGEMENT / <br />
                COMMUNITY
              </p>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Services;
