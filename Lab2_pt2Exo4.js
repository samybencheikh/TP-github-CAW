window.onload = function() {
    var startSquare = document.getElementById("start");
    var boundaries = document.querySelectorAll(".boundary");
  
    // Flag to track if the player has won or lost
    var gameWon = false;
  
    // Function to reset the maze state
    function resetMaze() {
        gameWon = false;
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("youlose");
        }
    }
  
    // Add a click event listener to the "Start" square
    startSquare.addEventListener("click", function() {
        if (gameWon) {
            alert("Congratulations! You've already won. Click 'Start' to play again.");
        } else {
            resetMaze();
        }
    });
  
    // Function to handle when the player wins
    function handleWin() {
        if (!gameWon) {
            alert("Congratulations! You've won!");
            gameWon = true;
        }
    }
  
    // Add a mouseover event listener to the "end" square to detect a win
    var endSquare = document.getElementById("end");
    endSquare.addEventListener("mouseover", handleWin);
  
    // Add a mouseover event listener to the boundaries to detect if the player touches a wall
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function() {
            if (!gameWon) {
                this.classList.add("youlose");
            }
        });
    }
  };