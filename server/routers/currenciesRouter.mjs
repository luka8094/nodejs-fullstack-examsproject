import {Router} from "express"

const currenciesRouter = Router()

currenciesRouter.get("/api/crypto/list", async (req, res) => {

    console.log("contact with crypto list end-point.")
})

currenciesRouter.get("/api/crypto/:id", async (req, res) => {

    console.log("contact with crypto:id end-point.")
})

export default currenciesRouter