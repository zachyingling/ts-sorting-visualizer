import React from "react";
import "./Value.css";

interface IProps {
  passedNumber: number
}

function Value(props: IProps) {
  return(<div className="valueContainer">{props.passedNumber}</div>)
}

export default Value;