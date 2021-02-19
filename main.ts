// Function to convert an x / y coordinate into a value from 0 - 255
function getAmount (x: number, subtract: number, end: number, abs: boolean) {
    newX = x - subtract
    rEnd = end - subtract
    if (abs) {
        newX = Math.abs(newX)
    }
    bKL9 = newX / rEnd
    newX = Math.floor(bKL9 * 255)
    return newX
}
let bKL9 = 0
let rEnd = 0
let newX = 0
radio.setGroup(255)
radio.setTransmitPower(7)
led.enable(false)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P4) < 400) {
        radio.sendValue("x", getAmount(pins.analogReadPin(AnalogPin.P4), 399, 399, false))
    } else if (pins.analogReadPin(AnalogPin.P4) > 800) {
        radio.sendValue("x", getAmount(pins.analogReadPin(AnalogPin.P4), 800, 223, false))
    } else {
        radio.sendValue("x", 0)
    }
    if (pins.analogReadPin(AnalogPin.P3) < 400) {
        radio.sendValue("y", getAmount(pins.analogReadPin(AnalogPin.P3), 399, 399, false))
    } else if (pins.analogReadPin(AnalogPin.P3) > 800) {
        radio.sendValue("y", getAmount(pins.analogReadPin(AnalogPin.P3), 800, 223, false))
    } else {
        radio.sendValue("y", 0)
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendValue("z", 1)
    } else {
        radio.sendValue("z", 0)
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        radio.sendValue("aa", 1)
    } else {
        radio.sendValue("aa", 0)
    }
    if (pins.digitalReadPin(DigitalPin.P9) == 0) {
        radio.sendValue("bb", 1)
    } else {
        radio.sendValue("bb", 0)
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        radio.sendValue("xx", 1)
    } else {
        radio.sendValue("xx", 0)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendValue("yy", 1)
    } else {
        radio.sendValue("yy", 0)
    }
})
