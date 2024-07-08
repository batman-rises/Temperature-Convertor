function convertTemp() {
    const celsiusInt = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInt);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        const roundedFahrenheit = fahrenheit.toFixed(2);
        document.getElementById('result').innerText = `Fahrenheit: ${roundedFahrenheit}`;
    }
}
