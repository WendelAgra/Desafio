// Arquivo: src/services/vehicle.service.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class VehicleService {
  async create(data) {
    return prisma.vehicle.create({ data });
  }

  async findAll() {
    return prisma.vehicle.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async update(id, data) {
    return prisma.vehicle.update({ where: { id }, data });
  }

  async delete(id) {
    return prisma.vehicle.delete({ where: { id } });
  }
  
  async toggleStatus(id, status) {
    return prisma.vehicle.update({ where: { id }, data: { status } });
  }

  async getDashboardData() {
    const total = await prisma.vehicle.count();
    const active = await prisma.vehicle.count({ where: { status: true } });
    const inactive = total - active;
    return { total, active, inactive };
  }
}

module.exports = { VehicleService };