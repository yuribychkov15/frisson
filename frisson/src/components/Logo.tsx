import React from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ className, alt }) => (
  <img src="./assets/FRISSON LOGO MENU.svg" className={className} alt={alt} />
);

export default Logo;