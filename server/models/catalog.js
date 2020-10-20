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

let mongoose = require('mongoose')

let Schema = mongoose.Schema;
let ObjectId = mongoose.ObjectId;

let CatalogSchema = new Schema({
    _id: ObjectId,
    title: String,
    price: Number,
    isDisabled: Boolean
}, { 
    collection: 'catalog'
})

module.exports = mongoose.model('Catalog', CatalogSchema)