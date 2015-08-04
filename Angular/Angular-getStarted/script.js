// Code goes here
(function() { //avoid global namesapce.

var app = angular.module("githubViewer", []);
// to create an module. [] is defining an module,
// otherwise is asking Angular to get a reference to a module called "githubViewer";

var MainController = function(
    $scope, $http, $interval, $log, $anchorScroll, $location){

    var onUserComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
              .then(onRepos, onError);
    };

    var onRepos = function(response){
      $scope.repos = response.data;
      $location.hash("userDetails");
      $anchorScroll();
    };

    var onError = function(reason){
        $scope.error = "Could not fetch the data";
    };

    var decrementCountdown = function(){
        $scope.countdown -= 1;
        if ($scope.countdown < 1){
            $scope.search($scope.username);
        }
    };

    var countdownInterval = null;
    var startCountdown = function(){
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function(username){
      $log.info("Search for " + username);
      $http.get("https://api.github.com/users/" + username)
         .then(onUserComplete, onError);

      if (countdownInterval){
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
      }
    };


    $scope.username = "Angular";
    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count"; // - decrement + increment
    $scope.countdown = 5;
    startCountdown();

};

    app.controller("MainController", ["$scope" ,"$http", "$interval", "$log", "$anchorScroll", "$location", MainController]); // registe the controller in module.
}());
