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
    })

