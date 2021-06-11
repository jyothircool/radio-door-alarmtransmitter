input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.setGroup(36)
basic.forever(function () {
    if (0 == 0) {
        basic.showIcon(IconNames.Heart)
        radio.sendString("door open")
    } else {
        basic.clearScreen()
        radio.sendString("door closed")
    }
    basic.pause(2000)
})
