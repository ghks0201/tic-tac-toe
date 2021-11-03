const gameButton = document.querySelectorAll("button")

const gameBoard = [];
gameBoard.length = 9;

// for (let i = 0; i < gameBoard.length; i++) {
//     gameButton[i].textContent = gameBoard[i];
// }

gameButton.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent.length === 0) {
            button.textContent = "X";
        }
    }, {once: true})
});