describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("starts at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("increases the temperature", function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("decreases the temperature", function(){
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("has a minimum temperature of 10 degrees", function(){
    for (var i = 0; i < 10; i++ ) { thermostat.down(); };
    expect(thermostat.down()).toBe("Error: Minimum Temperature is 10 degrees");
  });

  it("prevents from increasing to more than 25 degrees if power saving is on", function(){
    for (var i = 0; i < 5; i++ ) { thermostat.up(); };
    expect(thermostat.up()).toBe("Error: Maximum temperature reached");
  });

  it("resets the temperature to 20 degrees", function(){
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('shows when energy use is low', function(){
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getEnergyUse()).toBe("low-usage");
  });

  it('shows when energy use is medium', function(){
    expect(thermostat.getEnergyUse()).toBe("medium-usage");
  });

  it('shows when energy use is low', function(){
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getEnergyUse()).toBe("high-usage");
  });
});
