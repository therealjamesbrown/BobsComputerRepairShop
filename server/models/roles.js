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
    _id: ObjectId,
    text: String,
}, { 
    collection: 'roles'
})

module.exports = mongoose.model('Roles', CatalogSchema)