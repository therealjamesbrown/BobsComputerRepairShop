/**
 * 
 * ================================
 * ; Title: user.js
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: Sarah Kovar
 * ; Date: 10/21/2020
 * ; Description: User Model
 * ================================
 * 
 */

let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true, unique: true, dropDups: true},
    password: {type: String, required: true},
    firstname: {type: String},
    lastname: {type: String},
    phoneNumber: {type: String},
    address: {type: String},
    email: {type: String},
    isDisabled: {type: Boolean, default: false},
    role: RolesSchema,    // role: {type: String, default: 'standard'}//need to define default
    securityQuestions: [securityQuestions],
    date_created: { type: Date, default: new Date() },
    date_modified: { type: Date }

}, { collection: 'user' })

module.exports = mongoose.model('User', UserSchema);