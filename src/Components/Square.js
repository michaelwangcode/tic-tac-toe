import React from "react";
import "../App.css";


// The Square component
// It takes a value ("X","O" or "") 
// and a function that gets called when a square is clicked
function Square({val, chooseSquare}) {

  // Return the Square component
  return (
    // When the square is clicked, call the chooseSquare function
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  )
}


export default Square;