import Products from "../models/product.js";
// Operation CRUD -> Products

// C: Create a new Product
const create = async({name, price, description, category})=>{
    try {
        const newProduct = await Products.create({name, price, description, category});
        return newProduct._doc;
    } catch (error) {
        throw new Error(error.toString());
    }
}

// R: Fetch all Products
const fetchAll = async()=>{
    try {
        return await Products.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

// R: Fetch a single Product by Id
const fetchById = async(id)=>{
    try {
        return await Products.find({_id: id}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}


export default {
    create,
    fetchAll,
    fetchById
}