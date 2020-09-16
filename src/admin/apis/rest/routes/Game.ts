import { Router } from 'express'
import gameController from '@/admin/apis/rest/controllers/gameController'

const router: Router = Router()

router.route('/create-game')
    .post(gameController.addGame)

router.route('/get-game')
    .get(gameController.getGame)

router.route('/delete-game/:id')
    .delete(gameController.deleteGame)

export default router