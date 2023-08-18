import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const whatGPT3 = () => {
  return (
    // <div>
    //   whatGPT3
    // </div>
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
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
