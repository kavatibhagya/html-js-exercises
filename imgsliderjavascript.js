const nextbtn=document.querySelector('.nextbtn');
const prevbtn=document.querySelector('.prevbtn');

const container=document.querySelector('.images');

let counter = 1;
nextbtn.addEventListener('click',Nextslide);
prevbtn.addEventListener('click',Prevslide);

 function Nextslide()

 {  
     container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
     if(counter === 4)
     {
         counter = 0;
     }
     counter++;
     container.style.backgroundImage=`url(img-${counter}.jpeg)`
 }
 function Prevslide()
 {  
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
     if(counter === 1)
     {
       counter = 5;
     }
     counter--;
     container.style.backgroundImage=`url(img-${counter}.jpeg)`
 }