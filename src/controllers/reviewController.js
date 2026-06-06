const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function getReviews(req, res) {
    const { itemId } = req.params;
    try {
        const reviews = await prisma.review.findMany({
            where: { itemId: parseInt(itemId) }
        });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
}

async function postReview(req, res) {
    const { id } = req.params;
    const { itemId, author, email, comment, rating } = req.body;

    try {
        if (id) {
            // Logique de MISE À JOUR (PUT)
            const updatedReview = await prisma.review.update({
                where: { id: parseInt(id) },
                data: { author, comment, rating }
            });
            return res.json(updatedReview);
        } else {
            // Logique de CRÉATION (POST)
            const newReview = await prisma.review.create({
                data: { itemId: parseInt(itemId), author, email, comment, rating }
            });
            return res.status(201).json(newReview);
        }
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'opération" });
    }
}

module.exports = { getReviews, postReview };