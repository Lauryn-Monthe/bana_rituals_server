function authorizeRole(requiredRole) {
    return (req, res, next) => {
        const user = req.user;

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        if (user.role !== requiredRole) {
            return res.status(403).json({ error: 'Forbidden: insufficient rights' });
        }

        next();
    };
}

module.exports = { authorizeRole };
