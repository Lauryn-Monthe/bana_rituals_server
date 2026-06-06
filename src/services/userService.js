const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAdmins() {
    return prisma.user.findMany({ where: { role: 'ADMIN' } });
}

async function getUsers() {
    return prisma.user.findMany({ where: { role: 'USER' } });
}

async function getUserById(id) {
    return prisma.user.findUnique({ where: { id: Number(id) } });
}

async function createUser(data) {
    return prisma.user.create({ data });
}

async function updateUser(id, data) {
    return prisma.user.update({ where: { id: Number(id) }, data });
}

async function deleteUser(id) {
    return prisma.user.delete({ where: { id: Number(id) } });
}

module.exports = { getUsers, getAdmins, getUserById, createUser, updateUser, deleteUser };
