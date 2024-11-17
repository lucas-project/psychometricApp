const User = require('../models/user.model');

exports.createSubscription = async (req, res) => {
    try {
        const { plan } = req.body;
        
        // Placeholder for payment processing logic
        // Here you would integrate with a payment provider like Stripe
        
        // Update user subscription status
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { subscription: plan },
            { new: true }
        );
        
        res.json({
            success: true,
            subscription: user.subscription
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getSubscriptionStatus = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('subscription');
        res.json({
            subscription: user.subscription
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}; 