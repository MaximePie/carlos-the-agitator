import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import landingBackgroundImage from "../../images/homepage/wallpaper.jpg"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {Router, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../components/Login/Login";



export default function Homepage(){
  return (
    <div className="Homepage">
      <AppBar>
        <Button onClick={() => history.push('/login')}>Se connecter</Button>
      </AppBar>
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
  const browserHistory = createBrowserHistory()

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route exact path="/" component={Homepage}/>
      <Route path="/login" component={Login}/>
    </Router>
    , document.getElementById('root'));
}
