import React from "react";
import CARD from "../Card/Card.jsx";

export default function LOGIN(props) {
  const [mail, setMail] = React.useState("")
  const [password, setPassword] = React.useState("")
  return (
    <div className="Login Visitor-content">
      <h1 className="Login__header header-white">Identification</h1>
      <CARD className="Login__form">
        <form action={""}>
          <input onChange={() => setMail(event.target.value)} type="text" className="Login__mail-field" placeholder="E-mail de super-héros"/>
          <input onChange={() => setPassword(event.target.value)} type="password" className="Login__password-field" placeholder="Mot de passe top secret"/>
          <button type="button" onClick={login} className="Login__submit">Rejoindre l'aventure</button>
        </form>
      </CARD>
    </div>
  )

  /**
   * This function will send the entered data to the server, based on the current fields state
   */
  function login() {

  }
}