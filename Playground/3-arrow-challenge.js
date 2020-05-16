const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo: function() {
        return this.tasks.filter((data) => data.completed === false)
    }
}

console.log(tasks.getTasksToDo())