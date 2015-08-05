// Code goes here
(function() { //avoid global namesapce(global variables).

var app = angular.module("githubViewer"); //get a reference to github viewer.


var UserController = function($scope, github, $routeParams){

    var onUserComplete = function(data){
    //when this function called, we received user's repos_url data
    //succeeded call onRepos function, otherwise call onError function.
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError); // when $http is completed, execute the returned promise.
    };

    var onRepos = function(data){
      $scope.repos = data;
    };

    var onError = function(reason){
    // when is error, this function get called.
        $scope.error = "Could not fetch the data";
    };




    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count"; // - decrement + increment
    github.getUser($scope.username).then(onUserComplete, onError);

};

    app.controller("UserController", UserController);
    // registe the controller in module app.
}());
