document.getElementById('btn-withdraw').addEventListener('click', function(){
    // current withdraw input 
    const currentWithdraw = getInputValueById('withdraw-amount');
    
    // new withdraw 
    const previousWithdraw = getElementValueById('withdraw-total');
    
    //total withdraw 
    const totalWithdraw = currentWithdraw + previousWithdraw;
     
    const totalWithdrawAmount = setElementValueById('withdraw-total', totalWithdraw);

    //current balance after withdraw
    const previousBalance = getElementValueById('balance-total');

    const currentBalance = previousBalance - currentWithdraw;
     
    const currentBalanceAmount = setElementValueById('balance-total', currentBalance);
})