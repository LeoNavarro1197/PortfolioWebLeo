
let slogan = document.getElementById('slogan')
let btn = document.getElementById('btn')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    btn.style.marginTop = value * 0.7 + 'px';
    slogan.style.marginBottom =   value* -0.85  + 'px';
    
})
