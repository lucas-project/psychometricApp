const Question = require('../models/question.model');

exports.getQuestionTypes = async (req, res) => {
    try {
        const types = [
            {
                id: 'numerical',
                title: 'Numerical Reasoning',
                description: 'Practice mathematical and statistical problems',
                totalQuestions: await Question.countDocuments({ type: 'numerical' })
            },
            {
                id: 'verbal',
                title: 'Verbal Reasoning',
                description: 'Enhance your comprehension and analytical skills',
                totalQuestions: await Question.countDocuments({ type: 'verbal' })
            },
            {
                id: 'logical',
                title: 'Logical Reasoning',
                description: 'Test your problem-solving abilities',
                totalQuestions: await Question.countDocuments({ type: 'logical' })
            },
            {
                id: 'personality',
                title: 'Personality Assessment',
                description: 'Understand your workplace behavior',
                totalQuestions: await Question.countDocuments({ type: 'personality' })
            }
        ];
        
        res.json(types);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getQuestionsByType = async (req, res) => {
    try {
        const questions = await Question.find({ 
            type: req.params.typeId 
        }).select('-correctAnswer'); // Exclude correct answer from response
        
        res.json(questions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        
        if (!question) {
            return res.status(404).json({ msg: 'Question not found' });
        }
        
        res.json(question);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Question not found' });
        }
        res.status(500).send('Server Error');
    }
}; 