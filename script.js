function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;

    document.getElementById("ampm").textContent = ampm;

    document.getElementById("date").textContent =
        now.toDateString();
}

updateClock();
setInterval(updateClock, 1000);