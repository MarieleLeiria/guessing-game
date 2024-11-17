/*
   a b (a ^ b) ~(a ^ b) !a !b (!a v !b)
   0 0    0        1    1   1     1
   0 1    0        1    1   0     1
   1 0    0        1    0   1     1
   1 1    1        0    0   0     0

  */

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10);
let xAttempt = 1;

btnTry.addEventListener('click', handletryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyDown)

function handletryClick(event) {
    event.preventDefault()
    const input = document.querySelector("#inputValue");
    const inputNumber = Number(input.value)
    const inputLessThenTen = inputNumber <= 10;
    const inputGreaterThenZero = inputNumber > 0;

    if (randomNumber == inputNumber && randomNumber > 0) {
        toggleScreen()
        screen2.querySelector("h2")
            .innerText = `você acertou em ${xAttempt} tentativas`
    } else if (!(inputLessThenTen && inputGreaterThenZero)) {
        alert('Apenas números de 0 - 10')
    } else {
        screen1.querySelector("p").innerText = `O número é ${randomNumber > inputNumber ? 'maior' : 'menor ou igual'} a ${inputNumber}`
    }

    input.value = ""
    xAttempt++
}
function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10);
    xAttempt = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleKeyDown(event) {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}



