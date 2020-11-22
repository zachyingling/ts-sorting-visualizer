import React from "react";

interface IProps {
  passedNumber: number
}

function Value(props: IProps) {
  return(<h1>{props.passedNumber}</h1>)
}

export default Value;