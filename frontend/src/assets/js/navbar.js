
$(document).ready(function()
{
  const NavItems = document.querySelector('.nav');
  const bton= document.querySelector('.iconm');
  const logo = document.querySelector('.Nombre');
  if(bton){
    bton.addEventListener('click', () =>{
      if(NavItems)
      NavItems.classList.remove('col-xs-6');
      NavItems.classList.toggle('show');
    })
  }

  window.addEventListener('resize', changeHeight);
  function changeHeight(){
  if (window.matchMedia("(min-width: 900px)").matches) {
    /* La pantalla tiene al menos 400 píxeles de ancho */
    NavItems.classList.remove('col-xs-5');
    NavItems.classList.add('col-xs-6');
    logo.classList.add('start-xs');
    logo.classList.remove('end-xs');
    }
    else{
      NavItems.classList.add('col-xs-5');
      NavItems.classList.remove('col-xs-6');
      logo.classList.remove('start-xs');
      logo.classList.add('end-xs');

    }
  }
});
