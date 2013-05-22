/// <reference path="../Model/NameModel.ts" />
/// <reference path="../Service/FullNameService.ts" />
/// <reference path="../../Scripts/angular.d.ts" />

module AngularDemo.Controller {

    export interface IDemoScope extends ng.IScope {
        names: AngularDemo.Model.NameModel;
        getFullName: Function;
    }

    export class DemoController {

        constructor(private $scope: IDemoScope, private fullNameService: AngularDemo.Service.FullNameService, private $location: ng.ILocationService) {

            $scope.names = new AngularDemo.Model.NameModel();

            $scope.getFullName = () => {

                $scope.names.fullName = fullNameService.getFullName($scope.names.firstName, $scope.names.lastName);

                $location.path('/FullName');
            };

        }

    }

}
