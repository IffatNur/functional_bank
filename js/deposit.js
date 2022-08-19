

document.getElementById('btn-deposit').addEventListener('click', function(){
    // input deposit 
    const currentDeposit = getInputValueById('deposit-amount');

    // previous deposit
    const previousDeposit = getElementValueById('deposit-total')
    
    // total deposit
    const totalDeposit = currentDeposit + previousDeposit;
    const totalDepositAmount = setElementValueById('deposit-total',totalDeposit);

    // total current balance
    const previousBalance = getElementValueById('balance-total');

    const totalBalance = currentDeposit + previousBalance;
    
    const totalBalanceAmount = setElementValueById('balance-total', totalBalance);
})