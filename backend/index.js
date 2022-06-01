import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

// connect to database
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
    // catch error
    ).catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    // starts webserver
    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
    })
})