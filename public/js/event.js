const joining_form = document.getElementById("joining_form");
const join_cta = document.getElementById("join_cta");
const close_btn = document.getElementById("close_form");

// Open Modal
join_cta.addEventListener('click', () => {
    joining_form.classList.add('active'); 
});

// Close Modal via Button
close_btn.addEventListener('click', () => {
    joining_form.classList.remove('active');
});

// Close Modal via Backdrop Click
joining_form.addEventListener('click', (e) => {
    if (e.target === joining_form) {
        joining_form.classList.remove('active');
    }
});

