
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100)

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
// reset:true,
distance: '80px',
duration: 2000,
delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ',{ origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ',{ origin:'right'});


/*==================== typed js ====================*/

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer','Researcher'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== theme toggle ====================*/
const toggleLabel = document.querySelector('.toggle-label');
const checkbox = document.getElementById('checkbox');

// Check for saved theme preference or use default
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (checkbox) checkbox.checked = true;
}

// Toggle theme when checkbox changes
if (checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Also toggle when clicking the label (for better UX)
if (toggleLabel) {
    toggleLabel.addEventListener('click', function(e) {
        // The label's click event will automatically toggle the checkbox
        // This is just for any additional functionality
    });
}
