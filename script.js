const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByName("productQuantity");
const productTotalCost = document.getElementsByClassName('productTotalCost');
const totalCost = document.getElementById('totalCost');

for(let i = 0 ; i <productQuantity.length; i++) {
    productQuantity[i].addEventListener("change", function() {
        updateValue(i);
        updateTotalCost();
    });
}

function updateValue(i) {
    math = (+productQuantity[i].value * +productPrice[i].innerHTML);
    productTotalCost[i].innerHTML = math;
    return math;
}

function updateTotalCost() {
    totalCost.innerHTML = 0
    for (let i = 0 ; i <productQuantity.length; i++) {
        totalCost.innerHTML = updateValue(i) + +totalCost.innerHTML;
        
    }
}