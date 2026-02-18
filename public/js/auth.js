// Auth DOM Elements
const authOverlay = document.getElementById('auth_overlay');
const authCloseBtn = document.getElementById('auth_close_btn');
const authIcon = document.getElementById('auth_icon');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const switchAuthLinks = document.querySelectorAll('.switch-auth');

// open auth modal
if (authIcon) {
    authIcon.addEventListener('click', () => {
        if (authOverlay) {
            authOverlay.style.display = 'flex';
        }
    });
}

// close auth modal
const closeAuthModal = () => {
    if (authOverlay) {
        authOverlay.style.display = 'none';
    }
};

if (authCloseBtn) {
    authCloseBtn.addEventListener('click', closeAuthModal);
}

// Close on backdrop click
if (authOverlay) {
    authOverlay.addEventListener('click', (e) => {
        if (e.target === authOverlay) {
            closeAuthModal();
        }
    });
}

// Tab Switching Logic
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));


        btn.classList.add('active');


        const targetId = btn.getAttribute('data-target');
        const targetForm = document.getElementById(targetId);
        if (targetForm) {
            targetForm.classList.add('active');
        }
    });
});

// switch auth links
switchAuthLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');

        const targetTab = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
        if (targetTab) {
            targetTab.click();
        }
    });
});


// Retype Password 
let form = document.getElementById('signup_form')
    .addEventListener('submit', (event) => {
        const password = document.getElementById('password').value;
        const confirm_password = document.getElementById('repassword').value;
        if (password !== confirm_password) {
            event.preventDefault();
            document.getElementById('error').innerText = "Passwords do not match!"
        }
    });