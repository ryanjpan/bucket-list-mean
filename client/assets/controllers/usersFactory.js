app.factory('usersFactory', ['$http', function($http) {
    var users = [];
    var user = {};
    function usersFactory(){
        this.create = function(newUser, callback){
            $http.post('/user', newUser).then(function(json){
                callback(json.data);
            });
        }
        this.show = function(id, callback){
            $http.get('/user/' + id).then(function(json){
                user = json.data;
                callback(json.data);
            })
        }
        this.index = function(userid, callback){
            $http.get('/users/exclude/'+userid).then(function(json){
                users = json.data;
                callback(json.data);
            })
        }


    }
    return new usersFactory();
}]);
