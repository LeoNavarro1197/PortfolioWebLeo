
let slogan = document.getElementById('slogan')
let btn = document.getElementById('btn')
let fondo = document.getElementById('fondo')
let fondoParticulas = document.getElementById('fondoParticulas')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    btn.style.marginTop = value * 0.7 + 'px';
    fondo.style.marginLeft = value * 0.7 + 'px';
    fondoParticulas.style.marginLeft = value * 0.2 + 'px';
    //btn.style.opacity = value + 0.1;
    slogan.style.marginBottom = value* -0.85  + 'px';
    
})
