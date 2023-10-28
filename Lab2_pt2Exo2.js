document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'boundary' (assuming maze walls have this class)
    const walls = document.querySelectorAll('.boundary');
  
    // Function to turn all walls red
    function turnAllWallsRed() {
      walls.forEach((wall) => {
        wall.style.backgroundColor = 'red';
      });
    }
  
    // Function to reset all walls to their original color
    function resetAllWallsColor() {
      walls.forEach((wall) => {
        wall.style.backgroundColor = 'white';
      });
    }
  
    // Add a 'mouseover' event listener to any boundary element
    walls.forEach((wall) => {
      wall.addEventListener('mouseover', function () {
        turnAllWallsRed();
      });
  
      // Add a 'mouseout' event listener to reset the color when the mouse leaves any wall
      wall.addEventListener('mouseout', function () {
        resetAllWallsColor();
      });
    });
  });