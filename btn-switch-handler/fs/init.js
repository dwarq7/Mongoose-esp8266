load('api_config.js');
load('api_events.js');
load('api_gpio.js');

let pinButton = 12; //D6
let pinLed = Cfg.get('pins.led');
GPIO.set_mode(pinLed, GPIO.MODE_OUTPUT);

GPIO.set_mode(pinButton, GPIO.MODE_INPUT);
GPIO.set_pull(pinButton, GPIO.PULL_DOWN);

GPIO.set_int_handler(pinButton, GPIO.INT_EDGE_ANY, function(){
  GPIO.write(pinLed, GPIO.read(pinButton));
  print("read(", pinButton, ") == " , GPIO.read(pinButton));
  
}, null);
GPIO.enable_int(pinButton);
