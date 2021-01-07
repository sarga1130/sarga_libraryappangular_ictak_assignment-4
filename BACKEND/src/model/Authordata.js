const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ProductDb',{useNewUrlParser:true});
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.hsfxr.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{useNewUrlParser:true});
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    // _id: String,
    authorID: Number,
    authorname: String,
    genre: String,
    imageUrl : String
});

var Authordata = mongoose.model('author',NewAuthorSchema);
module.exports = Authordata;