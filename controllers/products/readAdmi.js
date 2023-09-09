import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        let products = await Product.find().populate("category_id")
        if (products) {
            return res.status(200).json({
                response: products,
                message: 'Products found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'Products not found'
            })
        }
    } catch (error) {
        next(error)
    }
}