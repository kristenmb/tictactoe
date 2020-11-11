# 🌿 Rainforest Tic Tac Toe 🌿

## Description
  This is a two player game of tic tac toe.

## Usage
  Welcome to rainforest tic tac toe. At the top of the page you will see an indication of who's turn it is. The first player can choose any open square on the gameboard in the center of the screen. Once the first player chooses a space, their token will appear and, as depicted at the top of the page, it is now the second player's turn. The goal of the game is to get three of a player's token in a row, either horizontally, vertically, or diagonally from one corner of the game board to the other.<br>
  
#### General Game Play
  If a player wins, a banner will pop up to annouce their win! The winners' win count will increase, and a new game will automatically begin. 
  
![](https://media.giphy.com/media/httFizy6TVVqPaYeXX/giphy.gif)

#### A Draw!
  Should the game result in a draw, the gameboard will reset automatically to allow another round of game play.
  
![](https://media.giphy.com/media/yT4WKoOBXNv76hIyFm/giphy.gif)
  
#### Reset Game
  If your opponent has to leave, click the "Reset Game" button to start a new session with new players.
  
![](https://media.giphy.com/media/int4sf0DPSRmuDQYUe/giphy.gif)

#### Why the Rainforest?
  So why are we playing tic tac toe in the rainforest? Click the "Why Rainforests?" button to understand the inspiration! Return to game play using the "Back to Game" button.
  
![](https://media.giphy.com/media/mcTjKcg0HiQt2jEyHs/giphy.gif)

  Happy Playing!

## Set Up
1. Fork [this](https://github.com/kristenmb/tictactoe) repository.
2. Clone forked repository to your machine.
3. Open repository in your command line.
4. Run `open index.html` to view it in the browser

## Program Languages
* JavaScript
* HTML
* CSS

Click [here](https://gist.github.com/kristenmb/07a3b9c79b42d07a26dc9686c36f330c) for a more in depth look at the architecture of this project. 

## Challenges
* DOM/Data Model separation - It was a challenege to ensure separation of DOM and Data Model manipulation. I spent a good amount of time going through the code while refactoring and seemed to keep finding pieces that needed to be separated into different areas. Overall, thinking through the process of each function in explicit terms helped me determine where I wanted each peiece of functionality to live.

* Proper Use of Local Storage - Determining when and where to save or retrieve from storage was initially a challenege. At first, the player wins wouldn't save appropriately, and the retreieval would not reflect the actual win count. Once I sorted out the order of operations, everything worked as planned! 

## Wins
* CSS - I think my CSS is quite clean compared to past projects. I am also proud of the styling of the site overall.
* Gameplay Logic - I felt I had a strong grasp of the game logic and how to sort out that logic in the data model before creating DOM manipulations. I did get stuck on one aspect of checking win conditions, but worked with my mentor to talk through the logic and eventually found my blocker and surpassed it! 

## Future State
* player login with name options and emoji choices
* more in depth look at aria labels how to make the site more accessible
* win animations 

## Acknowledgements
[Trisha Langlois](https://github.com/trishalanglois)

## Project Members
This project was completed at the Turing School of Software & Design. Functionality and design by [Kristen Bair](https://github.com/kristenmb).
