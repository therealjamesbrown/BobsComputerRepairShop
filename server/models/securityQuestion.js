/**
 * 
 * ================================
 * ; Title: BCRS PROJECT
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: Application for Bobs Computer Repair Shop.
 * ================================
 * 
 */

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

// Exports the securityQuestions model
module.exports = mongoose.model('securityQuestions', SecurityQuestionSchema)