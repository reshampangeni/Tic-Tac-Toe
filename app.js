let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let totalClicks = 0;
//playerX , playerO
let turnO = true;

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const resetGame = () => {
    turnO = true;
    totalClicks = 0;
    enableBoxes();
    msgContainer.classList.add("hidden");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O'
            turnO = false;
            box.style.color = "green";
        } else {
            box.innerText = "X"
            turnO = true;
            box.style.color = "red";
        }
        box.disabled = true;

        confWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `The winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disableBoxes();
}

const confWinner = () => {
    for (let pattern of winPatterns) {
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if (post1Val === post2Val && post2Val === post3Val) {
                showWinner(post1Val);
            }
        }
    }
    totalClicks++;
    if (totalClicks === 9) {
        msg.innerText = "It's a draw";
        msgContainer.classList.remove("hidden");
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);