let firstCard = 5
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("outcome-el")

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw or stick?"
    } else if (sum === 21) {
        message = "Nice! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "Unlucky! You're out the game"
        isAlive = false
    }
    messageEl.textContent = message
}