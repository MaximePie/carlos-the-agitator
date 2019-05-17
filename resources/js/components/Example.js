import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import landingBackgroundImage from "../../images/homepage/wallpaper.jpg"

export default function Homepage(){
  return (
    <div className="Homepage">
      <div className="Homepage-landing">
        <h1 className="Homepage-landing__header">Et si on changeait...</h1>
        <img className="Homepage-landing__image" alt="Fond d'écran" src={landingBackgroundImage}/>
        <h1 className="Homepage-landing__header Homepage-landing__header--slider">
          De monde ?
        </h1>
      </div>
    </div>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Homepage/>, document.getElementById('root'));
}
