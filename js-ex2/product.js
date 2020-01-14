var products = [{
  id: 1,
  imgProduct : '1.jpg',
  titleProduct : 'Áo dài nữ truyền thống ',
  descriptionProduct : 'Màu đỏ , tay lỡ',
  price : 200
},
{
  id: 2,
  imgProduct : '3.jpg',
  titleProduct : 'Áo dài nữ cổ trụ',
  descriptionProduct : 'Màu trắng , vãi trơn',
  price : 270
},
{
  id: 3,
  imgProduct : '4.jpg',
  titleProduct : 'Áo dài nữ , tay dài',
  descriptionProduct : 'Màu xanh lam, thêu thủ công',
  price : 340
},
{
  id: 4,
  imgProduct : '8.png',
  titleProduct : 'Áo dài nữ ',
  descriptionProduct : 'Màu trắng , thêu hoa sen thủ công',
  price : 280
},
{
  id: 5,
  imgProduct : '2.jpg',
  titleProduct : 'Áo dài nam ',
  descriptionProduct : 'Màu trắng , thêu thủ công',
  price : 200
},
{
  id: 6,
  imgProduct : '5.jpg',
  titleProduct : 'Áo dài nam cách tân',
  descriptionProduct : 'Màu trắng , thêu  thủ công',
  price : 370
},
{
  id: 7,
  imgProduct : '6.jpg',
  titleProduct : 'Áo dài nam cổ  trụ',
  descriptionProduct : 'Màu đen',
  price : 330
},
{
  id: 8,
  imgProduct : '7.jpg',
  titleProduct : 'Áo dài các tân',
  descriptionProduct : 'Màu trắng , thêu hoa sen thủ công',
  price : 400
}
];

  var box= document.getElementById('js-product-list')
  
    var tempLi, tempImg, tempContent, tempH4, tempButton, tempSpan1, tempSpan2;
    for (var i = 0; i < products.length; i++) {
      tempLi = document.createElement('li');
      tempLi.setAttribute('class', 'product-item');

      tempImg = document.createElement('img');
      tempImg.setAttribute('src', './images/' + products[i].imgProduct);
      tempImg.setAttribute('class', 'product-card-img');
      tempLi.appendChild(tempImg);

      tempDiv = document.createElement('div');
      tempDiv.setAttribute('class', 'product-card-content');

      tempH4 = document.createElement('h4');
      tempContent = document.createTextNode(products[i].titleProduct);
      tempH4.setAttribute('class', 'product-card-title');
      tempH4.appendChild(tempContent);
      tempDiv.appendChild(tempH4);

      tempSpan1 = document.createElement('span');
      tempContent = document.createTextNode(products[i].descriptionProduct);
      tempSpan1.setAttribute('class', 'product-card-description');
      tempSpan1.appendChild(tempContent);
      tempDiv.appendChild(tempSpan1);

      tempBr = document.createElement('br');
      tempDiv.appendChild(tempBr);
      tempSpan2 = document.createElement('span');
      tempContent = document.createTextNode('Price: $' + products[i].price);
      tempSpan2.setAttribute('class', 'product-card-price');
      tempSpan2.appendChild(tempContent);
      tempDiv.appendChild(tempSpan2);

      tempButton = document.createElement('button');
      tempButton.setAttribute('id', 'pro-' + products[i].id);
      tempButton.setAttribute('class', 'btn-add-to-cart');
      tempButton.setAttribute('onclick', 'addCard()');
      tempContent = document.createTextNode('ADD TO CART');
      tempButton.appendChild(tempContent);

      tempDiv.appendChild(tempButton);
      tempLi.appendChild(tempDiv);
      box.appendChild(tempLi);
      console.log(tempButton.getAttribute('id'));

  }
  console.log(box);

  var card = [];
  var table = document.getElementById('js-card-list');
  // function addCard(id){
  //   onclick(tempButton) = tempButton.getAttribute('id');
    
  // }