var img= document.getElementsByClassName('img_slider');
var etape=0;
var nbr =img.length;
var suivant= document.querySelector('.suivant');
var precedent =document.querySelector('.precedent');
function inactive(){
    for(var i=0; i<nbr; i++){
        img[i].classList.remove('active');
    }
}
suivant.addEventListener('click', function(){
    etape++;
    if(etape>=nbr){
        etape=0;
    }
    inactive();
    img[etape].classList.add('active');
})
precedent.addEventListener('click',function(){
    etape--;
    if(etape<0){
        etape=nbr-1;
    }
    inactive();
    img[etape].classList.add('active');
})
setInterval(function(){
    etape++;
    if(etape>=nbr){
        etape=0;
    }
    inactive();
    img[etape].classList.add('active');
},3000)
var btn = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var sign = document.querySelector('.sign')
var body = document.querySelector('body');
btn.addEventListener('click', ()=>{
    menu.classList.toggle('mobile')
    sign.classList.toggle('connecter')
    body.classList.toggle('fixer');
})