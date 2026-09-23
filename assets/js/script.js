
document.getElementById('year').textContent=new Date().getFullYear();
const b=document.getElementById('menu'),n=document.querySelector('.nav nav');
if(b&&n)b.onclick=()=>n.classList.toggle('open');
