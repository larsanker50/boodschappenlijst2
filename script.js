const inputBrood = document.getElementsByName('brood')[0];
const inputBrocolli = document.getElementsByName('brocolli')[0];
const inputKrentenbollen = document.getElementsByName('krentenbollen')[0];
const inputNoten = document.getElementsByName('noten')[0];

const subTotaalBrood = document.getElementsByClassName('productTotalCostA')[0];
const subTotaalBrocolli = document.getElementsByClassName('productTotalCostB')[0];
const subTotaalKrentenbollen = document.getElementsByClassName('productTotalCostC')[0];
const subTotaalNoten = document.getElementsByClassName('productTotalCostD')[0];
const subTotaal = document.getElementsByClassName('totalCost')[0];

inputBrood.addEventListener('change',() => {
    updateValueBrood();
    updateTotalCost();
});

inputBrocolli.addEventListener('change',() => {
    updateValueBrocolli();
    updateTotalCost();
});

inputKrentenbollen.addEventListener('change',() => {
    updateValueKrentenbollen();
    updateTotalCost();
});

inputNoten.addEventListener('change',() => {
    updateValueNoten();
    updateTotalCost();
});


function updateValueBrood() {
    math = (1 * +inputBrood.value);
    subTotaalBrood.innerHTML = math;
    return math;
}

function updateValueBrocolli() {
    math = (0.99 * +inputBrocolli.value);
    subTotaalBrocolli.innerHTML = math;
    return math;
}

function updateValueKrentenbollen() {
    math = (1.20 * +inputKrentenbollen.value);
    subTotaalKrentenbollen.innerHTML = math;
    return math;
}

function updateValueNoten() {
    math = (2.99 * +inputNoten.value);
    subTotaalNoten.innerHTML = math;
    return math;
}

function updateTotalCost() {
    math = (+updateValueBrood() + +updateValueBrocolli() + +updateValueKrentenbollen() + +updateValueNoten());
    subTotaal.innerHTML = math;
    return math;
}