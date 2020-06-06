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

const dowork = async () => {
    const num = await add(1,2)
    console.log(num)
    const sum = await add(num, -50)
    console.log(sum)
    const sum2 = await add(sum, 3)
    return sum2
}

dowork().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})