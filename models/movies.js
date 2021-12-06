const mongoose=require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required :[true , 'must be provided'],
        trim:true,
        maxlength:[20,'name exceedes 20 characters']
    }
})

module.exports = mongoose.model('movie',movieSchema)