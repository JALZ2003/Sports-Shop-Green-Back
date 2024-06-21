export default (req, res, next) => {
    if (req.user.role === 1 || req.user.role === 2) {
        return next();
    }
    return res.status(401).json({ success: false, response: null, messages: ['Not authorized'] });
}