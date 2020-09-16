import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const dbName: string = process.env.DB_NAME || 'Todo'

class Connect {
    uri!: string
    constructor() {
        this.uri = `mongodb://127.0.0.1:27017/${dbName}`
    }
    async connect() {
        try {
            await connect(this.uri, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false

            })
            console.log('Connect to: ', this.uri)
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default Connect