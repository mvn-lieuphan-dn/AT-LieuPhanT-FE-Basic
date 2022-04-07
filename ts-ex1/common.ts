interface Product {
  id: number;
  imgProduct: string;
  titleProduct: string;
  descriptionProduct: string;
  price: number;
}

var products: Array<Product> = [{
  id: 1,
  imgProduct: '1.jpg',
  titleProduct: 'Traditional women\'s long dress, neck jars',
  descriptionProduct: 'Color red, handmade embroidery',
  price: 200,

},
{
  id: 2,
  imgProduct: '3.jpg',
  titleProduct: 'Traditional women\s long dress, neck jars',
  descriptionProduct: 'Color white, handmade embroidery',
  price: 270,
},
{
  id: 3,
  imgProduct: '4.jpg',
  titleProduct: 'Traditional women\'s long dress, long hand',
  descriptionProduct: 'Color white, handmade embroidery',
  price: 340,
},
{
  id: 4,
  imgProduct: '8.png',
  titleProduct: 'Traditional women\'s long dress, long hand',
  descriptionProduct: 'Color blue, handmade embroidery',
  price: 340,
},
{
  id: 5,
  imgProduct: '2.jpg',
  titleProduct: 'Traditional women\'s long dress, long hand',
  descriptionProduct: 'Color white, handmade embroidery',
  price: 340,
},
{
  id: 6,
  imgProduct: '5.jpg',
  titleProduct: 'Innovative men\'s long dress 2',
  descriptionProduct: 'Color white, handmade embroidery',
  price: 370,
},
{
  id: 7,
  imgProduct: '6.jpg',
  titleProduct: 'Innovative men\'s long dress 3',
  descriptionProduct: 'Color white, handmade embroidery',
  price: 350,
},
{
  id: 8,
  imgProduct: '7.jpg',
  titleProduct: 'Innovative men\'s long dress 4',
  descriptionProduct: 'Color white, handmade embroidery',
  price: 340,
}];
//var products :Array<string> = [product1, product2, product3, product4, product5, product6, product7, product8];
console.log(products);

function countProCart(){
  var arrCart: Array<Product> = JSON.parse(localStorage.getItem('cart'));
  var a: any = arrCart.length;
  console.log(a);
  document.getElementById('js-icon-amount').innerHTML = a;
}
countProCart();

