import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import landingBackgroundImage from "../../images/homepage/wallpaper.jpg"

export default function Homepage(){
  const landingText = [
    {text: "De direction ?", timeout: 500},
    {text: "De vie ?", timeout: 500},
    {text: "De pensée ?", timeout: 500},
    {text: "Le monde ?", timeout: 2000},
  ];
  const [textSliderCurrentIndex, setTextSliderCurrentIndex] = React.useState(1);

  React.useEffect( () =>{
    setTimeout(() => {
      if (textSliderCurrentIndex === landingText.length - 1) {
        setTextSliderCurrentIndex(0)
      }
      else {
        setTextSliderCurrentIndex(textSliderCurrentIndex + 1)
      }
    }, landingText[textSliderCurrentIndex].timeout)
  }, [textSliderCurrentIndex]);

  return (
    <div className="Homepage">
      <div className="Homepage-landing">
        <h1 className="Homepage-landing__header">Et si on changeait...</h1>
        <img className="Homepage-landing__image" alt="Fond d'écran" src={landingBackgroundImage}/>
        <h1
          className="Homepage-landing__header Homepage-landing__header--slider"
        >
          {landingText[textSliderCurrentIndex].text}
        </h1>
      </div>
    </div>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Homepage/>, document.getElementById('root'));
}
