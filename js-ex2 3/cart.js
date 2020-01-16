var cartList = JSON.parse(localStorage.getItem('cart'));
console.log(cartList);
var $ItemCart = document.getElementById('js-card');
var subTotal;
var count, total = 0;
var idcart;
function listCart() {
  for (var i = 0, leng = cartList.length; i < leng; i++) {
    idcart = i + 1;
    count = parseInt(cartList[i].quantity);
    priceCart = parseInt(cartList[i].product.price);
    subTotal = count * priceCart;
    total += subTotal;
    $ItemCart.innerHTML += '<tr id ="jsRow' + idcart + '">' +
      '<td>' + idcart + '</td>' +
      '<td>' + cartList[i].product.titleProduct + '</td>' +
      '<td><img class="img-cart-item" src="images/' + cartList[i].product.imgProduct + '"></td>' +
      '<td class="td-quantity">' + cartList[i].quantity + '</td>' +
      '<td>' + cartList[i].product.price + '<td>' + count * priceCart + '</td></td><td><a onclick = "javascript:deleteCart(' + cartList[i].product.id + ')">' +
      '<img class="img-delete" src="images/download-removebg-preview.png" alt=""></a></td>'
      + '</tr>';
  }
  document.getElementById('js-total').innerHTML = sumTotal();
}
  
function sumTotal(){
  var sum = 0;
  for(var j = 0, length = cartList.length; j < length; j++){
    sum += parseInt(cartList[j].quantity) * parseInt(cartList[j].product.price);
  } 
  return sum;
}

listCart();
function deleteCart(id) {
  for (var k = 0, length = cartList.length; k < length; k++) {
    console.log(cartList[k]);
    if (cartList[k].product.id === id) {
      var ind = cartList.indexOf(cartList[k]);
      console.log('index cart: ' + ind);
      cartList.splice(ind, 1);
      console.log(cartList);
      $ItemCart.innerHTML = [];
      localStorage.setItem('cart', JSON.stringify(cartList));
      alert('deleted');
      listCart();
    }
  }
}
