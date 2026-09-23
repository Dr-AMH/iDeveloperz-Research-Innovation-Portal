
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
const menu=document.getElementById('menu'),nav=document.querySelector('.nav nav');
if(menu&&nav){
  const navId='site-navigation';
  nav.id=navId;
  menu.setAttribute('aria-controls',navId);
  menu.setAttribute('aria-expanded','false');
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
}
