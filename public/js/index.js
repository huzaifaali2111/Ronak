let filters = document.querySelector('.filter-pills');
let eachfilter = filters.querySelectorAll('.pill');
let type = document.querySelectorAll('.card-badge');
let dateinput = document.getElementById('datePicker');

// debugger

eachfilter.forEach(pill => {
    pill.addEventListener('click', () => {

        eachfilter.forEach(btn => btn.classList.remove('active'));

        pill.classList.add('active');
        type.forEach(card => {
            if (card.textContent.trim() === pill.textContent) {
                card.parentNode.parentNode.style.display = "block";
            }
            else if (pill.textContent === 'All Events') {
                card.parentNode.parentNode.style.display = "block";
            }
            else {
                card.parentNode.parentNode.style.display = "none";
            }
        });
    });
});


