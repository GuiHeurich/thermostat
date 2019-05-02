$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.getTemperature());
  $('#powerSavingMode').text(thermostat.getPowerSavingMode());
  $('#energyUse').text(thermostat.getEnergyUse());

  function updateTemperature() {
  $('#temperature').text(thermostat.getTemperature());
  $('#temperature').attr('class', thermostat.getEnergyUse());
  }

  function updatePowerSavingMode() {
  $('#powerSavingMode').text(thermostat.getPowerSavingMode());
  }

  $('#up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#resetTemperature').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#setSavingModeOn').click(function(){
    thermostat.setSavingModeOn();
    updatePowerSavingMode();
  });

  $('#setSavingModeOff').click(function(){
    thermostat.setSavingModeOff();
    updatePowerSavingMode();
  });

});
