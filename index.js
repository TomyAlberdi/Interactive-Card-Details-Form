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

// Credit card number format & validation
function formats(ele,e){
    if(ele.value.length<19){
        ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        return true;
    }else{
        return false;
    }
}
function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    return false;
}

form.addEventListener('submit', (e) => {

    e.preventDefault()

    formValidation()

})

let formValidation = () => {

    let errors = document.querySelectorAll('.errorMsg')
    errors.forEach(e => {
        e.remove()
    });

    let numberDiv = document.querySelector('.numberDiv')

    let errorCard = (text) => {
        let card = document.createElement('span')
        card.classList.add('errorMsg')
        card.innerHTML = text
        return card
    }
    
    let pass = true

    let nameValidation = () => {
        let val = inputName.value
        let result = /^[a-zA-Z ]+$/.test(val);
        if (!result) {
            let error = errorCard("Wrong format.")
            inputName.after(error)
            pass = false
        }
    }
    nameValidation()

    let mmValidation = () => {
        let val = inputMM.value
        let result = /^(0[1-9]|1[0-2])$/.test(val);
        if (!result) {
            let error = errorCard("Invalid month.")
            numberDiv.after(error)
            pass = false
        }
    }
    mmValidation()

    let yyValidation = () => {
        let val = inputYY.value
        let result = /^[2-9][2-9]$/.test(val);
        if (!result) {
            let error = errorCard("Invalid year.")
            numberDiv.after(error)
            pass = false
        }
    }
    yyValidation()

    let cvcValidation = () => {
        let val = inputCvc.value
        let result = /^\d\d\d$/.test(val);
        if (!result) {
            let error = errorCard("Invalid CVC.")
            numberDiv.after(error)
            pass = false
        }
    }
    cvcValidation()

    if (pass) { valid() }

}

let valid = () => {

    outputName.innerHTML = inputName.value.toUpperCase()
    outputNumber.innerHTML = inputNumber.value
    outputDate.innerHTML = inputMM.value + "/" + inputYY.value
    outputCvc.innerHTML = inputCvc.value

    completed()
}

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