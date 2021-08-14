import React from 'react';
import './App.css';
import Instructions from '../Instructions/Instructions';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
   {
      emoji: "😀",
      name: "grinning face"
   },
   {
      emoji: "🎉",
      name: "party popper"
   },
   {
      emoji: "💃",
      name: "woman dancing"
   },
];

function App() {
   const greeting = "greeting!!";
   const displayAction = false;
   return(
      <div className="container">
      <h1 id={greeting}>Hola Jea!!</h1>
         {displayAction && <p>Yo estoy usando JSX!!</p>}
         <Instructions />
         <ul>
            {
             emojis.map(emoji => (
               <li key={emoji.name}>
                  < button
                  onClick={displayEmojiName}
               >
                     <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                  </button>
                </li>
               ))
              }
         </ul>
      </div>
   )
}

export default App;