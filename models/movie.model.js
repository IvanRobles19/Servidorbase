const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    nombre:{type:String},
    director:{type:String},
    ano:{type:Number},
    duracion:{type:String},
    genero:{type:Number},
});

module.exports = mongoose.model('Movie', movieSchema, 'movie');