const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/to-do-database");


const todoSchema = new mongoose.Schema(
{
    content: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
}
)

module.exports= mongoose.model('to-do',todoSchema)