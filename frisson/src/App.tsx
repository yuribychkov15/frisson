// import React, { useRef, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import { gsap } from 'gsap';

// import RebrandLogo from './assets/FRISSON LOGO - HOME - BLUE.svg?react';
// import RebrandFrissonIcon from './assets/FRISSON - REBRAND - FINAL-01.svg?react';
// import RebrandInstagramIcon from './assets/FRISSON - REBRAND - FINAL-04.svg?react';
// import RebrandSpotifyIcon from './assets/FRISSON - REBRAND - FINAL-05.svg?react';
// import RebrandTikTokIcon from './assets/FRISSON - REBRAND - FINAL-06.svg?react';


// import Contact from './Contact'; // Import Contact page
// import Services from './Services';
// import Info from './Info';
// import Project from './Project';

// const LandingPage: React.FC = () => {
//   const mainLogoRef = useRef<HTMLDivElement>(null);
//   const socialIconsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (mainLogoRef.current && socialIconsRef.current) {
//       // Fade-in animation for the logo
//       gsap.fromTo(
//         mainLogoRef.current,
//         { opacity: 0 }, // Initial state
//         { opacity: 1, duration: 1.5, ease: "power2.out" } // Final state
//       );

//       // Fade-in animation for the social media icons
//       gsap.fromTo(
//         socialIconsRef.current.querySelectorAll('a'),
//         { opacity: 0 },
//         { opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.2, delay: 0.5 }
//       );
//     }
//   }, []);

//   return (
//     <div className="landing-page">
//       <div className="corner-icons" ref={socialIconsRef}>
//         <a href="/" target="_self" rel="noopener noreferrer" className="top-left">
//           <RebrandFrissonIcon />
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-right">
//           <RebrandInstagramIcon />
//         </a>
//         <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="bottom-left">
//           <RebrandSpotifyIcon />
//         </a>
//         <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bottom-right">
//           <RebrandTikTokIcon />
//         </a>
//       </div>

//       <div className="main-logo-container" ref={mainLogoRef}>
//         <div className="logo">
//           <RebrandLogo />
//         </div>
//         <nav className="menu-links">
//           <Link to="/project" className="projects">PROJECTS</Link>
//           <Link to="/services" className="services">SERVICES</Link>
//           <Link to="/info" className="info">INFO</Link>
//           <Link to="/contact" className="contact">CONTACT</Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

const App: React.FC = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //   <Route path="/contact" element={<Contact />} />
    //   <Route path="/services" element={<Services />} />
    //   <Route path="/info" element={<Info />} />
    //   <Route path="/project" element={<Project />} />
    // </Routes>
    <div><h1>CURRENTLY UNDER MAINTENCE :P</h1></div>
  );
};

export default App;
