let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let paypalWebhookSchema = new Schema({
    payload: { type: String }
}, { 
    collection: 'paypalWebhook'
})

module.exports = mongoose.model('Catalog', CatalogSchema);