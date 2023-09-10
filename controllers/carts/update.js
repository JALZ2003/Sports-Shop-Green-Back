import Cart from "../../models/Cart.js";

export default async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (cart) {
            return res.status(200).json({ success: true, response: cart, message: 'Cart updated successfully' });
        }

        return res.status(404).json({ success: true, response: null, message: 'Cart not found' });
    } catch (error) {
        return next();
    }
}