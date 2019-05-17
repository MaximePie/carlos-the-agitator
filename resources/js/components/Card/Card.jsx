import {Card} from "@material-ui/core";
import React from "react";

/**
 *
 * @param props
 * children: JSX Element rendered inside of the Card
 * className: string - Additionnal className
 */
export default function CARD(props) {
  return (
    <Card className="Card">
      {props.children}
    </Card>
  )
}