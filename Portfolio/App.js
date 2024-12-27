// let ab = document.querySelector("#abt")
// let exp = document.getElementById("exp");
// let edu = document.getElementById("edc");
// let ski =document.getElementById("ski");
// let int = document.getElementById("in");
// let con = document.getElementById("container");
// let educ = document.querySelector("#education")


// ab.onclick = ()=>{
//     ab.style.color="#fff";
// }
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('.section');

    // Smooth scroll and add 'active' class on click
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get target section id
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll smoothly to the section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Remove active class from all links, then add to the clicked one
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active'); // Mark this link as active
            } else {
                console.error(`Section with id "${targetId}" not found.`);
            }
        });
    });

    // Highlight the correct nav item on scroll
    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 60; // Adjust for fixed navbar height
            const sectionHeight = section.clientHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active'); // Add active class to current link
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideNav = document.getElementById('sideNav');
    const navLinks = document.querySelectorAll('#container ul li a');

    // Toggle sidebar when hamburger is clicked
    hamburgerMenu.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });

    // Close sidebar and highlight the clicked link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sideNav.classList.remove('active');
            }

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Highlight the clicked link
            link.classList.add('active');
        });
    });
});

let isThrottled = false;

window.addEventListener('scroll', () => {
    if (!isThrottled) {
        isThrottled = true;

        setTimeout(() => {
            let currentScroll = window.scrollY;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop - 60;
                const sectionHeight = section.clientHeight;

                if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[index].classList.add('active');
                }
            });

            isThrottled = false;
        }, 100); // Adjust time delay as needed
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Code for smooth scroll, active class, hamburger menu, etc.
});

// ab.addEventListener("click",(e) => {
//     e.target.style.color = "#fff";
// });
