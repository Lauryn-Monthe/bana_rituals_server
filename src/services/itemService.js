const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllItems() {
    return prisma.item.findMany();
}

async function getItemsByOrder(order_id) {
    return prisma.item.findMany({
        where: { order_id: Number(order_id) },
        include: { product: true }
    });
}

async function createItem(data) {
    return prisma.item.create({ data });
}

async function updateItem(id, data) {
    return prisma.item.update({
        where: { id: Number(id) },
        data
    });
}

async function deleteItem(id) {
    return prisma.item.delete({ where: { id: Number(id) } });
}

module.exports = {
    getAllItems,
    getItemsByOrder,
    createItem,
    updateItem,
    deleteItem
};
