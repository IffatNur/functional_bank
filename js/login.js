document.getElementById('login-button').addEventListener('click', function(){
    const emailAdd = document.getElementById('email');
    const emailVerification = emailAdd.value;

    const password = document.getElementById('password');
    const passwordVerification = password.value;

    if(emailVerification === 'iffat@gmail.com' && passwordVerification === 'iffat'){
        window.location.href = 'transaction.html';
    }
})