function getInputValueById(inputId){
    const inputDeposit = document.getElementById(inputId);
    const inputDepositAmount = parseFloat(inputDeposit.value);
    inputDeposit.value = '';
    return inputDepositAmount;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementAmount = parseFloat(element.innerText);
    return elementAmount;
}

function setElementValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}