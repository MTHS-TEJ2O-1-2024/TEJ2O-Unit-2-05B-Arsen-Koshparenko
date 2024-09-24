/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen
 * Created on: Sep 2024
 * This program measures the temperature of the room in kelvin
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let temp = 0

input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    temp = (temp + 273.15)
    temp = Math.round(temp)
    basic.clearScreen()
    basic.showString('The Temperature is: ' + temp.toString() + 'kelvin.')
})