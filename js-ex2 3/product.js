var $box = document.getElementById('js-product-list')

var $tempLi, $tempImg, $tempContent, $tempH4, $tempButton, $tempSpan1, $tempSpan2;
function listproduct(){
  for (var i = 0; i < products.length; i++) {
    $tempLi = document.createElement('li');
    $tempLi.setAttribute('class', 'product-item');
  
    $tempImg = document.createElement('img');
    $tempImg.setAttribute('src', './images/' + products[i].imgProduct);
    $tempImg.setAttribute('class', 'product-card-img');
    $tempLi.appendChild($tempImg);
  
    $tempDiv = document.createElement('div');
    $tempDiv.setAttribute('class', 'product-card-content');
  
    $tempH4 = document.createElement('h4');
    $tempContent = document.createTextNode(products[i].titleProduct);
    $tempH4.setAttribute('class', 'product-card-title');
    $tempH4.appendChild($tempContent);
    $tempDiv.appendChild($tempH4);
  
    $tempSpan1 = document.createElement('span');
    $tempContent = document.createTextNode(products[i].descriptionProduct);
    $tempSpan1.setAttribute('class', 'product-card-description');
    $tempSpan1.appendChild($tempContent);
    $tempDiv.appendChild($tempSpan1);
  
    $tempBr = document.createElement('br');
    $tempDiv.appendChild($tempBr);
    $tempSpan2 = document.createElement('span');
    $tempContent = document.createTextNode('Price: $' + products[i].price);
    $tempSpan2.setAttribute('class', 'product-card-price');
    $tempSpan2.appendChild($tempContent);
    $tempDiv.appendChild($tempSpan2);
  
    $tempButton = document.createElement('button');
    $tempButton.setAttribute('id', products[i].id);
    // $tempButton = addEventListener('click', addCard, false);
    $tempButton.setAttribute('class', 'btn-add-to-cart');
    //$tempButton.setAttribute('onclick', 'addCard(this.id)');
    $tempButton.addEventListener('click', addCard, false);
    $tempContent = document.createTextNode('ADD TO CART');
    $tempButton.appendChild($tempContent);
  
    $tempDiv.appendChild($tempButton);
    $tempLi.appendChild($tempDiv);
    $box.appendChild($tempLi);
  }
}

var card = [];
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify(card));
}
else {
  card = JSON.parse(localStorage.getItem('cart'));
}
document.getElementById('js-icon-amount').innerHTML = card.length;
function addCard() {
  var quantity = 1;
  var index;
  var idBtn = event.currentTarget.id;
  for (var i = 0, length = products.length; i < length; i++) {
    if (parseInt(idBtn) === products[i].id) {
      index = CountCard(card, products[i]);
      console.log(index);
      if (index !== -1) {
        card[index].quantity += quantity;
        console.log(card[index]);
      }
      else {
        var product = products[i];
        card.push({ product, quantity });
        console.log('length' + card.length);
      }
      localStorage.setItem('cart', JSON.stringify(card));
    }
  }
  document.getElementById('js-icon-amount').innerHTML = card.length;
}
var cardProduct = JSON.parse(localStorage.getItem('cart'));
function CountCard(card, p) {
  var index = -1;
  for (var j = 0; j < card.length; j++) {
    if (p.id === card[j].product.id) {
      index = j;
    }
  }
  return index;
}
listproduct();
