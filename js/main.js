let catProd = document.querySelectorAll('.product-list');
document.querySelectorAll('.shop-cat').forEach(elem => elem.addEventListener("click",(event) => {
    let clickCategory = event.target.dataset.id;
    if(clickCategory === "phones"){
        catProd[0].classList.add('d-block');
        catProd[1].classList.remove('d-block')
        catProd[2].classList.remove('d-block')

      }else if (clickCategory === "tv"){
        catProd[0].classList.remove('d-block')
        catProd[1].classList.add('d-block');
        catProd[2].classList.remove('d-block')
        
      } else if (clickCategory === "laptops"){
        catProd[0].classList.remove('d-block')
        catProd[1].classList.remove('d-block')
        catProd[2].classList.add('d-block');
      }
}))

const productElements = document.querySelectorAll('.product');
const prodPriceElements = document.querySelectorAll('.prodprice-item');

productElements.forEach((productElement) => {
  productElement.addEventListener('click', (event) => {
    const prodId = event.target.dataset.prod;
    prodPriceElements.forEach((prodPriceElement, index) => {
      prodPriceElement.classList.toggle('d-block', index === prodId - 1);
    });
  });
});
const btn = document.querySelectorAll('.buy-product');
btn.forEach(elem => elem.addEventListener('click', (event)=>{
    event = window.alert('Thank You for buying!');
    document.location.href = 'pages/index.html'
}))