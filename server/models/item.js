var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 5},
    description: {type: String, required: true, minlength: 10},
    OC: {type: String, required: true},
    checked: {type: Boolean, required: true, default: false},
    created_at: {type: Date, required: true, default: Date.now}
})

mongoose.model('Item', ItemSchema);
