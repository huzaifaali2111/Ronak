let eachfilter = document.querySelectorAll('.pill');
let type = document.querySelectorAll('.card-badge');
let dateinput = document.getElementById('datePicker');



// Type and Date Filters
const runFilters = () => {
    let selectedPill = document.querySelector('.pill.active').getAttribute('btn-type')
    let selectedDate = dateinput.value;

    type.forEach(card => {
        let cardCategory = card.getAttribute('event-type');
        let cardParent = card.parentNode.parentNode;
        let postDate = cardParent.getAttribute('data-date');
        let matchesCategory = (selectedPill === 'All Events' || cardCategory === selectedPill);
        let matchesDate = (selectedDate === "" || postDate === selectedDate);
        if (matchesCategory && matchesDate) {
            cardParent.style.display = "block";
        }
        else {
            cardParent.style.display = "none";
        }

    });
};

eachfilter.forEach(pill => {
    pill.addEventListener('click', () => {
        eachfilter.forEach(btn => btn.classList.remove('active'));
        pill.classList.add('active');
        runFilters();
    });
});

dateinput.addEventListener('input', () => {
    runFilters();
});










    
