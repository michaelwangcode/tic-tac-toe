# Tic-Tac-Toe with React

## About

This project is based on the [Tic-Tac-Toe tutorial](https://www.youtube.com/watch?v=3P8orW_DeEw) by PedroTech on YouTube.

To run the application, type `npm start` in the terminal.

&nbsp;



## Project Layout

All of the game logic is located in the `App.js` file.

The only component is the Square, which calls the `chooseSquare` function in `App.js` when it is clicked.

The `App.css` file contains all of the CSS for the project.

The `Patterns.js` file is used to store winning board patterns (horizontal, vertical and diagonal).

&nbsp;



## Bug Fixes

1. If the very last move is a winning move, the game alerts a tie.

To fix this, move the `checkIfTie` function ahead of the `checkWin` function in the `useEffect` hook.

2. If you click an occupied square, the turn player will change even through it's not supposed to.

To fix this, add an `if` statement to the `chooseSquare` funciton that sets the `player` variable back if they click on an occupied square.

&nbsp;


