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
const keyboardRow2 = document.getElementById("keyboard-row2")
const keyboardRow3 = document.getElementById("keyboard-row3")

for (let i=0; i < alphabet1.length; i++) {
    const char = alphabet1[i]
    const button = document.createElement("button")
    button.id = char
    button.textContent = char
    button.addEventListener("click", function() {
        enterKey(char, -1)
    })
    keyboardRow1.appendChild(button)
}
for (let i=0; i < alphabet2.length; i++) {
    const char = alphabet2[i]
        const button = document.createElement("button")
    button.id = char
    button.textContent = char
    button.addEventListener("click", function() {
        enterKey(char, -1)
    })
    keyboardRow2.appendChild(button)
}
for (let i=0; i < alphabet3.length; i++) {
    const char = alphabet3[i]
        const button = document.createElement("button")
    button.id = char
    button.textContent = char
    button.addEventListener("click", function() {
        enterKey(char, -1)
    })
    keyboardRow3.appendChild(button)
}

// key listening
addEventListener("keydown", function(k) {
    const key = k.key.toUpperCase()
    const keyCode = k.keyCode
    enterKey(key, keyCode)
})

function enterKey (key, keyCode) {
    console.log(`key entered: ${key}`)
    if (keyCode == 8 || keyCode == 46 || key == "⌫") {
        guessGrid[currentRow].pop()
    } else if (/[A-Z]/.test(key)) {
        guessGrid[currentRow].push(key)
        if (guessGrid[currentRow].length === gridWidth) {
            rowEvaluate()
        }
    }
    renderBoard()
}