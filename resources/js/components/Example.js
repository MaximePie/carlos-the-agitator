import React from 'react';
import ReactDOM from 'react-dom';
import landingBackgroundImage from "../../images/homepage/wallpaper.jpg"
import styleTechoThumbnail from "../../images/homepage/style_techno_thumbnail.jpg"
import styleManagementThumbnail from "../../images/homepage/style_management_thumbnail.jpg"
import CARD from "./Card/Card";

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
      <div className="Homepage-programming-style">
        <h1 className="Homepage-programming-style__header">Choisissez votre style de programmation</h1>
        <p className="Homepage-programming-style__description">Parce que toutes les aventures commencent par un choix</p>
        <div className="Homepage-programming-style__styles-list">
          <CARD className="Homepage-programming-style__card">
            <img className="Homepage-programming-style__image" alt="Style managérial" src={styleManagementThumbnail}/>
          </CARD>
          <CARD className="Homepage-programming-style__card">
            <img className="Homepage-programming-style__image" alt="Style technique" src={styleTechoThumbnail}/>
          </CARD>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Homepage/>, document.getElementById('root'));
}
