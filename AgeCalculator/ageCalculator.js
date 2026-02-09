// ====== ELEMENTS ======
const dobInput = document.getElementById("dob");
const btn = document.querySelector(".cal-btn");

// Age output
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");

// Birthday countdown box
const box = document.getElementById("birthdayBox");
const heading = document.getElementById("birthdayHeading");

const bdayDay = document.getElementById("bday-day");
const bdayHour = document.getElementById("bday-hour");
const bdayMinute = document.getElementById("bday-minute");
const bdaySecond = document.getElementById("bday-second");

// ====== PREVENT FUTURE DATE ======
dobInput.max = new Date().toISOString().split("T")[0];

// ===== SMOOTH NUMBER ANIMATION ======
function animateNumber(el, value, label) {
    let count = 0;
    const interval = setInterval(() => {
        el.textContent = `${label}: ${count}`;
        count++;
        if (count > value) {
            clearInterval(interval);
            el.textContent = `${label}: ${value}`;
        }
    }, 20);
}

// ====== CHECK LEAP YEAR ======
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// ====== CALCULATE AGE ======
function calculateAge(dob) {
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
    // days negative → previous month se adjust
    if (days < 0) {
        months--;
        const lastMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += lastMonthDays;
    }
    // months negative → year se adjust
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}


// ====== NEXT BIRTHDAY COUNTDOWN ======
function handleNextBirthday(dob) {
    const now = new Date();
    // TODAY IS BIRTHDAY
    if (
        dob.getDate() === now.getDate() &&
        dob.getMonth() === now.getMonth()
    ) {
        heading.textContent = "🎂 Happy Birthday!";
        box.style.display = "block";
        bdayDay.textContent = "Enjoy your special day 🎉";
        bdayHour.textContent = "";
        bdayMinute.textContent = "";
        bdaySecond.textContent = "";
        return;
    }
    // NEXT BIRTHDAY COUNTDOWN
    let nextBirthday = new Date(now.getFullYear(),dob.getMonth(),dob.getDate());
    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    const diff = nextBirthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    heading.textContent = "Your Next Birthday 🎉";
    box.style.display = "block";

    bdayDay.textContent = `Days: ${days}`;
    bdayHour.textContent = `Hours: ${hours}`;
    bdayMinute.textContent = `Minutes: ${minutes}`;
    bdaySecond.textContent = `Seconds: ${seconds}`;
}


// ====== BUTTON CLICK ======
btn.addEventListener("click", () => {
    if (!dobInput.value) {
        alert("Please select your Date of Birth");
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();

    if (dob > today) {
        alert("Future date not allowed");
        return;
    }

    //  AGE
    const age = calculateAge(dob);
    animateNumber(yearEl, age.years, "Years");
    animateNumber(monthEl, age.months, "Months");
    animateNumber(dayEl, age.days, "Days");

    //  NEXT BIRTHDAY / HAPPY BIRTHDAY
    handleNextBirthday(dob);
});
