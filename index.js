let firstCard = 5
let secondCard = 17
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "Do you want to draw or stick?"
} else if (sum === 21) {
    message = "Nice! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "Unlucky! You're out the game"
    isAlive = false
}

console.log(message)