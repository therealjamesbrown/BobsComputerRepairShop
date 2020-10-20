// Install Dependencies

let mongoose = require('mongoose')

// Import Schema 
let Schema = mongoose.Schema
// Import ObjectId
let ObjectId = mongoose.ObjectId

// defines a new schema with id; questionsId and answer.
let SecurityQuestionSchema = new Schema({
    _id: ObjectId,
    questionId: String,
    answer: String
}, {
    collection: "securityQuestions"
})

module.exports = mongoose.model('securityQuestions', SecurityQuestionSchema)