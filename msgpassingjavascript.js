const sendbtn=document.querySelector('#sendbtn');
const messagein=document.querySelector('#messagein');
const messageout=document.querySelector('#messageout');
  
sendbtn.addEventListener('click',sendmsg);
 

function sendmsg()
{
    let content=messagein.value;
    if(content==='')
    {
        alert('please enter any message');
    }
    else
    {
      messageout.innerHTML= content;
      messagein.innerHTML='';
    }
}