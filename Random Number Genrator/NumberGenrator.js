let buttonroll = document.getElementById("Roll")
let dice1 = document.getElementById("dice1")
let dice2 = document.getElementById("dice2")
let dice3 = document.getElementById("dice3")
const min = 1
const max = 6
let randomnum1
let randomnum2
let randomnum3

buttonroll.onclick = function () {
    randomnum1 = Math.floor(Math.random() * max) + min
    randomnum2 = Math.floor(Math.random() * max) + min
    randomnum3 = Math.floor(Math.random() * max) + min

    dice1.textContent = randomnum1;
    dice2.textContent = randomnum2;
    dice3.textContent = randomnum3;
}