// src/schemas/vehicle.schema.js
const { z } = require('zod');

const createVehicleSchema = z.object({
  name: z.string({ required_error: 'O nome é obrigatório' }).min(2, 'O nome deve ter pelo menos 2 caracteres'),
  plate: z.string({ required_error: 'A placa é obrigatória' }).length(7, 'A placa deve ter exatamente 7 caracteres'),
});

const updateVehicleSchema = createVehicleSchema.partial();

module.exports = { createVehicleSchema, updateVehicleSchema };