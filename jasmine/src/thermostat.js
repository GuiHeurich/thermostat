function Thermostat() {
  this._temperature = 20;
  this._powerSavingMode = "Power Saving Mode On";
  this._energyUse = "";
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.getEnergyUse = function () {
  if(this.getTemperature() < 18){
    return this._energyUse = 'low-usage';
  } else if(this.getTemperature() < 25) {
    return this._energyUse = 'medium-usage';
  };
  return this._energyUse = 'high-usage';
};

Thermostat.prototype.getPowerSavingMode = function () {
  return this._powerSavingMode;
};

Thermostat.prototype.setSavingModeOff = function () {
  this._powerSavingMode = "Power Saving Mode Off";
};

Thermostat.prototype.setSavingModeOn = function () {
  this._powerSavingMode = "Power Saving Mode On";
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


Thermostat.prototype.resetTemperature = function () {
  this._temperature = 20;
};
