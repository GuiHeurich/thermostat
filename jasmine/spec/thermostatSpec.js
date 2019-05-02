describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat(20);
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
});
