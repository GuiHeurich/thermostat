$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.getTemperature());
  $('#powerSavingMode').text(thermostat.getPowerSavingMode());
  $('#energyUse').text(thermostat.getEnergyUse());

  function updateTemperature() {
  $('#temperature').text(thermostat.getTemperature());
  $('#temperature').attr('class', thermostat.getEnergyUse());
  $('#powerSavingMode').text(thermostat.getPowerSavingMode());
  $('#energyUse').text(thermostat.getEnergyUse());
  };

  $(document).ready(function(){
    $.get("http://api.openweathermap.org/data/2.5/weather?id=2643741&appid=b0574c261cbba515f58e50a9acc6d19b", function(weatherResponse){
      city = weatherResponse.name;
      forecast = weatherResponse.weather[0].main;
      $('#weather').text(`The current weather forecast for ${city} is ${forecast}`);
    })
  });


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
    updateTemperature();
  });

  $('#setSavingModeOff').click(function(){
    thermostat.setSavingModeOff();
    updateTemperature();
  });

});
