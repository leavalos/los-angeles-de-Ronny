window.addEventListener("load", () => {

   const sounds = document.querySelectorAll(".Sound");
   const pads = document.querySelectorAll(".Pads div");
   
   pads.forEach((pad,index) => { 
    pad.addEventListener('click', function(){
        sounds[0].play();    
    }) 
   })

});