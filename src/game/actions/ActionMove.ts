/* Problem 6

ActionMove represents an action the player can make where the start
piece is moved to an empty square on the board.

6.1 Define a class named ActionMove that extends Action

- Define the constructor with ONLY the game, start and end location parameters.
   Constructor should call the super's constructor.
   Note: the second argument for the super class call should be the ActionType. 
   We don't need this value passed to our constructor because it will
   always represent a Move.
            

6.2 Implement method performAction. This method will carry out the
    move on the GameBoard. 

    First - check that this is a valid action the player can make.
    If the action is not valid - throw an ActionError and pass:
        - the Game's message (this was set in the isValidAction method)
        - the appropriate ActionType

    If the action is valid - implement the logic to reflect a move made in the 
    game. 
    On a move:  
        - the Piece on the Start Square is moved to the End Square 
        - update the action for the Piece on start square 
        - the Piece speaks
        - the turn of the game is changed to the other player   

    Note: Use your UML diagram to take advantage of the methods you 
    already created in Part A! This method should not require a lot of coding
    other than to call methods you've already written. 

    Test your ActionMove with ActionMove.test.ts 
    View the output of the gameboard to see your piece move
*/
