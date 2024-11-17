const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['numerical', 'verbal', 'logical', 'personality'] // Add more types as needed
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'medium', 'hard']
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    correctAnswer: mongoose.Schema.Types.Mixed,
    explanation: String,
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        content: String,
        rating: Number,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true,
    discriminatorKey: 'questionType' // This allows us to create different question type models
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question; 