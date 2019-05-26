import {Card} from "@material-ui/core";
import React from "react";
import classnames from "classnames";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import styleManagementImage from "../../../images/homepage/style_management_image.jpg";

/**
 *
 * @param props
 * children: JSX Element rendered inside of the Card
 * className?: string - Additional className
 * open: boolean determines weather the modal should be open or closed
 * onClose?: Optional action to trigger when the user closes the Dialog.
 */
export default function HomeProgrammingStyleDialog(props) {
  const classes = classnames(
    "HomeProgrammingDialog",
    props.className
  );

  return (
    <Dialog className={classes} open={props.open} onClose={props.onClose ? () => props.onClose() : undefined}>
      <DialogTitle>
        Maîtrisez votre révolution !
      </DialogTitle>
      <DialogContent>
        <img src={styleManagementImage} alt="Style managérial, décoration"/>
        <div className="HomeProgrammingDialog__description">
          Parce que travailler avec des humains permet de faire de grandes choses, une bonne organisation sera
          nécessaire.
          Prenez le contrôle de vos rêves et planifiez votre produit avec brio, et devenez les meilleurs managers
          dont le monde puisse rêver !
          <div>
            Difficulté :
            <span>
                Difficile
              </span>
          </div>
        </div>
        <div>
          <h4>Les plus et les moins</h4>
          <div>
            <div>
              <h5>Les plus</h5>
              <ul>
                <li>
                  Qualité au rendez-vous
                </li>
                <li>
                  Travail en équipe
                </li>
              </ul>
            </div>
            <div>
              <h5>Les moins</h5>
              <ul>
                <li>
                  Abstrait
                </li>
                <li>
                  Chronophage
                </li>
                <li>
                  Rigoureux
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}