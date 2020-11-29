const navSlide= ()=>{
    const burger=document.querySelector('.burger');
    const nav= document.querySelector('.nav-links')
    const navlinks= document.querySelectorAll('.nav-links li');
    console.log(navlinks)
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        var links = nav.childNodes;
        var n = 0;
        var Arr = Array.prototype.slice.call(navlinks);
        Arr.forEach((link)=>{
            if (link.style.animation){
                link.style.animation='';
            }
            else {
                link.style.animation= `navLinkFade 0.5s ease forwards ${(n/5)+1}s`;
            n=n+1;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();