let counter=document.querySelector('.counter');
let lowercount=document.querySelector('#lowercountbtn');
let addcount=document.querySelector('#addcountbtn');
 
let count=0;

addcount.addEventListener('click',incrementcount);
lowercount.addEventListener('click',decrementcount);

function incrementcount()
{
  count++;
  counter.innerHTML=count;
  if(counter.innerHTML>'0')
  {
      counter.style.color= 'rgb(9, 227, 151)'
  }
  else if(counter.innerHTML==='0')
  {
    counter.style.color= 'white';
  }
  counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

}
function decrementcount()
{
  count--;
  counter.innerHTML=count;
  if(counter.innerHTML<'0')
  {
      counter.style.color= 'red'
  }
  else if(counter.innerHTML===  '0')
  {
    counter.style.color= 'white';
  }
  counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

  
}
