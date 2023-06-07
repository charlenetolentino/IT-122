function convert(){
    var inputCelsius = document.getElementById("inputCelsius").value;
    var fahrenheit = ((inputCelsius * 1.8) +32);
    
    document.getElementById("output").innerHTML = "The temperature of " + inputCelsius + "°C" + " is " + fahrenheit + " in °F.";
}