DFRobotMaqueenPlusV2.onIrDatagram(function (message) {
    if (message == 17) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
    }
    if (message == 25) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        basic.pause(200)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 100)
    }
    if (message == 20) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
        basic.pause(200)
    }
    if (message == 22) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
        basic.pause(200)
    }
    if (message == 2) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
})
DFRobotMaqueenPlusV2.init()
DFRobotMaqueenPlusV2.ledRainbow(1, 360)
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
