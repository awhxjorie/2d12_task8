basic.forever(function () {
    if (input.compassHeading() < 45 && input.compassHeading() > 0) {
        basic.showString("N")
    } else if (input.compassHeading() > 45 && input.compassHeading() <= 135) {
        basic.showString("E")
    } else if (input.compassHeading() > 135 && input.compassHeading() <= 225) {
        basic.showString("S")
    } else if (input.compassHeading() > 225 && input.compassHeading() <= 315) {
        basic.showString("W")
    } else if (input.compassHeading() > 315 && input.compassHeading() <= 360) {
        basic.showString("N")
    } else {
    	
    }
})
