import React from 'react';
import ReactDOM from 'react-dom';
import CARD from "./Card/Card";
import HomeProgrammingStyleDialog from "./HomeProgrammingStyleDialog/HomeProgrammingStyleDialog";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../components/Login/Login";

import landingBackgroundImage from "../../images/homepage/wallpaper.jpg"
import styleTechoThumbnail from "../../images/homepage/style_techno_thumbnail.jpg"
import styleManagementThumbnail from "../../images/homepage/style_management_thumbnail.jpg"


export default function Homepage(props){

  // 0 -> No dialog, 1 -> left dialog, 2 -> right dialog
  const [displayedDialogNumber, setDisplayedDialogNumber] = React.useState(0);
  console.log(props)
  return (
    <div className="Homepage">
      <AppBar>
        <Button onClick={() => props.history.push('/login')}>Se connecter</Button>
      </AppBar>
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
          <CARD className="Homepage-programming-style__card" onClick={() => setDisplayedDialogNumber(1)}>
            <img className="Homepage-programming-style__image" alt="Style managérial" src={styleManagementThumbnail}/>
          </CARD>
          <CARD className="Homepage-programming-style__card" onClick={() => setDisplayedDialogNumber(2)}>
            <img className="Homepage-programming-style__image" alt="Style technique" src={styleTechoThumbnail}/>
          </CARD>
        </div>
      </div>

      <HomeProgrammingStyleDialog open={displayedDialogNumber === 1} onClose={() => setDisplayedDialogNumber(0)}>
      </HomeProgrammingStyleDialog>
    </div>
  );
}

if (document.getElementById('root')) {
  const browserHistory = createBrowserHistory()

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route exact path="/" component={Homepage}/>
      <Route path="/login" component={Login}/>
    </Router>
    , document.getElementById('root'));
}
