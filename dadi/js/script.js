// generare due numeri randomici 
let userNumber;
let cpuNumber;
//creazione div element
const newDiv = document.createElement('div')
console.log(newDiv)
//stampare numeri al click del bottone
const generatorButton = document.querySelector('#button');
generatorButton.addEventListener('click', function(){
    userNumber = Math.floor(Math.random() * 7);
    cpuNumber = Math.floor(Math.random() * 7);
    console.log(userNumber);
    console.log(cpuNumber);
    newDiv.innerHTML = ('il tuo numero è ' + userNumber + ' il numero della cpu è ' + cpuNumber);
    document.querySelector('#container').appendChild(newDiv);
})



//stabilire quali dei numeri è più grande e stampare risposta