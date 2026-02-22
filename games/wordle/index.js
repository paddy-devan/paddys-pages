const words = ["hello", "train", "model", "happy", "smile", "stain", "press", "knife", "utter", "shout", "dance"]

const secret_word = words[Math.floor(Math.random() * words.length)]

const debug_word = document.getElementById("debug-word")
const debug_coord = document.getElementById("debug-coord")
const debug_letter = document.getElementById("debug-letter")

debug_word.textContent = secret_word

let active_row = 1

let guesses = [
    ["A", null, "J", null, null],
    ["H", "E", "L", "L", "O"],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
]

function renderBoard() {
    for (let i=0; i < guesses.length; i++) {
        for (let j=0; j < guesses[0].length; j++) {
            const guessVal = guesses[i][j]
            const cell = document.getElementById((i+1).toString() + (j+1).toString())
            cell.textContent = guessVal
        }
    }
}

renderBoard()