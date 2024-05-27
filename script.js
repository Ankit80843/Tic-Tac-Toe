
let boxe = document.querySelectorAll(".box");
let res_btn = document.querySelector('#reset');
let new_btn = document.querySelector('#newGame');
let turnO = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxe.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('button was clicked');
        if (turnO) {
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



let reset = () => {
    turnO = true;
    enableBox();
};


let disableBox = () => {
    for (let box of boxe) {
        box.disabled = true;
    }
};


let enableBox = () => {
    for (let box of boxe) {
        box.disabled = false;
        box.innerText = "";
        document.querySelector('#mess-box').innerText = "";
    }
};


const checkWinner = () => {
    for (let pattern of winPattern) {
        let p1 = boxe[pattern[0]].innerText;
        let p2 = boxe[pattern[1]].innerText;
        let p3 = boxe[pattern[2]].innerText;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                document.querySelector('#mess-box').innerText = `Winner is ${p1}`;
                disableBox();
                return; 
            }
        }
    }
};


res_btn.addEventListener("click", reset);
new_btn.addEventListener("click", () => {
    reset();
    document.querySelector('#mess-box').innerText = "";
});


enableBox();

