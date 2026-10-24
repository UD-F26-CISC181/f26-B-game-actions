/* Game Elements Part B
Problem 1

1.1 Create a new abstract class named Game. 
This class should have the following members:
- a member field for the board of type GameBoard
- a member field for team A of type Team
- a member field for team B of type Team
- a member field turn of type Team that refers to the team that has the next turn
- a member field of type string for a message to hold the status of our game

1.2 A constructor with the following parameters in this order:
    - number of rows for the gameboard
    - number of columns for the gameboard
    - a color (string) for Team A
    - a color (string) for Team A
    - number for the maximum abilities that a Piece can initially have
    NOTE: these are not the same as the member fields!!!
    
    The constructor is going to create the objects needed for the game
    as well as set up the board for play - by putting all the pieces on the 
    board. It should:
     - create an instance of a game board and assign it to the corresponding member field
     - create two Team objects and assign one to TeamA and the other to TeamB - (we 
     will use a helper method that will be described in a later instruction)
     - place all the pieces on each team onto the gameboard (we will use another
     helper method that will be described in a later instuction)
     - assign TeamA to the turn member field
     - set the message field to "Ready"

1.3 A private helper that creates a Backpack and loads it with some
abilities. This method has one parameter representing
the maximum number of abilites that the backpack can contain and it
returns a Backpack. This method should create an instance of a backpack 
with a random number of abilities between 0 and up to and including the max value
passed to this method. [0-max_abilites] (inclusive)
Each ability should be randomly selected from this list:
    [ActionType.Spawn, ActionType.Renew, ActionType.SwapBP, ActionType.Convert]

1.4 A private helper method that creates a Team. It has two parameters: the team color and
the maximum number of abilities each Piece's backpack can have 
    This method should create an instance of a team using this color. The team pieces 
    array should have 2 Piece objects: 
        - a PieceBluehen and a PieceMinion
        - each Piece should have a backpack (use your helper method!)
       
1.5 A private method name initializeGameBoard that has no parameters 
   and doesn't return a value. This method should
   set both Teams' pieces randomly on the board.
   Add a call to this method to your constuctor.
   Hint: use your findRandomEmptySquare method in your GameBoard class
   You should write your algorithm for this method before coding it!!
   This is very similar to a method we wrote in the In Class Activity Week 2!

1.6 The acessor methods:
    - getGameBoard,  getMessage

1.7 A method named getCurrentTeam that has no parameters and 
returns the Team team whose turn it is 
    
1.8 A method named getOpponentTeam that has no parameters and
returns the Team whose turn it isn’t 

1.9 A method named isTurn that has one Team parameter and returns a 
          boolean representing whether it is this Team’s turn 

1.10 A method named changeTurn that has no parameters and doesn't return
a value. This method sets the member field 'turn' to the other Team

1.11 A setter method
    setMessage

1.12 An abstract method named isGameEnded that has no parameters 
and returns a boolean.

1.13 An abstract method named getWinner that has no parameters 
and returns a Team.

1.14 A toString method is already defined for you:


   toString(): string {
        let retString: string = "";
        retString = retString.concat("\n" + this.getGameBoard().toString());
        retString = retString.concat(
            "\n" + this.getCurrentTeam().toString() + "\n",
        );
        retString = retString.concat(
            "\n" + this.getOpponentTeam().toString() + "\n",
        );
        retString = retString.concat(
            "\nIt is Team " + this.turn.getTeamColor() + "'s turn\n",
        );
        return retString.toString();
    }

- Complete GameF26 before testing.
*/
