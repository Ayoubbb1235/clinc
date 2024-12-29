document.addEventListener('scroll',()=> {
    if(window.scrollY > 300){
        header.classList.add('scrolled');

    } else{
        header.classList.remove('scrolled');
    }
}
);
const header = document.querySelector('header');

const menu = document.querySelector('.menubutton');
const time = document.querySelector('.times');

menu.addEventListener('click',()=> {
    const nav = document.querySelector('.navmobile');

    menu.classList.add('mobile');
    nav.classList.remove('mobile');

    
}
);


time.addEventListener('click',()=> {
    const nav = document.querySelector('.navmobile');

    nav.classList.add('mobile');
    nav.classList.remove('mobile');

    
}
);