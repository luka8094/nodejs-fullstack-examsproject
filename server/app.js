import "dotenv/config"
import express from "express"
import session from "express-session"
import path from "path"
import http from "http"
import {Server} from "socket.io"
import usersRouter from "./routers/usersRouter.mjs"
import {axiosNode} from "./utils/stocksClient.mjs"
import {mailNode} from "./utils/mailClient.mjs"

console.log(process.env.SECRET_ACCESS_TOKEN, axiosNode, mailNode)

const app = express()
const PORT = process.env.PORT || 5000
const sesh = session({
    secret: process.env.SECRET_ACCESS_TOKEN,
    resave: false,
    saveUninitialized: true
})

app.use(express.urlencoded({extended : true}))
app.use(sesh)
app.use(express.static(path.resolve("../client/zeusdex/public")))
app.use(usersRouter)

const server = http.createServer(app)
const io = new Server(server)
const wrap = midWare => (socket, next) => midWare(socket.request, {}, next)

io.use(wrap(sesh))
io.on("connection", (socket) => {
    socket.on("sent", ({data}) => {
        const check = "connected"
        io.emit("display", {data, check})
    })
})

server.listen(PORT, () => console.log("Server running on: ", PORT))