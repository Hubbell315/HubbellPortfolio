let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => { // Changed 'sec' to 'section'
        let top = window.scrollY;
        let offset = section.offsetTop - 150; // Changed 'sec' to 'section'
        let height = section.offsetHeight; // Changed 'sec' to 'section'
        let id = section.getAttribute('id'); // Changed 'sec' to 'section'

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Changed 'links' to 'link'
                link.classList.remove('active'); // Changed 'links' to 'link'
            }); // Added closing parenthesis for navLinks.forEach
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    }); // Added closing parenthesis for sections.forEach
}; // Added semicolon at the end of the window.onscroll assignment

menuIcon.onclick = () => { // Changed 'onClick' to 'onclick' (case sensitivity)
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
