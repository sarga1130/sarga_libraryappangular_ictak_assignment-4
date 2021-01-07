const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ProductDb',{useNewUrlParser:true});
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.hsfxr.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{useNewUrlParser:true});
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    // _id: String,
    bookID: Number,
    book: String,
    author: String,
    genre: String,
    imageUrl : String
});

var Productdata = mongoose.model('product',NewProductSchema);
module.exports = Productdata;
