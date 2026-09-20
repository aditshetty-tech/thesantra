// auth.js - used by login.html and register.html
// Eye button: show or hide the password

const eyeButtons = document.querySelectorAll('.reveal-btn');

eyeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const field = document.getElementById(btn.dataset.target);
        const icon = btn.querySelector('i');

        if (field.type === 'password') {
            field.type = 'text';
            icon.className = 'bi bi-eye-slash';
            btn.setAttribute('aria-label', 'Hide password');
        } else {
            field.type = 'password';
            icon.className = 'bi bi-eye';
            btn.setAttribute('aria-label', 'Show password');
        }
    });
});
