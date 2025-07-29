// I am guessing these will change to an API later
const temperatureC = 5;     // Ierland uses Celcius
const windSpeedKmh = 10;    // Ierland uses km/h

function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("Temperature").textContent = `${temperatureC} °C`;
    document.getElementById("Wind").textContent = `${windSpeedKmh} km/h`;

    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperatureC, windSpeedKmh);
        document.getElementById("WindChill").textContent = `${windChill} °C`;
    } else {
        document.getElementById("WindChill").textContent = "N/A";
    }

    document.getElementById("Conditions").textContent = "Cloudy";
});
