"use strict";
const gameField = document.querySelector(".game-field");
const gameScore = document.querySelector(".game-score");
const start = document.querySelector(".start");
const restart = document.createElement("button");
const rows = 4;
const columns = 4;
let board;
let score = 0;
let isBordChanged = false;
window.onload = setGame();
document.addEventListener("click", (e)=>{
    if (e.target === start) {
        setTwo();
        setTwo();
        document.querySelector(".message-start").classList.add("hidden");
        document.querySelector(".button").classList.add("hidden");
    }
    if (e.target === restart) {
        const deleteFields = document.querySelectorAll(".field-cell");
        deleteFields.forEach((el)=>el.remove());
        document.querySelector(".message-lose").classList.add("hidden");
        gameScore.textContent = 0;
        setGame();
        setTwo();
        setTwo();
    }
});
function setGame() {
    board = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ];
    for(let r = 0; r < rows; r++)for(let c = 0; c < columns; c++){
        const num = board[r][c];
        let title = document.createElement("div");
        title.className = "field-cell";
        title.id = r.toString() + "-" + c.toString();
        title = updateClass(title, num);
        gameField.append(title);
    }
}
function setTwo() {
    if (!hasEmptyTile()) return;
    let found = false;
    while(!found){
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * columns);
        if (board[r][c] === 0) {
            const chooseValue = Math.random() < 0.1 ? 4 : 2;
            board[r][c] = chooseValue;
            const title = document.getElementById(r.toString() + "-" + c.toString());
            title.innerText = chooseValue;
            title.classList.value += ` field-cell--${chooseValue}`;
            found = true;
        }
    }
}
function hasEmptyTile() {
    for(let r = 0; r < rows; r++)for(let c = 0; c < columns; c++){
        if (board[r][c] === 0) return true;
    }
    return false;
}
function hasSimiliarTile() {
    for(let r = 0; r < rows; r++)for(let c = 0; c < columns - 1; c++){
        if (board[r][c] === board[r][c + 1]) return true;
    }
    for(let c = 0; c < columns; c++)for(let r = 0; r < rows - 1; r++){
        if (board[r][c] === board[r + 1][c]) return true;
    }
    return false;
}
function updateClass(title, num, e) {
    title.innerText = "";
    title.className = "";
    title.className = "field-cell";
    title.classList.value += ` field-cell--${num}`;
    if (num > 0) title.innerText = num;
    if (num === 2048) {
        const win = document.querySelector(".message-win");
        win.classList.remove("hidden");
    } else if (!hasEmptyTile() && !hasSimiliarTile()) {
        const lose = document.querySelector(".message-lose");
        lose.classList.remove("hidden");
    }
    return title;
}
const isPressed = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false
};
function isFirstPressed(e) {
    const key = e.key;
    if (Object.values(isPressed).some((obj)=>obj === true)) return;
    if (isPressed.hasOwnProperty(key)) {
        document.querySelector(".controls").append(restart);
        restart.innerText = "restart";
        restart.classList = "button restart";
        isPressed[key] = true;
    }
}
document.addEventListener("keydown", (e)=>{
    isFirstPressed(e);
    isBordChanged = false;
    if (e.code === "ArrowLeft") slideLeft();
    else if (e.code === "ArrowRight") slideRight();
    else if (e.code === "ArrowUp") slideUp();
    else if (e.code === "ArrowDown") slideDown();
    if (isBordChanged) setTwo();
    gameScore.textContent = score;
});
function deleteZero(row) {
    return row.filter((num)=>num !== 0);
}
function arraysNotEqual(a, b) {
    if (a.length !== b.length) return true;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return true;
    }
    return false;
}
function slide(row) {
    const originalRow = [
        ...row
    ];
    let changeRow = row;
    changeRow = deleteZero(changeRow);
    for(let r = 0; r < changeRow.length - 1; r++)if (changeRow[r] === changeRow[r + 1]) {
        changeRow[r] *= 2;
        changeRow[r + 1] = 0;
        score += changeRow[r];
    }
    changeRow = deleteZero(changeRow);
    while(changeRow.length < columns)changeRow.push(0);
    if (arraysNotEqual(originalRow, changeRow)) isBordChanged = true;
    return changeRow;
}
function slideLeft() {
    for(let r = 0; r < rows; r++){
        let row = board[r];
        row = slide(row);
        board[r] = row;
        for(let c = 0; c < columns; c++){
            const title = document.getElementById(r.toString() + "-" + c.toString());
            const num = board[r][c];
            updateClass(title, num);
        }
    }
}
function slideRight() {
    for(let r = 0; r < rows; r++){
        let row = board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r] = row;
        for(let c = 0; c < columns; c++){
            const title = document.getElementById(r.toString() + "-" + c.toString());
            const num = board[r][c];
            updateClass(title, num);
        }
    }
}
function slideUp() {
    for(let c = 0; c < columns; c++){
        let row = [
            board[0][c],
            board[1][c],
            board[2][c],
            board[3][c]
        ];
        row = slide(row);
        for(let r = 0; r < rows; r++){
            board[r][c] = row[r];
            const title = document.getElementById(r.toString() + "-" + c.toString());
            const num = board[r][c];
            updateClass(title, num);
        }
    }
}
function slideDown() {
    for(let c = 0; c < columns; c++){
        let row = [
            board[0][c],
            board[1][c],
            board[2][c],
            board[3][c]
        ];
        row.reverse();
        row = slide(row);
        row.reverse();
        for(let r = 0; r < rows; r++){
            const title = document.getElementById(r.toString() + "-" + c.toString());
            board[r][c] = row[r];
            const num = board[r][c];
            updateClass(title, num);
        }
    }
}

//# sourceMappingURL=index.f75de5e1.js.map
