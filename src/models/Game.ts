import { Schema, model } from 'mongoose'
const gameSchema = new Schema({
    gameName: {
        type: String,
        required: true,
        unique: true,
    },

}, { timestamps: true })
const Game = model('Game', gameSchema, 'Game')
export default Game