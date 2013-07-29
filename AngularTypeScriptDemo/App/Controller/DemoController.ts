/// <reference path="../Model/NameModel.ts" />
/// <reference path="../Service/FullNameService.ts" />
/// <reference path="../../Scripts/angular.d.ts" />

module AngularDemo.Controller {

    export interface IDemoScope extends ng.IScope {
        viewModel: DemoController;
    }

    export interface IDemoController {
        names: AngularDemo.Model.NameModel;
        getFullName();
    }

    export class DemoController implements IDemoController {

        static $inject = ['$scope', 'fullNameService', '$location'];
        public names: AngularDemo.Model.NameModel;
       
        constructor(private $scope: IDemoScope, private fullNameService: AngularDemo.Service.FullNameService, private $location: ng.ILocationService) {

            $scope.viewModel = this;

            this.names = new AngularDemo.Model.NameModel();

        }

        getFullName() {
            this.names.fullName = this.fullNameService.getFullName(this.names.firstName, this.names.lastName);
            this.$location.path('/FullName');
        }

    }

}
