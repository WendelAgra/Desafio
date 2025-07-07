// src/routes/vehicle.routes.js
const { Router } = require('express');
const vehicleController = require('../controllers/vehicle.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = Router();

// Todas as rotas de veículo usarão o middleware de autenticação
router.use(authMiddleware);

router.post('/', vehicleController.createVehicle);
router.get('/', vehicleController.getAllVehicles);
router.put('/:id', vehicleController.updateVehicle);
router.delete('/:id', vehicleController.deleteVehicle);
router.patch('/:id/archive', vehicleController.archiveVehicle);
router.patch('/:id/unarchive', vehicleController.unarchiveVehicle);

module.exports = router;