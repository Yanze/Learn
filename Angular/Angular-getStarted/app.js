(function(){

    var app = angular.module("githubViewer", ["ngRoute"]);
// to create an module. [] is defining an module,  there is a dependancy on ngRoute.
// otherwise is asking Angular to get a reference to a module called "githubViewer";

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:username", { // after /:username is treated as a pamameter.
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo: "/main"});
    });

}());
