const calculateTip = (total, tipPercent = 25) => total + (total * (tipPercent / 100))

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        if (a <0 || b< 0) {
            return reject('One of the Number is negative')
        }
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}