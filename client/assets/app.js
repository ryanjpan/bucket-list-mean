var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })
        .when('/dashboard',{
             templateUrl: 'partials/dash.html',
             controller: 'dashController'
        })
        // .when('/topic/:id',{
        //     templateUrl: 'partials/topic.html',
        //     controller: 'topicController'
        // })
        .when('/user/:id',{
            templateUrl: 'partials/user.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        })
});
