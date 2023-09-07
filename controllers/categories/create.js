import Category from "../../Models/Category.js";


export default async (req, res, next) => {
    try {
        let data = req.body
        console.log(req.body);
        let one = await Category.create(data)
        return res.status(201).json({
            success: true,
            response: one,
            message: 'Category created'
        })
    } catch (error) {
        return next(error)
    }
}
