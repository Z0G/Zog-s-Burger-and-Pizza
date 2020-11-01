const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId(),
    name: String,
    image: String,
    price: Number,
    size: String
})


// const Schema = mongoose.Schema

// const menuSchema =  new Schema({
//     name: { type: String, required: true },
//     image: { type: String, required: true },
//     price: { type: Number, required: true },
//     size: { type: String, required: true }
// })

module.exports = mongoose.model('Menu', menuSchema)