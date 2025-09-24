let secret = 60; 
function checkGuess() {
      let userGuess = document.getElementById("guess").value;
      let result = document.getElementById("result");

      if (userGuess == secret) {
        result.textContent = "Correct! You guessed it!";
      } else if (userGuess < secret) {
        result.textContent = "Too Low!";
      } else {
        result.textContent = "Too High!";
    }
}
