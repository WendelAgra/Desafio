// Arquivo: src/controllers/vehicle.controller.js

const { VehicleService } = require('../services/vehicle.service.js');
const { createVehicleSchema, updateVehicleSchema } = require('../schemas/vehicle.schema.js');

const vehicleService = new VehicleService();

// Função para criar um veículo
exports.createVehicle = async (req, res) => {
  try {
    const data = createVehicleSchema.parse(req.body);
    const vehicle = await vehicleService.create(data);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: "Dados inválidos", details: error.errors });
  }
};

// Função para listar todos os veículos
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.findAll();
    const dashboardData = await vehicleService.getDashboardData();
    res.json({ vehicles, dashboard: dashboardData });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar veículos." });
  }
};

// Função para atualizar um veículo
exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const data = updateVehicleSchema.parse(req.body);
    const vehicle = await vehicleService.update(id, data);
    res.json(vehicle);
  } catch (error) {
    res.status(400).json({ message: "Dados inválidos", details: error.errors });
  }
};

// Função para deletar um veículo
exports.deleteVehicle = async (req, res) => {
  try {
    await vehicleService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar veículo." });
  }
};

// Função para arquivar um veículo
exports.archiveVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.toggleStatus(req.params.id, false);
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ message: "Erro ao arquivar veículo." });
  }
};

// Função para desarquivar um veículo
exports.unarchiveVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.toggleStatus(req.params.id, true);
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ message: "Erro ao desarquivar veículo." });
  }
};