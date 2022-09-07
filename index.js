const form = document.querySelector('form')
let contDiv = document.querySelector('#completed')
// INPUTS
const submitButton = document.querySelector('#submit')
const inputName = document.querySelector('#name')
const inputNumber = document.querySelector('#number')
const inputMM = document.querySelector('#month')
const inputYY = document.querySelector('#year')
const inputCvc = document.querySelector('#cvc')
// OUTPUTS
const outputNumber = document.querySelector('#outNumber')
const outputName = document.querySelector('#outName')
const outputDate = document.querySelector('#outDate')
const outputCvc = document.querySelector('#outCvc')

form.addEventListener('submit', (e) => {

    e.preventDefault()
    outputName.innerHTML = inputName.value.toUpperCase()
    outputNumber.innerHTML = inputNumber.value.toString().match(/.{4}/g).join(' ')
    outputDate.innerHTML = inputMM.value + "/" + inputYY.value
    outputCvc.innerHTML = inputCvc.value

    completed()
})

let completed = () => {

    form.style.display = "none";

    let temp = `
        <img src="./images/icon-complete.svg" alt="Completed icon">
        <h1>T H A N K Y O U !</h1>
        <h3>We've added your card details</h3>
        <button class="continue-button" onclick="renderContinue()">Continue</button>
    `
    contDiv.innerHTML = temp

}

let renderContinue = () => {

    contDiv.style.display = "none"
    form.reset()
    form.style.display = "flex"

}