import { Request, Response } from 'express'
import Game from '@/models/Game'

const gameController = {
    addGame: async (req: Request, res: Response) => {
        const { gameName } = req.body
        try {
            const createGames = new Game({
                gameName
            })
            await createGames.save()
            res.status(200).json({ createGames })
        } catch (error) {
            throw new Error(error)
        }
    },
    getGame: async (req: Request, res: Response) => {
        try {
            const getGames = await Game.find()
            res.status(200).json({ getGames })
        } catch (error) {
            throw new Error(error)
        }
    },
    updateGame: async (req: Request, res: Response) => {
        const { gameId, gameName } = req.body
        try {
            const updateGames = await Game.findByIdAndUpdate(gameId, {
                $set: {
                    gameName
                }
            }, { runValidators: true, new: true })
            res.status(200).json({ updateGames })
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteGame: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await Game.findByIdAndDelete(id)
            res.status(200).json('Delete Succeed')
        } catch (error) {
            throw new Error(error)
        }
    },
    getLimitGame: async (req: Request, res: Response) => {
        const gpage = parseInt(req.params.gpage, 10)
        const pergPage = parseInt(req.params.pergPage, 10)
        try {
            const games = await Game.find()
                .skip((gpage * pergPage) - pergPage)
                .limit(pergPage)
            res.status(200).json({ games })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default gameController