var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
    this.index = function(req, res){
        User.find({}, function(err, users){
            if(err){
                console.log(err);
            }
            else{
                res.json(users);
            }
        })
    }
    this.indexExclude = function(req, res){
        User.find({_id: {$ne: req.params.id}}, function(err, users){
            if(err){
                console.log(err);
            }
            else{
                res.json(users);
            }
        })
    }
    this.create = function(req, res){
        User.findOne({name: req.body.name}, function(err, existuser){
            if(existuser == null){
                console.log('user didn\'t exist');
                var user = new User();
                user.name = req.body.name;
                user.save(function(err){
                    if(err){
                        res.json({err: err});
                    }
                    else{
                        console.log(user);
                        res.json(user);
                    }
                })
            }
            else{
                res.json(existuser);
            }
        })

    }
    this.show = function(req,res){
        User.findOne({_id: req.params.id})
            .populate('items')
            .exec(function(err, user){
            if(err){
                res.json({err: err});
            }
            else{
                res.json(user);
            }
        })
    };


}

module.exports = new UsersController();
