var mongoose = require('mongoose');
var obid = mongoose.Schema.Types.ObjectId;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    items: [{type: obid, ref: "Item"}]
})

mongoose.model('User', UserSchema);
