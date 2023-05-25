function showPass() {
    const btns = document.querySelectorAll('.password__btn');
    const inputs = document.querySelectorAll('.password__input');

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
    
            if (inputs[i].getAttribute('type') === 'password') {
                inputs[i].setAttribute('type', 'text');
            } else {
                inputs[i].setAttribute('type', 'password');
            };
        });       
    });

}

showPass();
