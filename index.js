let firstCard = 5
let secondCard = 5

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw or stick?")
} else if (sum === 21) {
    console.log("Nice! You've got Blackjack!")
} else {
    console.log("Unlucky! You're out the game")
}