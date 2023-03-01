const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect("mongodb://localhost/photoDenemeler");

mongoose.set('strictQuery', false);

const PhotoSchema = new Schema({
    title: String,
    description: String
});


const Photo = mongoose.model("Photo", PhotoSchema);

