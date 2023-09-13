import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        const productsCreator = await Product.find({ creator_id: req.creator._id });
        if (productsCreator.length > 0) {
            return res.status(200).json({ success: true, response: productsCreator, message: 'Products Found' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Not Found' });
    } catch (error) {
        return next();
    }
}