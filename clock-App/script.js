
function updateClock() {

    const now = new Date();

    // Get current time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Digital clock
    const ampm = hours >= 12 ? "PM" : "AM";

    let displayHours = hours % 12 || 12;

    const formattedTime =
        String(displayHours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    document.getElementById("digitalTime").textContent = formattedTime;
    document.getElementById("ampm").textContent = ampm;

    // Display date
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", dateOptions);

    // Analogue clock calculations
    const hourRotation = (hours % 12) * 30 + minutes * 0.5;
    const minuteRotation = minutes * 6 + seconds * 0.1;
    const secondRotation = seconds * 6;

    document.getElementById("hourHand").style.transform =
        `translateX(-50%) rotate(${hourRotation}deg)`;

    document.getElementById("minuteHand").style.transform =
        `translateX(-50%) rotate(${minuteRotation}deg)`;

    document.getElementById("secondHand").style.transform =
        `translateX(-50%) rotate(${secondRotation}deg)`;
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);
