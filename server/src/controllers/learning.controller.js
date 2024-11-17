const Learning = require('../models/learning.model');

exports.getAllResources = async (req, res) => {
    try {
        const resources = await Learning.find().sort({ createdAt: -1 });
        res.json(resources);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getResourceById = async (req, res) => {
    try {
        const resource = await Learning.findById(req.params.id);
        
        if (!resource) {
            return res.status(404).json({ msg: 'Resource not found' });
        }
        
        res.json(resource);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Resource not found' });
        }
        res.status(500).send('Server Error');
    }
}; 