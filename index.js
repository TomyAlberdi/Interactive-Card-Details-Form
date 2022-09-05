const form = document.querySelector('form')
const submitButton = document.querySelector('#submit')
// INPUTS
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
    form.reset()
})
