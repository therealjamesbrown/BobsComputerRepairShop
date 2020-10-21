/**
 * 
 * ================================
 * ; Title: roles.js
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/20/2020
 * ; Description: Role Model
 * ================================
 * 
 */

let mongoose = require('mongoose')

let Schema = mongoose.Schema;
let ObjectId = mongoose.ObjectId;

let RolesSchema = new Schema({
    //_id: ObjectId, commented this out until we discuss with the team.
    text: String, //this needs updated per the BRCS requirements
    isDisabled: Boolean
}, { 
    collection: 'roles'
})

module.exports = mongoose.model('Roles', RolesSchema)