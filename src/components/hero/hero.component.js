import React from 'react';
import { Link } from 'react-router-dom';

import './hero.styles.scss';

const Hero = () => {
  return (
    <header className="hero">
      <Link className="hero-button" to="./shop">
        Shop Now
      </Link>
    </header>
  );
};

export default Hero;
