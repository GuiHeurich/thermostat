function Thermostat() {
  this._temperature = 20;
  this._powerSavingMode = true;
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  var maxTemp = this.getPowerSavingMode() ? 25 : 32;
  try {
        if(maxTemp === this.getTemperature()) {
          throw new Error("Maximum temperature reached");
    };
    this._temperature ++;
  } catch(e) {
    return `${e}`;
  };
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

Thermostat.prototype.getPowerSavingMode = function () {
  return this._powerSavingMode;
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = 20;
};
