function speedDetector() {
    // Ask the user to input car speed
    let speed = prompt('Input car speed');
    // Convert input to a number
    speed = Number(speed);

    // Case 1: Speed limit is 70 or less → "Ok"
    if (speed <= 70) {
        return 'Ok';

    // Case 2: Speed above 70 but below 130 → calculate demerit points
    // Each 5 km/h above 70 earns 1 point
    } else if (speed >= 70 && speed < 129) {
        return `Points: ${((speed - 70) / 5)}`;

    // Case 3: If speed is 130 or above → license suspended
    } else if (speed >= 130) {
        return 'License suspended';
    }
}

// Show result in alert box
alert(speedDetector());
