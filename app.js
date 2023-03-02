const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const sym = '!@#$%^&*=-_';

const character = document.querySelector('#character');
const numBox = document.querySelector('#num');
const symBox = document.querySelector('#sym');
const submit = document.querySelector('#submit');
const giftPw = document.querySelector('#giftPw');


submit.addEventListener('click', function(e){
    let letters = char;
    (numBox.checked) ? letters += num : '';
    (symBox.checked) ? letters += sym : '';
    giftPw.value = password(character.value, letters);
});


function password(l, letters){
        let pwd = '';
    for(let i = 0; i < l; i++){
        pwd += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return pwd;
}
