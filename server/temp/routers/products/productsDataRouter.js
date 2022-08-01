const {Router} = require("express")
const productsController = require("../../controllers/products/pruductsController")

const productsRouter = Router()

productsRouter.get("/products", productsController.all)

productsRouter.post("/products", productsController.create)

productsRouter.patch("/products", productsController.update)

productsRouter.delete("/products", productsController.delete)

export default productsRouter