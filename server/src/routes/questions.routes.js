const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller');
const auth = require('../middleware/auth');

// Get all question types
router.get('/types', questionsController.getQuestionTypes);

// Get questions by type
router.get('/type/:typeId', auth, questionsController.getQuestionsByType);

// Get single question
router.get('/:id', auth, questionsController.getQuestion);

module.exports = router; 