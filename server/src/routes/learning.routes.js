const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learning.controller');
const auth = require('../middleware/auth');

// Get all learning resources
router.get('/', learningController.getAllResources);

// Get resource by id
router.get('/:id', learningController.getResourceById);

module.exports = router; 