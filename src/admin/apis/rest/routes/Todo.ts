import { Router } from 'express'
import todoController from '@/admin/apis/rest/controllers/todoController'

const router: Router = Router()

router.route('/create-todo')
    .post(todoController.addTodo)

router.route('/get-todo')
    .get(todoController.gettodo)

router.route('/update-todo')
    .put(todoController.updateTodo)

router.route('/delete-todo/:id')
    .delete(todoController.deleteTodo)

router.route('/get-limit-todo/:page/:perPage')
    .get(todoController.getLimitTodo)

export default router