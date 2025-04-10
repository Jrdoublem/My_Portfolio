var typed = new Typed(".typing", {
    strings: ["Computer Engineering Student"],
    typeSpeed: 80,
    backSpeed: 70,
    startDelay: 500, 
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: false, 
    fadeOut: false 
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });
    
    const currentURL = window.location.href;
    const currentHash = window.location.hash;
    
    if (currentHash) {
        const activeLink = document.querySelector(`.nav li a[href="${currentHash}"]`);
        if (activeLink) {
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            activeLink.classList.add('active');
        }
    }
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav li a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});
