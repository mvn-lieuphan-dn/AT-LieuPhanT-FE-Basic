var dataCart = JSON.parse(localStorage.getItem('cart'));
console.log(dataCart);
var $itemCart = document.getElementById('js-card');
var subTotal;
var count;
var idCart;
function listCart() {
  for (var i = 0; i < dataCart.length; i++) {
    idCart = i + 1;
    count = parseInt(dataCart[i].quantity);
    priceCart = parseInt(dataCart[i].product.price);
    subTotal = count * priceCart;
    $itemCart.innerHTML += '<tr id ="jsRow' + idCart + '">' +
      '<td>' + idCart + '</td>' +
      '<td>' +  dataCart[i].product.titleProduct + '</td>' +
      '<td><img class="img-cart-item" src="images/' +  dataCart[i].product.imgProduct + '"></td>' +
      '<td class="td-quantity">' +  dataCart[i].quantity + '</td>' +
      '<td> &#36;' +  dataCart[i].product.price + '<td>	&#36;' + count * priceCart + 
      '</td></td><td><button class="js-btn-delete" id = "del-' +  dataCart[i].product.id+'">' +
      //'</td></td><td><a onclick = "javascript:deleteCart(' +  dataCart[i].product.id + ')">' +
      '<img class="img-delete" src="images/download-removebg-preview.png" alt=""></button></td>' +
      '</tr>';
  }
  document.getElementById('js-total').innerHTML = '&#36;' + sumTotal();
}

function sumTotal() {
  var sum = 0;
  for(var j = 0; j < dataCart.length; j++) {
    sum += parseInt(dataCart[j].quantity) * parseInt(dataCart[j].product.price);
  }
  return sum;
}
listCart();

function deleteCart(event) {
  var idDel = event.currentTarget.id;
  var message = confirm('Do you want delete this product?');
  if (message === true) {
    for (var k = 0; k < dataCart.length; k++) {
      console.log(dataCart[k].product.id);
      if ('del-' +  dataCart[k].product.id === idDel) {
        dataCart.splice(k, 1);
        $itemCart.innerHTML = [];
        localStorage.setItem('cart', JSON.stringify(dataCart));
        listCart();
        clickBtnDel();
        return true;
      }
    }
  }
  else return false;
}

function clickBtnDel() {
  var del = document.getElementsByClassName('js-btn-delete');
  for(var l = 0; l < del.length; l++) {
  del[l].addEventListener('click', deleteCart, false);
  }
}
clickBtnDel();
