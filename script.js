
// ===== NEXORA WEB - BLACK FRIDAY =====

const blackFridayEnd = new Date("2026-12-11T00:00:00-05:00").getTime();

const counter = document.getElementById("blackFridayCounter");

function updateBlackFridayCounter() {
    const now = Date.now();
    const distance = blackFridayEnd - now;

    if (distance <= 0) {
        counter.innerHTML = `
            <h3>¡La promoción ha terminado!</h3>
            <p>Gracias por visitar Nexora Web 💙</p>
        `;
        clearInterval(blackFridayInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("bfDays").textContent =
        String(days).padStart(2, "0");

    document.getElementById("bfHours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("bfMinutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("bfSeconds").textContent =
        String(seconds).padStart(2, "0");
}

if (counter) {
    updateBlackFridayCounter();

    const blackFridayInterval = setInterval(
        updateBlackFridayCounter,
        1000
    );

    document.getElementById("closeCounter").addEventListener("click", () => {
        counter.style.display = "none";
    });
}
