input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(dryness)
})
function water () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
    basic.pause(1000)
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.B, function () {
    water()
})
let dryness = 0
wuKong.stopAllMotor()
loops.everyInterval(60000, function () {
    dryness = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    Math.map(dryness, 400, 850, 0, 100),
    100
    )
    if (dryness > 550) {
        music.playTone(784, music.beat(BeatFraction.Half))
        water()
    }
})
