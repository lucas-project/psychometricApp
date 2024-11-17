const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const auth = require('../middleware/auth');

// Create subscription
router.post('/subscribe', auth, paymentController.createSubscription);

// Get subscription status
router.get('/status', auth, paymentController.getSubscriptionStatus);

module.exports = router; 