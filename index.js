
const botao = document.getElementById('botao');
const age = document.getElementById('age');
const botaoLimpar = document.getElementById('botaoLimpar');

function convertToDogYears() {
    let earlyYears;
    let laterYears;
    let myAgeInDogYears;
    const humanAge = age.value;
    const result = document.getElementById('result');
    if (humanAge >= 2) {
        earlyYears = 2;
        myAgeInDogYears = earlyYears * 10.5;
        laterYears = (humanAge - earlyYears) * 4;
        myAgeInDogYears += laterYears;
    } else if (humanAge < 2) {
        myAgeInDogYears = humanAge * 10.5;
    }
    result.innerHTML = "Your age in dog years is " + myAgeInDogYears;
};

botao.addEventListener('click', convertToDogYears);
age.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
        convertToDogYears();
    }
});
botaoLimpar.addEventListener('click', function() {
    age.value = '';
});