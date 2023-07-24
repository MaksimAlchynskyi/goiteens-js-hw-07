const select = document.querySelector('[name="select"]')
const optionOne = document.querySelector('[value="value1"]')
const optionTwo = document.querySelector('[value="value2"]')
const optionThree = document.querySelector('[value="value3"]')
const text = document.querySelector('p')
select.addEventListener("change", () => {
    if (select.value === optionOne.value) {
        text.textContent = "Ви обрали чай"
    }
    else if (select.value === optionTwo.value) {
        text.textContent = "Ви обрали каву"
    }
    else if (select.value === optionThree.value) {
        text.textContent = "Ви обрали сік"
    }
})

// asd

const input = document.querySelector('input')
const firstButton = document.querySelector('.button')
const pText = document.querySelector('.text')
firstButton.addEventListener("click", () => {
    switch (input.value) {
        case "Sunday":
            pText.textContent = "It's a day off"
            break;
        case "Monday":
            pText.textContent = "It's a work day"
            break;
        case "Tuesday":
            pText.textContent = "It's a work day"
            break;
        case "Wednesday":
            pText.textContent = "It's a work day"
            break;
        case "Thursday":
            pText.textContent = "It's a work day"
            break;
        case "Friday":
            pText.textContent = "It's a work day"
            break;
        case "Suturday":
            pText.textContent = "It's a day off"
            break;
        default:
            pText.textContent = "It's not a day of the week"
            break;
    }
})

// qwe

const secondButton = document.querySelector('.second-button')
const secondInput = document.querySelector('[name="inputn"]')
const idText = document.querySelector('#text')
secondButton.addEventListener("click", () => {
    switch (secondInput.value) {
        case "12":
        case "1":
        case "2":
            idText.textContent = "it's a winter month"
            break;
        case "3":
        case "4":
        case "5":
            idText.textContent = "it's a spring month"
            break;
        case "6":
        case "7":
        case "8":
            idText.textContent = "it's a summer month"
            break;
        case "9":
        case "10":
        case "11":
            idText.textContent = "it's autumn month"
            break;
        default:
            idText.textContent = "This number does not belong to the month"
            break;
    }
})
// zxc
const thirdButton = document.querySelector('.third-button')
const thirdInput = document.querySelector('#third-button')
const titleTwo = document.querySelector('h4')
thirdButton.addEventListener("click", () => {
    switch (thirdInput.value) {
        case "1":
            titleTwo.textContent = "31"
            break;
        case "2":
            titleTwo.textContent = "28 or 29"
            break;
        case "3":
            titleTwo.textContent = "31"
            break;
        case "4":
            titleTwo.textContent = "30"
            break;
        case "5":
            titleTwo.textContent = "31"
            break;
        case "6":
            titleTwo.textContent = "30"
            break;
        case "7":
            titleTwo.textContent = "31"
            break;
        case "8":
            titleTwo.textContent = "31"
            break;
        case "9":
            titleTwo.textContent = "30"
            break;
        case "10":
            titleTwo.textContent = "31"
            break;
        case "11":
            titleTwo.textContent = "30"
            break;
        case "12":
            titleTwo.textContent = "31"
            break;

        default:
            titleTwo.textContent = "it is not the month"
            break;
    }
})

// qwe

const fourthButton = document.querySelector('.fourth-button')
const fourthInput = document.querySelector('.fourth-input')
const titleThree = document.querySelector('h3')
fourthButton.addEventListener("click", () => {
    switch (fourthInput.value) {
        case "red":
            titleThree.textContent = "stop"
            break;
        case "yellow":
            titleThree.textContent = "wait"
            break;
        case "green":
            titleThree.textContent = "go"
            break;
        default:
            titleThree.textContent = "This is not a suggested color"
            break;
    }
})
// asd
const fifthButton = document.querySelector('.fifth-button')
const fifthInput = document.querySelector('#fifth-input')
const sixthInput = document.querySelector('#sixth-input')
const titleFour = document.querySelector('h2')
const secondSelect = document.querySelector('#second-select')
const optionFour = document.querySelector('[value="value4"]')
const optionFive = document.querySelector('[value="value5"]')
const optionSix = document.querySelector('[value="value6"]')
const optionSeven = document.querySelector('[value="value7"]')
fifthButton.addEventListener("click", () => {
    switch (secondSelect.value) {
        case optionFour.value:
            titleFour.textContent = Number(fifthInput.value) + Number(sixthInput.value)
            break;
        case optionFive.value:
            titleFour.textContent = Number(fifthInput.value) - Number(sixthInput.value)
            break;
        case optionSix.value:
            titleFour.textContent = Number(fifthInput.value) * Number(sixthInput.value)
            break;
        case optionSeven.value:
            titleFour.textContent = Number(fifthInput.value) / Number(sixthInput.value)
            break;
    }
})