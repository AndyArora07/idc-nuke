input.onButtonPressed(Button.A, function () {
    cakLandPump.start(Pump.RIGHT, 100)
    cakLandPump.startDuration(Pump.RIGHT, 100, 10)
})
input.onButtonPressed(Button.B, function () {
    cakLandMotor.turnLeft(100)
})
basic.forever(function () {
	
})
