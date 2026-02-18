// time Formater 
const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

};


let time = document.querySelectorAll('.time')
    .forEach(card => {
        const start_time = card.dataset.start;
        const end_time = card.dataset.end;
        card.innerHTML = `<i class="far fa-clock"></i> ${formatTime(start_time)} - ${formatTime(end_time)}`
    });

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

