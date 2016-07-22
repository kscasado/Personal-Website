
var portfolio = angular.module('portfolio', ['ui.router']);
portfolio.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'index.html'

            })
            .state('resume',{
              url:'/resume',
              controller:'pdfCtrl',
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
    portfolio.controller('pdfCtrl', function($scope) {

      $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
      $scope.pdfUrl = 'res/resume.pdf';
      $scope.scroll = 0;
      $scope.loading = 'loading';

      $scope.getNavStyle = function(scroll) {
        if(scroll > 100) return 'pdf-controls fixed';
        else return 'pdf-controls';
      }

      $scope.onError = function(error) {
        console.log(error);
      }

      $scope.onLoad = function() {
        $scope.loading = '';
      }

      $scope.onProgress = function(progress) {
        console.log(progress);
      }

    });
