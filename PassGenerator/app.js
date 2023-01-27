const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const sym = '!@#$%^&*=-_';

let character = document.querySelector('#character');
let numBox = document.querySelector('#num');
let symBox = document.querySelector('#sym');
let submit = document.querySelector('#submit');
let giftPw = document.querySelector('#giftPw');


submit.addEventListener('click', (e) => {
    let letters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    giftPw.value = password(character.value, letters);
});

function password(l, letters){
        let pwd = '';
    for(let i = 0; i < l; i++){
        pwd += letters.charAt(math.floor(math.random() * letters.length));
    }
    return pwd;
}