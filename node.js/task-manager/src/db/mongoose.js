const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age : {
        type: Number,
        validate(value){
            if(value<0){
                throw new Error("must be a positive number...");
            }
        }
    },
    email : {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    password : {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')) {
                throw new Error("password cannot contain 'password'")
            }
        }
    }
})

const me = new User({
    name: "Anish",
    email: "asdfghj",
    age: 52,
    password: '         kjhgfdsa\vbnm,'
})


me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    Description: {
        type: String,
        required: true,
        trim: true  
    },
    Completed : { 
        type: Boolean,
        default: false
    }
})

const add = new Task({
    Description: "gardening",
    Completed: false
})

add.save().then(() => {
    console.log(add)
}).catch((error) => {
    console.log('Error!', error)
})