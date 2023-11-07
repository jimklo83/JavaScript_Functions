console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        for (let i = 0; i >= count; i--) {
            if (i % 2 !== 0) {
                console.log(i)
            }
        }
    } else {
        for (let i = count; i >= 0; i--) {
            if (i % 2 !== 0) {
                console.log(i)
            }
        }
    }
}

printOdds(55)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let aboveSixteen = `Congrats ${name}, you can drive!`
    let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`

    if (age === undefined) {
        console.log(`Sorry, not enough information.`)
    }
    else if (age >= 16) {
        console.log(aboveSixteen)
    } else {
        console.log(belowSixteen)
    }
}

checkAge("Ted", 65)
checkAge("Jennifer", 15)
checkAge()

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkCartesian (x, y) {
    if (x === 0) {
        console.log(`(${x}, ${y}) is on the x axis`)
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the y axis`)
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant I`)
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant II`)
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant III`)
    } else {
        console.log(`(${x}, ${y}) is in Quadrant IV`)
    }
}

checkCartesian(0, 3)
checkCartesian(-9, 0)
checkCartesian(9, 3)
checkCartesian(-9, 3)
checkCartesian(-9, -3)
checkCartesian(9, -3)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && a == c) {
            console.log(`${a}, ${b}, ${c} make an equilateral triangle`)
        } else if (a === b || b === c || a === c) {
            console.log(`${a}, ${b}, ${c} make an isosceles triangle`)
        } else {
            console.log(`${a}, ${b}, ${c} make a scalene triangle`)
        }
    } else {
        console.log(`${a}, ${b}, ${c} make an invalid triangle`)
    }
}

triangle(3, 3, 3,)
triangle(2, 2, 3)
triangle(2, 3, 4)
triangle(2, 2, 4)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function cellPhone(planLimit, day, usage) {
    let remaining = 30 - day
    let dailyUsage = (usage / day).toFixed(3)
    let recommendedUsage = (planLimit / 30).toFixed(3)
    let adjustedUsage = ((planLimit - dailyUsage * day) / remaining).toFixed(3)
    let overage = (dailyUsage * 30 - planLimit).toFixed(2)

    console.log(`${day} days used, ${remaining} days remaining.`)
    console.log(`Average daily usage: ${recommendedUsage}`)

    if (overage > .5) {
        console.log(`You are EXCEEDING your average daily use (${dailyUsage} GB/day),`)
        console.log(`continuing this high usage, you'll exceed your data plan by`)
        console.log(`${overage} GB`)
        console.log(`To stay below your data plan, use no more than ${adjustedUsage} GB/day.`)
    } else if (overage < -.5) {
        console.log(`You are BELOW your daily use allowance (${dailyUsage} GB/day),`)
        console.log(`continuing this low usage, you'll be under your data plan by`)
        console.log(`${overage} GB`)
        console.log(`To maximize your data plan, use ${adjustedUsage} GB/day for this month.`)
    } else {
        console.log(`You are at your average daily use allowance (${dailyUsage} GB/day),`)
        console.log(`Keep using ${dailyUsage} GB/day.`)
    }
}

cellPhone(100, 15, 56)
cellPhone(100, 20, 40)
cellPhone(100, 15, 50)

