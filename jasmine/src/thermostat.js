function Thermostat(temperature) {
  this._temperature = temperature;
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  this._temperature ++;
};

Thermostat.prototype.down = function () {
  try {
    if(this.getTemperature() === 10){
      throw new Error("Minimum Temperature is 10 degrees");
    };
    this._temperature --;
  } catch(e) {
    return `${e}`;
  };
};
