import { Schema, model } from 'mongoose'
const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },

}, { timestamps: true })
const Todo = model('Todo', todoSchema, 'Todo')
export default Todo