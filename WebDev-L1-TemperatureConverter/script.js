function convertTemperature() {

    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const unit = document.getElementById("unit").value;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    }

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    else if (unit === "kelvin") {

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    document.getElementById("celsius").innerText =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerText =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").innerText =
        kelvin.toFixed(2) + " K";
}