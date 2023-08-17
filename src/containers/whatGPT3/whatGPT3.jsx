import React from 'react';
import './whatGPT3.css';

const whatGPT3 = () => {
  return (
    // <div>
    //   whatGPT3
    // </div>
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default whatGPT3
