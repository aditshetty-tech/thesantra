// catalogue.js - used by catalogue.html

// 1. Price slider: show the chosen amount next to "Up to"
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', function () {
    // \u20B9 is the rupee sign
    priceValue.textContent = '\u20B9' + Number(priceRange.value).toLocaleString('en-IN');
});

// 2. Heart buttons: click to save a piece, click again to un-save
const saveButtons = document.querySelectorAll('.cat-save');

saveButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const icon = btn.querySelector('i');

        if (icon.className === 'bi bi-heart') {
            icon.className = 'bi bi-heart-fill';
            btn.setAttribute('aria-pressed', 'true');
        } else {
            icon.className = 'bi bi-heart';
            btn.setAttribute('aria-pressed', 'false');
        }
    });
});
