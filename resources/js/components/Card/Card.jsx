import {Card} from "@material-ui/core";
import React from "react";
import classnames from "classnames";

/**
 *
 * @param props
 * children: JSX Element rendered inside of the Card
 * className?: string - Additional className
 * onClick?: () => void - Additional function to trigger when clicked
 */
export default function CARD(props) {
  const classes = classnames(
    "HomeProgrammingStyleDialog.jsx",
    props.className
  );

  return (
    <div onClick={props.onClick ? () => props.onClick() : undefined}>
      <Card className={classes}>
        {props.children}
      </Card>
    </div>
  )
}