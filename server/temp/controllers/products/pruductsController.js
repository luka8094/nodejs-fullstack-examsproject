const {database} = require("../../../database/manager/dbConnection")

//get all products
exports.all = async (req, res) =>{
    const allDBProducts = await database.all("SELECT * FROM products;")
    res.json({data: allDBProducts})
}

//create a new product
exports.create = async(req, res) =>{
    const newDBProduct = {name: req.body.name, price: Number(req.body.price)}

    const {changes} = await database.run(`
        INSERT INTO products (name, price) 
        VALUES(?, ?)
    `,[newDBProduct.name, newDBProduct.price])

    if(changes === 1) res.status(204).send("product was created")
    else res.status(500).send("internal server error")
}

//update a product
exports.update = async(req, res) =>{
    console.log("connected to productsDataRouter.patch(...)")
}

//delete a product
exports.delete = async(req, res) => {
    console.log("connected to productsDataRouter.delete(...)")
}
