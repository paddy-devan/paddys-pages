let scoreHome = 0
let scoreGuest = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")

homeEl.textContent = scoreHome
guestEl.textContent = scoreGuest
homeTitle.style.color = "white"
guestTitle.style.color = "white"

function updateScores() {
    homeEl.textContent = scoreHome
    guestEl.textContent = scoreGuest
}

function updateColours() {
    if (scoreHome > scoreGuest) {
        homeTitle.style.color = "green"
        guestTitle.style.color = "white"
    }
    else if (scoreGuest > scoreHome) {
        guestTitle.style.color = "green"
        homeTitle.style.color = "white"
    }
    else {
        guestTitle.style.color = homeTitle.style.color = "white"
    }
}

function incrementScore(incrementBy, pointsTo) {
    if (pointsTo == "home") {
        scoreHome += incrementBy
    }
    if (pointsTo == "guest") {
        scoreGuest += incrementBy
    }
    updateScores()
    updateColours()
}

function newGame() {
    scoreHome = scoreGuest = 0
    updateScores()
    updateColours()
}