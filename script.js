let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO === true) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

//check winner function
checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
//show winner function
showWinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
//Disabled Function
disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
//reset function
resetGame = () => {
  turnO = false;
  enableBoxes();
  msgContainer.classList.add("hide");
};
//Enable function
enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
//call btn
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
