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

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*import over Catalog so we can use items from the catalog to
 in the line items. 
*/
const Catalog = require('./catalog').schema;
let ObjectId = mongoose.ObjectId;

let invoiceSchema = new Schema({
    _id:           ObjectId,
    lineItem:      [Catalog],
    partsAmount:   { type: Number},
    laborAmount:   { type: Number },
    lineItemTotal: { type: Number },
    total:         { type: Number },
    username:      { type: String },
    orderDate:     { type: String}
}, { 
    collection: 'invoice'
})

module.exports = mongoose.model('Invoice', invoiceSchema)