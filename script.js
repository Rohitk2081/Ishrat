function updateCountdown() {
    const birthday = new Date(new Date().getFullYear(), 4, 22); // May 22
    const now = new Date();

    // If birthday has passed this year, set for next year
    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();