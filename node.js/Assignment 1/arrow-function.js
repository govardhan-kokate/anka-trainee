const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true
    }, {
        text: 'Clean Yard ',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTaskToDo(){
        const taskToDo = this.tasks.filter((task) => task.completed === false)
    return taskToDo
}
}
console.log(tasks.getTaskToDo())

