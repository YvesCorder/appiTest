function test(){
    const m = document.querySelector('.header');
    
    window.addEventListener('scroll', ()=>{
    if(window.scrollY >=56){
        m.classList.add('fixed');
    } else if(window.scrollY <= 56){
        m.classList.remove('fixed');
    }
    });
}