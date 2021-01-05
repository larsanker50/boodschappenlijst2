const inputBrood = document.getElementsByName('brood')[0];
const inputBrocolli = document.getElementsByName('brocolli')[0];
const inputKrentenbollen = document.getElementsByName('krentenbollen')[0];
const inputNoten = document.getElementsByName('noten')[0];


inputBrood.addEventListener('change', updateValueBrood)
inputBrocolli.addEventListener('change', updateValueBrocolli)
inputKrentenbollen.addEventListener('change', updateValueKrentenbollen)
inputNoten.addEventListener('change', updateValueNoten)



function updateValueBrood(i){
    document.getElementsByClassName('cost')[0].addEventListener //niet af hier beginnen
}

function updateValueBrocolli(i){
    console.log("brocollitest is goed")
}

function updateValueKrentenbollen(i){
    console.log("krentenbollentest is goed")
}

function updateValueNoten(i){
    console.log("notentest is goed")
}