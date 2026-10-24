/* Problem 5
Abstractly represents the actions a player can take.

5.1 Create an abstract class named Action with the following:
- member field to represent a game  (type Game)
- member field to represent the action type (ActionType)
- member field to represent the start square selected by user (BoardLocation)
- member field to represent the end locations selected by user (BoardLocation)
- member field to represent the requirements for this action (Requirements)
- constructor with the first four parameters listed above and set these member fields
The constructor should create a new instance of Requirements and assign it to the
corresponding member field

5.2 Getters
    -getActionType and getRequirements

5.3 An abstract method performAction with no parameters and returns a boolean

5.4  A method updatePieceAction that has one Piece parameter representing 
the Piece taking the action. This method calls the Piece's updateAction.

5.5 An method isValidAction with no parameters and returns a boolean
    - this method will return a boolean representing whether this action is valid
    - it will use the values from the requirements field to determine which
    rules to check
    - if the requirement is not met - set the game's message field to the 
    appropriate message indicating why the action is not valid  - see 
    the table in the Canvas assignment for the list of messages
    
    Note: Use helper functions to avoid a very long isValidAction method
    Recommended:
        - one for checking the bounds of location
        - one for checking that all the rules for the piece on the start location are met
        - one for checking that all the rules for the end location are met

- This class will be tested when you created more subclasses.
*/
