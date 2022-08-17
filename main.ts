input.onButtonPressed(Button.A, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 2)
})
input.onButtonPressed(Button.AB, function () {
    ContinuousServo.spin_other_way(AnalogPin.P0)
})
input.onButtonPressed(Button.B, function () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 86)
})
basic.showLeds(`
    # . # . .
    . . . # .
    . . . . .
    # # . . .
    . . . . #
    `)
basic.forever(function () {
	
})
