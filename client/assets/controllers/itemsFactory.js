app.factory('itemsFactory', ['$http', function($http) {
    var users = [];
    var user = {};
    function itemsFactory(){
        this.create = function(newItem, callback){
            $http.post('/item', newItem).then(function(json){
                //console.log(json);
            });
        }
        this.show = function(id, callback){
            $http.get('/item/' + id).then(function(json){
                user = json.data;
                callback(json.data);
            })
        }
        this.update = function(id){
            $http.put('/item/' + id).then(function(json){
                //console.log(json);
            })
        }


    }
    return new itemsFactory();
}]);
