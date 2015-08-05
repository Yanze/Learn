// Code goes here
(function() { //avoid global namesapce(global variables).

var app = angular.module("githubViewer"); //get a reference to github viewer.


var MainController = function($scope, $interval, $location){

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
    //start from here to get github API, user's data, when got it then call onUserComplete function
    //otherwise call onError function.
      if (countdownInterval){
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };


    $scope.username = "Angular";
    $scope.countdown = 5;
    startCountdown();

};

    app.controller("MainController", MainController);
    // registe the controller in module app.
}());
