const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllOrders() {
    return prisma.order.findMany({
        include: { items: { include: { item: true } }, user: true }
    });
}

async function getOrderById(id) {
    return prisma.order.findUnique({ where: { id: Number(id) }, include: { user: true, items: true } });
}

async function createOrder(data, user) {
    if (user) {
        return prisma.order.create({
            data: {
                userId: user.id,
                total: data.total,
                status: 'pending',
                items: {
                    create: data.items
                }
            },
            include: { items: true }
        });
    } else {
        return prisma.order.create({
            data: {
                guestEmail: data.guestEmail,
                guestName: data.guestName,
                total: data.total,
                status: 'pending',
                items: {
                    create: data.items
                }
            },
            include: { items: true }
        });
    }
}

async function getUserOrders(userId) {
    return prisma.order.findMany({
        where: { userId },
        include: { items: { include: { item: true } } }
    });
}

async function updateOrder(id, data) {
    return prisma.order.update({ where: { id: Number(id) }, data });
}

async function deleteOrder(id) {
    return prisma.order.delete({ where: { id: Number(id) } });
}

module.exports = { getAllOrders, getUserOrders, getOrderById, createOrder, updateOrder, deleteOrder };
