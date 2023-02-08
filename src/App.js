import './App.css';
import { useState, useEffect } from 'react';  // Import the useState and useEffect hook
import Square from './Components/Square';     // Import the Square component
import { Patterns } from "./Patterns";        // Import the Patterns component


// The main App component
function App() {

  // Create a board variable and use the setBoard function to update it
  // The board is a 1 dimensional array of 9 squares
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  // Create a player variable to keep track of the players' turns
  // Set state to "O" initially to avoid errors
  const [player, setPlayer] = useState("O");

  // Create a variable to keep track of whether there is a winner
  const [result, setResult] = useState({winner: "none", state: "none"});



  // This function gets called every time the board changes
  useEffect(() => {

    // Call the checkIfTie function to check if there is a tie
    checkIfTie();

    // Call the checkWin function to check if there is a winner
    checkWin();

    // If the current player is X, set it to O and vice-versa
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);



  // This function gets called every time the game result changes and a winner is determined
  useEffect(() => {

    // If the game state is not none,
    if (result.state !== "none") {

      // Display a message showing the winner
      alert(`Game Finished! Winning Player: ${result.winner}`);

      // Restart the game
      restartGame();
    }

  }, [result]);



  // The chooseSquare function gets called when a square gets clicked
  // This is where most of the game logic will be written
  // It takes the square number (0-8) as a value
  // This function gets passed to the Square component, so the square can perform an action after it is clicked
  const chooseSquare = (squareNumber) => {

    // Use the setBoard function to set the new state of the board
    setBoard(board.map((val, index) => {
      
    // This "if" statement prevents the player from changing if you click on an occupied square
    // It sets the player back to the 
    if (index === squareNumber && val !== "") {

      // Set the player back to the previous player
      setPlayer((prev) => {

        // Change the player back to the previous player
        if (prev === "X") {
          return "O"; 
        } else {
          return "X"
        }
      })
     }

      // If the index is equal to the square number
      // and the current value is empty
      if (index === squareNumber && val === "") {

        // Return the current player value ("X" or "O")
        return player;
      }

      // For every other element in the board, return its current value
      return val;
    }));
  };



  // This function checks if a player has won
  // It gets called after every move
  const checkWin = () => {

    // Loop through all of the winning Patterns
    Patterns.forEach((currPattern) => {

      // Store the first player as the first player in the pattern
      const firstPlayer = board[currPattern[0]];

      // If the first player is a blank square, return without executing the rest of the code
      if (firstPlayer === "") {
        return;
      }

      // Set a winning pattern variable initially to true
      let foundWinningPattern = true;

      // Loop through each pattern
      currPattern.forEach((index) => {

        // If in any pattern the next index is not equal to the first player in the pattern, 
        if (board[index] !== firstPlayer) {

          // Set the winning pattern to false
          foundWinningPattern = false;
        }
      })

      // If the foundWinningPattern variable is still true,
      if (foundWinningPattern) {

        // Set the winner and the board state to "won"
        setResult({ winner: player, state: "won" });
      }
    });
  };
  


  // This function checks if the game is a tie
  const checkIfTie = () => {

    // Assume that all squares are filled before checking
    let filled = true;

    // Iterate through each square in the board
    board.forEach((square) => {

      // If the square is blank,
      if (square === "") {

        // Set filled to false because not all squares are filled
        filled = false;
      }
    })

    // If the board is all filled,
    if (filled) {

      // Set the result to a tie
      setResult({ winner: "No One", state: "Tie"});
    }
  };



  // This function restarts the game
  const restartGame = () => {

    // Set the board to be blank
    setBoard(["", "", "", "", "", "", "", "", ""]);

    // Set the player to "O"
    setPlayer("O");
  };



  // The main App component, which displays the tic-tac-toe baord
  return (

    <div className="App">

      {/* Tic-Tac-Toe Board */}
      <div className="board">
        {/* Row 1 */}
        <div className="row">
          <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}} />
          <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}} />
          <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}} />
        </div>
        {/* Row 2 */}
        <div className="row">
          <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}} />
          <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}} />
          <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}} />
        </div>
        {/* Row 3 */}
        <div className="row">
          <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}} />
          <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}} />
          <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}} />
        </div>
      </div>
    </div>
  );
}



export default App;
