$(document).ready(function()
{

  const style = document.documentElement.style;
  style.setProperty('--primary', '#9E9D89');


const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const products = document.querySelectorAll('.product');
const gradients = document.querySelectorAll('.gradient');
const productBg = document.querySelector('.productBackground');

let prevColor = "white";
let animationEnd = true;

let x = window.matchMedia("(max-width: 1000px)");



changeHeight();



sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}




window.addEventListener('resize', changeHeight);

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let product = document.querySelector(`.product[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor)
    {
      return;
    }
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);


    products.forEach(s => s.classList.remove('show'));
    product.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}



function changeHeight(){

    if(x.matches){
        let productHeight = shoes[0].offsetHeight;
        productBg.style.height = `${productHeight * 0.9}px`;

    }
    else{
      productBg.style.height = "475px";
    }
}


});

