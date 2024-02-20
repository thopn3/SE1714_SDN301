import express from 'express';
import { productController } from '../controllers/index.js';

const productRouter = express.Router();

// GET: /products/ -> Fetch all products

productRouter.get('/', productController.getAllProducts);

// GET: /products/:id -> Fetch Product by Id
productRouter.get('/:id', productController.getSingleProduct);

// POST: /products
productRouter.post('/', productController.createProduct);

export default productRouter;