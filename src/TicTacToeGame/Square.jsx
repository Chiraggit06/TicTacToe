import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{border: "1px solid grey",
    height:"100px",
    width:"100%",
    dispaly:"flex",
    justifyContent:"center",
    alignItems: "center",
    textAlign:"center",
}}
    className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
