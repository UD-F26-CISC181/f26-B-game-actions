/* Problem 7

ActionSpawn represents an action the player can make where the start
piece selected to spawn another piece that gets placed on the board
in a random empty square on the board.

7.1 Define a class named ActionSpawn that extends Action

- Define the constructor with ONLY the game, start and end location parameters.
   Constructor should call the super's constructor.
   Note: the second argument for the super class call should be the ActionType. 
   We don't need this value passed to our constructor because it will
    always represent a Spawn.
   

7.2 Override the method isValidAction method. 
    There is an additional requirement that should be met. 
    Since we are creating a new piece - we must 
    make sure there is room on the board for this new piece. 
    Using good OOP practices, this method should check that this action
    meets all the requirements in Action's isValidAction as well as this 
    additional requirement. (How can we so this without rewriting all of 
    the super's logic?)

7.3 Implement method performAction. This method will carry out the
    spawn on the GameBoard. 
    
    First - check that this is a valid action the player can make.
    If the action is not valid - throw an ActionError and pass:
        - the Game's message (this was set in the isValidAction method)
        - the appropriate ActionType.

    If the action is valid - implement the logic to reflect a spawn made in the 
    game. 
    On a spawn:  
        - the Piece on the Start Square is spawned 
        - update the action for the Piece on start square
        - the spawn is placed on a random empty square and added to the current team    
        - one of the pieces speaks
        - the turn of the game is changed to the other player

    Note: Use  your UML diagram to take advantage of the methods you 
    already created in Part A! This method should not require a lot of coding
    other than to call methods you've already written. 

    Test your ActionSpawn with ActionSpawn.test.ts 
    View the output of the gameboard to see a piece spawn

*/
