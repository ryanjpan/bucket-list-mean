app.controller('dashController', ['$scope','usersFactory', 'itemsFactory','$location', '$rootScope',
function(sc, uf, itf, loc, rs) {
    if(!rs.user){
        loc.url('/');
        return;
    }
    sc.users = [];
    var index = function(){
        uf.index(rs.user._id, function(data){
            sc.users = data;
        })
    }
    var loaduser = function(){
        uf.show(rs.user._id, function(data){
            rs.user = data;
        })
    }
    index();
    loaduser();

    sc.addItem = function(){
        var appendtousers = [rs.user._id];
        if(sc.newItem.taggedUser){
            appendtousers.push(sc.newItem.taggedUser);
        }
        sc.newItem.OC = rs.user.name;
        sc.newItem.appendtousers = appendtousers;
        itf.create(sc.newItem);
        sc.newItem = {}
        loaduser();
    }

    sc.updateItem = function(id){
        itf.update(id);
        loaduser();
    }
}]);
