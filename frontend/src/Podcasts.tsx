// This is a React component that renders a link to the BaconSale podcast.

import React from 'react';
import './Podcasts.css';

function Bacon() {
  return (
    <div className="podcasts-container">
      <h2 className="podcasts-title">Featured Podcast</h2>
      <a
        className="podcasts-link"
        href="https://baconsale.com/"
        target="_blank"
        rel="noreferrer"
      >
        BaconSale Podcast
      </a>
    </div>
  );
}

export default Bacon;
