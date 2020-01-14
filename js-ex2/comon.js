localStorage.setItem('product', JSON.stringify(products));
var getObjectProduct = JSON.parse(localStorage.getItem('product'));
console.log(getObjectProduct);
