let mongoose = require('mongoose')

let Schema = mongoose.Schema;
let ObjectId = mongoose.ObjectId;

let CatalogSchema = new Schema({
    _id: ObjectId,
    title: String,
    price: Number,
    isDisabled: Boolean
})

module.exports = mongoose.model('Catalog', CatalogSchema)