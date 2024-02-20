import { productDAO } from "../repositories/index.js";

// Fetch all Products
// GET: /products
const getAllProducts = async(req, res) => {
    try {
        res.status(200).json(await productDAO.fetchAll());
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

// Fetch a single Product
// GET: /products/1
const getSingleProduct = async(req, res) => {
    try {
        res.status(200).json(await productDAO.fetchById(req.params.id));
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

// Create a new Product
// POST: /products
const createProduct = async(req, res)=>{
    try {
        // Get data from Request body
        const {name, price, description, category} = req.body;
        const result = await productDAO.create({name, price, description, category});
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }
}

export default{
    getAllProducts,
    createProduct,
    getSingleProduct
}