const alphabet1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "⌫"]
const alphabet2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const alphabet3 = ["Z", "X", "C", "V", "B", "N", "M"]

import { WORDS } from "./words.js";
const secret_word = WORDS[Math.floor(Math.random() * WORDS.length)];

let currentRow = 0

const gridWidth = 5

let guessGrid = [
    [],
    [],
    [],
    [],
    [],
    []
]

function getCellByCoord(i, j) {
    return document.getElementById((i+1).toString() + (j+1).toString())
}

function renderBoard() {
    for (let i=0; i < guessGrid.length; i++) {
        for (let j=0; j < gridWidth; j++) {
            const guessVal = guessGrid[i][j]
            const cell = getCellByCoord(i, j)
            cell.textContent = guessVal
        }
    }
}

function validateWord(guess, target) {
    let output = []
    guess = guess.toUpperCase()
    target = target.toUpperCase()
    for (let i=0; i < guess.length; i++) {
        if (target.charAt(i) === guess.charAt(i)) {
            output.push(1)
        } else if (target.includes(guess.charAt(i))) {
            output.push(0)
        } else (
            output.push(-1)
        )
    }
    return output
}

function rowEvaluate() {
    if (WORDS.includes(guessGrid[currentRow].join(""))) {
        const rowGuess = validateWord(guessGrid[currentRow].join(""), secret_word)
        for (let i=0; i < gridWidth; i++) {
            const cell = getCellByCoord(currentRow, i)
            cell.style.backgroundColor = (rowGuess[i] === 1) ? "limegreen" : (rowGuess[i] === -1) ? "crimson" : "orange"
            cell.style.color = "white"

            const guessLetter = guessGrid[currentRow][i]
            const keyboardKey = document.getElementById(guessLetter)
            keyboardKey.style.backgroundColor = (rowGuess[i] === 1) ? "limegreen" : (rowGuess[i] === -1) ? "crimson" : "orange"
            keyboardKey.style.color = "white"
        }
        currentRow += 1
    }
}

// create on screen keyboard
const keyboardRow1 = document.getElementById("keyboard-row1")
keyboardRow1.innerHTML = ""
const keyboardRow2 = document.getElementById("keyboard-row2")
keyboardRow2.innerHTML = ""
const keyboardRow3 = document.getElementById("keyboard-row3")
keyboardRow3.innerHTML = ""

for (let i=0; i < alphabet1.length; i++) {
    keyboardRow1.innerHTML += `<button id="${alphabet1[i]}">${alphabet1[i]}</button>`
}
for (let i=0; i < alphabet2.length; i++) {
    keyboardRow2.innerHTML += `<button id="${alphabet2[i]}">${alphabet2[i]}</button>`
}
for (let i=0; i < alphabet3.length; i++) {
    keyboardRow3.innerHTML += `<button id="${alphabet3[i]}">${alphabet3[i]}</button>`
}

// key listening
addEventListener("keydown", keyStroke)

function keyStroke(k) {
    const key = k.key.toUpperCase()
    const keyCode = k.keyCode
    if (keyCode == 8 || keyCode == 46) {
        console.log('is delete key')
        guessGrid[currentRow].pop()
        console.log(guessGrid[currentRow])
    } else if (/[A-Z]/.test(key)) {
        guessGrid[currentRow].push(key)
        if (guessGrid[currentRow].length === gridWidth) {
            rowEvaluate()
        }
    }
    renderBoard()
}

function enterKey(k) {
    if (keyCode == 8 || keyCode == 46) {
        console.log('is delete key')
        guessGrid[currentRow].pop()
        console.log(guessGrid[currentRow])
    } else if (/[A-Z]/.test(key)) {
        guessGrid[currentRow].push(key)
        if (guessGrid[currentRow].length === gridWidth) {
            rowEvaluate()
        }
    }
    renderBoard()
}