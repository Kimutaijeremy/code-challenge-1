function speedDetector() {
    let speed = prompt('Input car speed')
    speed = Number(speed)
    if (speed <=70) {
        return 'Ok'
    } else if (speed >=70 && speed <129) {
        return `Points: ${((speed - 70)/5)}`
    } else if (speed >=130) {
        return 'License suspended'
    }
}
alert(speedDetector())