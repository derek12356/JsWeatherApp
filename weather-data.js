"use strict";

function Weather(cityName, description, humidity, wind, pressure) {
    this.cityName = cityName;
    this.description = description;
    this.humidity = humidity + ' %';
    this.wind = (wind * 3.6).toFixed(2) + ' km/h';
    this.pressure = pressure + ' hPa';
    this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + ' F.';
    }
});

