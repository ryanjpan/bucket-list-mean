var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var User = mongoose.model('User');

function ItemsController(){
    this.create = function(req, res){
        var item = new Item();
        item.title = req.body.title;
        item.description = req.body.description;
        item.OC = req.body.OC;
        item.save(function(err){
            if(err){
                res.json({err: err});
            }
            else{
                User.update({_id: {"$in": req.body.appendtousers}}, {"$push": {items: item}} ,{multi: true}, function(err, docs){
                    if(err){
                        res.json({err: err});
                    }
                    else{
                        res.json('successfully created');
                    }
                })
            }
        })
    }
    this.show = function(req,res){
        Item.findOne({_id: req.params.id}, function(err, item){
            if(err){
                res.json({err: err});
            }
            else{
                res.json(item);
            }
        })
    };
    this.update = function(req,res){
        Item.findOne({_id: req.params.id}, function(err, item){
            if(err){
                res.json({err: err});
            }
            else{
                item.checked = !item.checked;
                item.save(function(err){
                    if(err){
                        res.json({err: err});
                    }
                    else{
                        res.json('item updated');
                    }
                })
            }
        })
    }

}

module.exports = new ItemsController();
