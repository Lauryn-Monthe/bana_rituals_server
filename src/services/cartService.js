const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllCartItems() {
    return prisma.orderItem.findMany({
        include: { item: true, order: true }
    });
}

async function getCart(orderId) {
    return prisma.orderItem.findMany({
        where: { orderId },
        include: { item: true }
    });
}

async function addToCart(orderId, itemId, quantity, price) {
    return prisma.orderItem.create({
        data: { orderId, itemId, quantity, price }
    });
}

async function updateCartItem(id, data) {
    return prisma.orderItem.update({
        where: { id },
        data
    });
}

async function deleteCartItem(id) {
    return prisma.orderItem.delete({ where: { id } });
}

module.exports = {
    getAllCartItems,
    addToCart,
    getCart,
    updateCartItem,
    deleteCartItem
};
