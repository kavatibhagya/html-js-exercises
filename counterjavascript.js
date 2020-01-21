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
  if(count>'0')
  {
      counter.style.color= 'rgb(9, 227, 151)';
  }
  else if(count==='0')
  {
    counter.style.color= 'white';
  }

}
function decrementcount()
{
  count--;
  counter.innerHTML=count;
  if(count<'0')
  {
      counter.style.color= 'red';
  }
  else if(count==='0'){
    counter.style.color= 'white';
  }
  
}
