import { Request, Response } from 'express'
import Todo from '@/models/Todo'


const todoController = {
    //Syntax Create data
    addTodo: async (req: Request, res: Response) => {
        const { name } = req.body
        // console.log(name)
        try {
            const createTodo = new Todo({
                name
            })
            await createTodo.save()
            res.status(200).json({ createTodo })
        } catch (error) {
            throw new Error(error)
        }
    },

    //Syntax Query data
    gettodo: async (req: Request, res: Response) => {
        try {
            const getTodos = await Todo.find()
            res.status(200).json({ getTodos })
        } catch (error) {
            throw new Error(error)
        }
    },

    //Syntac update data

    updateTodo: async (req: Request, res: Response) => {
        const { todoId, name } = req.body
        try {
            const updateTodos = await Todo.findByIdAndUpdate(todoId, {
                $set: {
                    name
                }
            }, { runValidators: true, new: true })
            res.status(200).json({ updateTodos })
        } catch (error) {
            throw new Error(error)
        }
    },

    //Syntax Delete data

    deleteTodo: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await Todo.findByIdAndDelete(id)
            res.status(200).json('Delete succeed')
        } catch (error) {
            throw new Error(error)
        }
    },
    //switch page for limit
    getLimitTodo: async (req: Request, res: Response) => {
        const page = parseInt(req.params.page, 10)
        const perPage = parseInt(req.params.perPage, 10)
        try {
            const todos = await Todo.find()
                .skip((page * perPage) - perPage)
                .limit(perPage)
            res.status(200).json({ todos })
        } catch (error) {
            throw new Error(error)
        }
    }

}
export default todoController 