  Game 2048

  1.  [DEMO LINK](https://zvir91.github.io/2048/);      
  2.  [Github](https://github.com/zvir91/2048);

  3. In this project, I have implemented a clone of the popular 2048 game.  
    Through this project, I learned several key concepts and techniques in web development and JavaScript programming:        

    1. DOM Manipulation:  
      Selecting Elements: Using document.querySelector and document.getElementById to select elements from the DOM.    
      Creating and Appending Elements: Using document.createElement and element.append to create new elements dynamically and add them to the DOM.    
      Updating Elements: Modifying the inner content and classes of elements dynamically to reflect game state changes.    
    2. Event Handling:  
      Event Listeners: Using addEventListener to handle user interactions such as button clicks and key presses.    
      Event Delegation: Detecting which element triggered an event using event.target.    
    3. Game Logic:  
      Grid Initialization: Setting up a 4x4 grid with initial values and dynamically generating tiles.  
      Random Tile Generation: Adding new tiles (2 or 4) at random empty positions on the grid.  
      Tile Merging and Sliding: Implementing the logic to slide and merge tiles in four directions (left, right, up, down) based on user input.    
    4. State Management:  
      Game State: Managing the state of the game board using a 2D array to represent the grid.  
      Score Keeping: Tracking and updating the score based on tile merges.  
      Game Over and Win Conditions: Checking for game over and win conditions and displaying appropriate messages.    
    5. CSS Class Manipulation:  
      Dynamic Classes: Changing the class of elements to apply different styles based on their state (e.g., different tile values).  
      Hiding and Showing Elements: Using classes to hide or show elements, such as start, win, and lose messages.  
    6. Basic Algorithmic Thinking:  
      Sliding Mechanism: Developing the logic to handle the sliding and merging of tiles in a way that respects the rules of 2048.  
      Random Number Generation: Using Math.random to place new tiles randomly on the grid.  
      Filtering and Merging Arrays: Implementing functions to filter out zeros, merge adjacent tiles, and slide tiles appropriately.    
    7. Handling Different States and Conditions:  
      Game Initialization and Restart: Initializing the game board and resetting it for new games.  
      Input Handling: Reacting to different user inputs (arrow keys) and ensuring proper game behavior.    
    8. Project Structure:  
      HTML, CSS, and JavaScript: Organizing my project files and linking them correctly.  
      Scalability and Maintainability: Writing modular and reusable code that is easy to read and maintain.  
    Overall, this project gave me practical experience with creating an interactive game, manipulating the DOM, handling user inputs, and implementing game logic.  

  4.  Technologies that were used: HTML, JavaScript, Scss.

  5. To run project locally:  

    git clone  

    npm i  

    npm start   
