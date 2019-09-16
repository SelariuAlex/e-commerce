import React from 'react';
import Directory from '../../components/directory/directory.component';
import Hero from '../../components/hero/hero.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="homepage">
        <h1 className="homepage__title">Collection</h1>
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
