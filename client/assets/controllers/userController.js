app.controller('userController', ['$scope','usersFactory', 'itemsFactory','$location', '$rootScope', '$routeParams',
function(sc, uf, itf, loc, rs, rp) {
    if(!rs.user){
        loc.url('/');
        return;
    }
    function userTagged(item){
        for(var i=0; i < rs.user.items.length; i++){
            if(rs.user.items[i]._id == item._id){
                return true;
            }
        }
        return false;
    }

    var loaduser = function(){
        uf.show(rp.id, function(data){
            sc.userpage = data;
        })
    }
    loaduser();

    sc.updateItem = function(item){
        if(rp.id == rs.user._id || rs.user.name == item.OC || userTagged(item)){
            itf.update(item._id);
        }
        loaduser();
    }
}]);
