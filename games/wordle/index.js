const words = ["hello", "train", "model", "happy", "smile", "stain", "press", "knife", "utter", "shout", "dance"]

const secret_word = words[Math.floor(Math.random() * words.length)]

const debug_word = document.getElementById("debug-word")
const debug_coord = document.getElementById("debug-coord")
const debug_letter = document.getElementById("debug-letter")

debug_word.textContent = secret_word

let guessLetters = []

let guessGrid = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
]

function getCellByCoord(i, j) {
    return document.getElementById((i+1).toString() + (j+1).toString())
}

function populateGuessGrid() {
    for (let i=0; i < guessLetters.length; i++) {
        const row = Math.floor(i / guessGrid[0].length)
        const col = (i % guessGrid[0].length)
        guessGrid[row][col] = guessLetters[i]
    }
}

function renderBoard() {
    populateGuessGrid()
    for (let i=0; i < guessGrid.length; i++) {
        for (let j=0; j < guessGrid[0].length; j++) {
            const guessVal = guessGrid[i][j]
            const cell = getCellByCoord(i, j)
            cell.textContent = guessVal
        }
    }
}

addEventListener("keydown", keyStroke)

function keyStroke(k) {
    const key = k.key
    if (/[a-z]/.test(key)) {
        guessLetters.push(key)
    }
    renderBoard()
}