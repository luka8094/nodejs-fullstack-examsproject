const {Router} = require("express")
const usersController = require("../../controllers/users/usersController")

const usersRouter = Router()

usersRouter.get("/products", usersController.all)

usersRouter.post("/products", usersController.create)

usersRouter.patch("/products", usersController.update)

usersRouter.delete("/products", usersController.delete)

export default usersRouter