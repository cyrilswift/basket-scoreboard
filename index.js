let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home")
let guestScoreEl = document.getElementById("guest")

function addOneForHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoForHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeForHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneForGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoForGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeForGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}