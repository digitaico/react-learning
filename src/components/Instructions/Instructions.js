import React from 'react';
import emoji from './emoji.svg';
import './Instructions.css';

const Instructions = () => {
   return(
      <div className="instructions">
         <img alt="laughing crying emoji" src={emoji} />
         <p>Clickea en un emoji para ver su nombre!</p>
      </div>
   )
}

export default Instructions;
