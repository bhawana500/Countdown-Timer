# New Year Countdown Timer

A simple, real-time countdown timer that displays the remaining time until the upcoming New Year. This project is built using only HTML, CSS, and JavaScript without any external libraries. It demonstrates fundamental DOM manipulation, time calculations, and live UI updates.

---

## Introduction

The New Year Countdown Timer dynamically calculates and displays the number of days, hours, minutes, and seconds left until January 1st of the next year. The timer updates every second and stops automatically once the countdown is complete.

---

## Features

- Real-time countdown that updates every second
- Fully responsive design for all devices
- Minimalist and user-friendly interface
- Easy to customize for any future date
- No dependencies or frameworks required

---

## Built With

- **HTML5** – for structuring the web page
- **CSS3** – for layout, styling, and responsiveness
- **JavaScript (ES6)** – for logic, date handling, and DOM updates

---

## How It Works

1. HTML provides the basic structure with placeholders for days, hours, minutes, and seconds.
2. CSS is used to style the countdown container and elements for a clean, responsive look.
3. JavaScript calculates the remaining time until the target date using the `Date` object.
4. `setInterval()` is used to update the countdown every second.
5. The timer stops when the countdown reaches zero.

---

## Customization

To change the countdown target date:

1. Open the `script.js` file.
2. Locate the following line:
   ```javascript
   const newYear = new Date("January 1, 2026 00:00:00");
