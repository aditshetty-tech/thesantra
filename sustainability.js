// sustainability.js - used by sustainability.html

// 1. Impact calculator
// Per garment: 2,650 L of water saved, 9 kg of CO2 avoided, 0.6 kg of waste diverted
const garments = document.getElementById('garments');
const garmentCount = document.getElementById('garmentCount');
const resTrees = document.getElementById('resTrees');
const resWater = document.getElementById('resWater');
const resCo2 = document.getElementById('resCo2');
const resWaste = document.getElementById('resWaste');

function updateImpact() {
    const n = Number(garments.value);

    garmentCount.textContent = n;
    resTrees.textContent = n;                                   // 1 garment = 1 tree
    resWater.textContent = (n * 2650).toLocaleString('en-IN') + ' L';
    resCo2.textContent = (n * 9).toLocaleString('en-IN') + ' kg';
    resWaste.textContent = (n * 0.6).toFixed(1) + ' kg';
}

garments.addEventListener('input', updateImpact);
updateImpact();

// 2. Sub-navigation: highlight the link of the section we are currently in
const navLinks = document.querySelectorAll('.subnav-pills .nav-link');

window.addEventListener('scroll', function () {
    let current = 0;

    for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].getAttribute('href'));
        if (section.getBoundingClientRect().top <= 160) {
            current = i;
        }
    }

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    navLinks[current].classList.add('active');
});
