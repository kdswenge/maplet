
// var items, length, deg,z, move=0;
// function rotate (direction) {
//     move+=direction;
//     for(var i=0;i<length;i++){
//         items[i].style.transform="rotateY("+(deg*(i+move))+"deg) translateZ("+z+"px)";
//     }
// }
// function load (){
//     items= document.getElementsByClassName('carou');
//     length= items.length;
//     deg= 360/length;
//     z=(items[0].offsetWidth/2)/Math.tan((deg/2)*(Math.PI/180));
//    for(var i=0;i<length;i++){
//        items[i].style.transform="rotateY("+(deg*i)+"deg) translateZ("+z+"px) ";
//    }
// }
// window.addEventListener('load', load);
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