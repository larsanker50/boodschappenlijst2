const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
const totalCost = document.getElementById('totalCost');

productQuantity.innerHTML.addEventListner('change',() => { //deze werkt nog niet
    update(); //deze werkt nog niet
});

function loop() {
    for (i = 0; i < 4; i++) {
    
    
        productPrice[i].innerHTML;
    }

};

function update() {
    console.log('test')
};


//for (i = 0; i < 4; i++) {
//    console.log(productPrice[i].innerHTML);
//};