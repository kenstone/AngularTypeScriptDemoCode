var angularModule = angular.module('AngularDemo', []);

angularModule.config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: './App/Partials/ViewOne.html' }).
        when('/FullName', { templateUrl: './App/Partials/ViewTwo.html' }).
        otherwise({
            redirectTo: '/'
        });
});

angularModule.service('fullNameService', AngularDemo.Service.FullNameService);
angularModule.controller('AngularDemoController', AngularDemo.Controller.DemoController);
