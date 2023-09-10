import Cart from "../models/Cart.js";

export default async (req, res, next) => {
    try {
        const is_cart_user = await Cart.findOne({ _id: req.params.id, user_id: req.user._id });
        if (is_cart_user) {
            return next();
        }

        return res.status(401).json({ success: false, response: null, message: 'Not authorized' });
    } catch (error) {
        return next();
    }
}