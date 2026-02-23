const words = ["hello", "train", "model", "happy", "smile", "stain", "press", "knife", "utter", "shout", "dance"]

const secret_word = words[Math.floor(Math.random() * words.length)]

const debug_word = document.getElementById("debug-word")
const debug_coord = document.getElementById("debug-coord")
const debug_letter = document.getElementById("debug-letter")

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
    const rowGuess = validateWord(guessGrid[currentRow].join(""), secret_word)
    for (let i=0; i < gridWidth; i++) {
        const cell = getCellByCoord(currentRow, i)
        cell.style.backgroundColor = (rowGuess[i] === 1) ? "limegreen" : (rowGuess[i] === -1) ? "crimson" : "orange"
        cell.style.color = "white"
    }
    currentRow += 1
}

addEventListener("keydown", keyStroke)

function keyStroke(k) {
    const key = k.key
    if (/[a-z]/.test(key)) {
        guessGrid[currentRow].push(key)
        if (guessGrid[currentRow].length === gridWidth) {
            
            rowEvaluate()
        }
    }
    renderBoard()
}