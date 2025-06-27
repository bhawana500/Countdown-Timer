const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date(`January 01 ${currentYear + 1} 00:00:00`);
};
// Update the year element
const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear();

const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');

const format = (t) => {
    return t<10 ? '0'+t : t;
}

const render = (time) => {
    app.innerHTML = `<div class = "countdown mx-auto">
    <div class = "timer" > 
        <h2 class="days  text-purple">${format(time.days)} </h2>
        <small>Days</small>
    </div>
    <div class = "timer"> 
        <h2 class="hours">${format(time.hours)}</h2>
        <small>Hours</small>
    </div>
    <div class = "timer"> 
        <h2 class="minutes">${format(time.minutes)}</h2>
        <small>Minutes</small>
    </div>
    <div class = "timer"> 
        <h2 class="seconds">${format(time.seconds)}</h2>
        <small>Seconds</small>
    </div>
</div>
`;
}

const showMessage = () => {
    message.innerHTML = `Happy New Year`;
    app.innerHTML = '';
    heading.style.display = 'none';
};

const hideMessage = () => {
    message.innerHTML = "";
    heading.style.display = 'block';
};

const complete = () => {
    showMessage();
    // restart the countdown
    setTimeout(() => { 
        hideMessage();
        countdownTimer.setExpiredDate(getNewYear());
    }, 1000 * 60 * 60 * 24);
}

const countdownTimer = new Countdown(
    getNewYear(),
    render,
    complete
);
countdownTimer.setExpiredDate(getNewYear());

