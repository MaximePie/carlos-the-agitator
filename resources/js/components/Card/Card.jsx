import {Card} from "@material-ui/core";
import React from "react";
import classnames from "classnames";

/**
 *
 * @param props
 * children: JSX Element rendered inside of the Card
 * className: string - Additional className
 */
export default function CARD(props) {
  const classes = classnames(
    "Card",
    props.className
  );

  return (
    <Card className={classes}>
      {props.children}
    </Card>
  )
}