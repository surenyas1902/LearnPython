// const single = function(x) {
//     return x
// }

// const square = (x) => {
//     return x * x
// }

// const triple = (x) => x * x * x //Used only for single statements

// console.log(triple(10))

const event = {
    name : 'Birthday',
    guestList: ['Surendiran', 'Yaswanth', 'Somnath'],
    printGuestList: function() {
        console.log("Guest list for "+ this.name)
    },
    printGuestLists: () => {
        console.log("Guest list for "+ this.name) // Cannot access this in arrow functions
    },
    printGuestListList() {
        console.log("Guest List for "+ this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending "+ this.name) // Arrow functions doesnt use this variable
        })
    }
}
event.printGuestList()
event.printGuestLists()
event.printGuestListList()