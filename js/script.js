const load = () => {
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        loader.classList.add('inactive');
    });
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', (e) => {
        //Toggle nav-active (slide animation)
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
           if(link.style.animation){
               link.style.animation = '';
           } else {
            link.style.animation = `navLinkFade 0.3s ease forwards ${index / 9 + 0.2}s`;
           }
        });

        //Toggle close button animation
        burger.classList.toggle('toggle');   
    }); 
};

const brandHover = () => {
    const rects = document.querySelectorAll('.developed-bg rect');
    const brand = document.querySelector('.brand h4');

    brand.addEventListener('mouseenter', () => {
        rects.forEach(rect => {
            rect.style.animation = 'animate-rect 0.3s ease forwards';
            rect.classList.add('rect-animated');
        });
        brand.style.textShadow = '0px 2px 3px rgba(0, 0, 0, 0.7)';
    });

    brand.addEventListener('mouseleave', () => {
        rects.forEach(rect => {
            rect.style.animation = 'animate-rect-reverse 0.3s ease forwards';
            rect.classList.remove('rect-animated');
        });
        setTimeout(() => {
            brand.style.textShadow = '';
        }, 100);
    });
    
}

load();
brandHover();
navSlide();