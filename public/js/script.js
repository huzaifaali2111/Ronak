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
