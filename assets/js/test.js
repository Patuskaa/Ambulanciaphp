//EFEITO PARALLAX
let bk= document.getElementById("bk");
let casas= document.getElementById("casas");
let estrada = document.getElementById("estrada");
let ambulance = document.getElementById("ambulance");
let monte = document.getElementById("monte");
let star = document.getElementById("star");

rotate= 0;

window.addEventListener('scroll', function(){
    var value = window.scrollY;  
    
    bk.style.top = value * 0.5 + 'px'; //desce
    casas.style.top = value * 0.6 + 'px'; 
    estrada.style.top = value *0.5 +'px';
	ambulance.style.top = value * 0.10 + 'px';
    ambulance.style.left = value * 2 + 'px';
	
    star.style.top = -value *0.5 + 'px';
    star.style.left = value *0.6 + 'px';
    if(rotate == 360){
        rotate = 0}
    rotate = rotate + 4; 
    star.style.transform = "rotate("+rotate+"deg)";
    
   
})

