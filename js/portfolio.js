
var portfolio = angular.module('portfolio', ['ui.router']);
portfolio.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'index.html'

            })
            .state('resume',{
              url:'/resume',
              templateUrl: 'pages/resume.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'pages/projects.html'
              })

            .state('blog', {
                url: '/blog',
                templateUrl: 'pages/blog.html'
              });
              //$urlRouterProvider.otherwise('/');
});

portfolio.controller('cntrl' ,["$scope", "$location", function($scope,$location){
        $scope.changeView = function(view){
            console.log(view);
            $location.path(view);
        }
    }]);
