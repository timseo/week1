
var Display = function(displayElement) {
  var display = displayElement;
  function setText(message) {
    display.innerText = message;
  }
  return {setMessage: setText};
};

function isValid(button) {
  return button.innerText.length == 0;
};

function whoWon(squares, player, whosTurn) {
  if (squares[0].innerText == player[whosTurn] &&
      squares[1].innerText == player[whosTurn] &&
      squares[2].innerText == player[whosTurn])
      return true;

  if (squares[3].innerText == player[whosTurn] &&
      squares[4].innerText == player[whosTurn] &&
      squares[5].innerText == player[whosTurn])
      return true;

  if (squares[6].innerText == player[whosTurn] &&
      squares[7].innerText == player[whosTurn] &&
      squares[8].innerText == player[whosTurn])
      return true;

  if (squares[0].innerText == player[whosTurn] &&
      squares[3].innerText == player[whosTurn] &&
      squares[6].innerText == player[whosTurn])
      return true;

  if (squares[1].innerText == player[whosTurn] &&
      squares[4].innerText == player[whosTurn] &&
      squares[7].innerText == player[whosTurn])
      return true;

    if (squares[2].innerText == player[whosTurn] &&
        squares[5].innerText == player[whosTurn] &&
        squares[8].innerText == player[whosTurn])
        return true;

    if (squares[0].innerText == player[whosTurn] &&
        squares[4].innerText == player[whosTurn] &&
        squares[8].innerText == player[whosTurn])
        return true;

    if (squares[2].innerText == player[whosTurn] &&
        squares[4].innerText == player[whosTurn] &&
        squares[6].innerText == player[whosTurn])
        return true;
}

function setMark(btn, mark) {
  btn.innerText = mark;

}

function startGame() {
  var squares = document.getElementsByClassName("square");
  var player = ["X", "O"];
  var whosTurn = 0;
  var gameOver = false;
  var display = new Display(document.querySelector("gameInstructions"));


  display.setMessage("Player " + player[whosTurn] + " you're up!");

  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      if (gameOver);
        return;

        if (!isValid(this)) {
           display.setMessage("Invalid move.");

        } else {
          setMark(this, player[whosTurn]);

          gameOver = whoWon(squares, player, whosTurn);

          if (gameOver) {
            display.setMessage("Player " + player[whosTurn] + " wins!");
            return;
          }

          if (isBoardFull(squares)) {
            display.setMessage("Draw!");
            return;
          }

          whosTurn++;
          whosTurn = whosTurn % 2;

          display.setMessage("Player " + player[whosTurn] + " you're up!");

        }
    })
}

startGame()
