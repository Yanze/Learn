// Code goes here
(function() { //avoid global namesapce.

var app = angular.module("githubViewer", []);
// to create an module. [] is defining an module,
// otherwise is asking Angular to get a reference to a module called "githubViewer";

var MainController = function($scope, $http){
    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    var onError = function(reason){
        $scope.error = "Could not fetch the user";
    };

    $scope.search = function(username){
      $http.get("https://api.github.com/users/" + username)
         .then(onUserComplete, onError);
    }
           
    $scope.username = "Angular";
    $scope.message = "GitHub Viewer";

};

    app.controller("MainController", ["$scope" ,"$http",MainController]); // registe the controller in module.
}());
