const card = document.getElementById('card');
const inputNumberDonation = document.getElementById('inputNumberDonation');
const currencySign = document.getElementById('currencySign');
const moneyInputError = document.getElementById('money-input-error');

const choiceRow = document.getElementById('choice-row');
const buttonAdd100 = document.getElementById('buttonAdd100');
const buttonAdd500 = document.getElementById('buttonAdd500');
const buttonAdd1000 = document.getElementById('buttonAdd1000');

const inputName = document.getElementById('inputName');
const inputComment = document.getElementById('inputComment');

const buttonMono = document.getElementById('button-mono');
const buttonGPay = document.getElementById('button-gpay');
const buttonCard = document.getElementById('button-card');

const payByCard = document.getElementById('pay-card');

const dataButton = document.getElementById('data-button');
const cardNumber = document.getElementById('card-number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc2 = document.getElementById('cvc2');

const accumulatedSum = document.getElementById('accumulated-sum');
const hidePayByCard = document.getElementById('hide-pay-by-card');
const cardInputButton = document.getElementById('card-input-button');
const hideHr = document.getElementById('hideHr');
const showPayByCard = document.getElementById('show-pay-by-card');

const buttonSendDonation = document.getElementById('button-send-donation');

const err1 = document.getElementById('err1');
const err2 = document.getElementById('err2');

const buttonMakeDraw = document.getElementById('makeDraw');
const buttonVidgetStreams = document.getElementById('vidgetStream');

function zeroValue() {
    if (inputNumberDonation.value == "") {
        inputNumberDonation.value = "0"
        inputNumberDonation.style.color = "#a2a2a4"
        currencySign.style.color = "#a2a2a4"
    }
}

function addDonation(value) {
    const number = parseInt(inputNumberDonation.value);
    const finalNumber = number + value;
    inputNumberDonation.value = finalNumber;
    inputNumberDonation.style.color = 'black';
    currencySign.style.color = 'black';
}

buttonAdd100.addEventListener('click', function () {
    addDonation(100);
})

buttonAdd500.addEventListener('click', function () {
    addDonation(500);
})

buttonAdd1000.addEventListener('click', function () {
    addDonation(1000);
})

function showAccumulatedMoney() {
    const donation = parseInt(inputNumberDonation.value);
    const valueString = accumulatedSum.textContent.replace(/[^\d]/g, '');
    const startSum = parseInt(valueString, 10);
    const finalSum = startSum + donation;

    const thousands = Math.floor(finalSum / 1000);
    const hundreds = finalSum % 1000;
    accumulatedSum.textContent = thousands + ' ' + hundreds + ' ₴';
}

function checkNumberDonation() {
    const value = parseInt(inputNumberDonation.value)

    if (value < 10 || value > 29999) {
        moneyInputError.classList.remove('hidden');
        inputNumberDonation.style.color = '#d984a9';
        currencySign.style.color = '#d984a9';
        choiceRow.style.marginTop = '25px';
    } else {
        inputNumberDonation.style.color = '#000';
        currencySign.style.color = '#000';
        moneyInputError.classList.add('hidden');
        choiceRow.style.marginTop = '35px'
    }
}

function clearAllInputs() {
    inputName.value = "";
    inputComment.value = "";
    inputNumberDonation.value = "0";
    cardNumber.value = "";
    month.value = "";
    year.value = "";
    cvc2.value = "";
}

function checkInputs() {
    if (cardNumber.value !== "" && month.value !== "" && year.value !== "" && cvc2.value !== "") {
        buttonSendDonation.disabled = false;
        buttonSendDonation.classList.add('red-background');
    } else {
        buttonSendDonation.disabled = true;
    }
}

function showError() {
    if (month.value == "" || year.value == "" || cvc2.value == "") {
        err2.classList.remove('hidden');
    }
}

function hideError() {
    err2.classList.add('hidden');
}

function showAdvice() {
    if (cardNumber.value == "") {
        err1.classList.remove('hidden');
    }
}

function hideAdvice() {
    err1.classList.add('hidden');
}

buttonMono.addEventListener('click', function () {
    showAccumulatedMoney();
    console.log(`Ім\'я користувача: ${inputName.value}\nКоментар: ${inputComment.value}\nСума донату: ${inputNumberDonation.value}₴`)
    clearAllInputs();
})

buttonGPay.addEventListener('click', function () {
    showAccumulatedMoney();
    console.log(`Ім\'я користувача: ${inputName.value}\nКоментар: ${inputComment.value}\nСума донату: ${inputNumberDonation.value}₴`)
    clearAllInputs();
})

buttonCard.addEventListener('click', function () {
    showAccumulatedMoney();
    console.log(`Ім\'я користувача: ${inputName.value}\nКоментар: ${inputComment.value}\nСума донату: ${inputNumberDonation.value}₴\nНомер картки: ${cardNumber.value}\nТермін дії картки: ${month.value}/${year.value}\nCVC2: ${cvc2.value}`)
    clearAllInputs();
})

cardInputButton.addEventListener('click', function () {
    cardInputButton.style.display = 'none';
    hideHr.style.display = 'none';
    showPayByCard.classList.remove('hidden');
    card.style.height = '920px';
})

function addBlackBorder() {
    dataButton.classList.add('black-border');
}

function hideBlackBorder() {
    dataButton.classList.remove('black-border');
}

buttonMakeDraw.addEventListener('click', function () {
    window.open("https://send.monobank.ua/owner.html?sendId=8dko5aTDTF", "_blank");
});

buttonVidgetStreams.addEventListener('click', function () {
    window.open("https://send.monobank.ua/widget/builder.html?longJarId=3RQUSugUW9RVLoJWgzPU1YtKw9WTCw5d&sendId=8dko5aTDTF", "_blank");
});

/* LOCAL STORAGE */
// function showAccumulatedMoney() {
//     const donation = parseInt(inputNumberDonation.value);
//     const valueString = accumulatedSum.textContent.replace(/[^\d\s₴]/g, ''); // Додавання пробілу та символу валюти
//     const startSum = parseInt(valueString.replace(/\s₴/g, ''), 10); // Видалення пробілу та символу валюти перед перетворенням на число
//     const finalSum = startSum + donation;

//     const thousands = Math.floor(finalSum / 1000);
//     const hundreds = finalSum % 1000;
//     accumulatedSum.textContent = thousands.toLocaleString() + ' ' + hundreds + ' ₴'; // Використання методу toLocaleString для форматування тисяч

//     localStorageData(thousands.toLocaleString() + ' ' + hundreds + ' ₴'); // Збереження в localStorage
// }

// document.addEventListener('DOMContentLoaded', function () {
//     let accumulatedSumValue = localStorage.getItem('accumulatedSumValue');
//     if (accumulatedSumValue !== null) {
//         accumulatedSum.textContent = accumulatedSumValue;
//     }
// });

// function localStorageData(newValue) {
//     localStorage.setItem('accumulatedSumValue', newValue); // Збереження значення в localStorage
// }