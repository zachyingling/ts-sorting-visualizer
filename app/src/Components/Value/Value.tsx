import React from "react";
import "./Value.css";

interface IProps {
  passedNumber: number
}

function Value(props: IProps) {
  return(<div className="valueContainer" style={{height: props.passedNumber + "px", backgroundColor: "red"}}></div>)
}

export default Value;