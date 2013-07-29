var AngularDemo;
(function (AngularDemo) {
    (function (Controller) {
        var DemoController = (function () {
            function DemoController($scope, fullNameService, $location) {
                this.$scope = $scope;
                this.fullNameService = fullNameService;
                this.$location = $location;
                $scope.viewModel = this;

                this.names = new AngularDemo.Model.NameModel();
            }
            DemoController.prototype.getFullName = function () {
                this.names.fullName = this.fullNameService.getFullName(this.names.firstName, this.names.lastName);
                this.$location.path('/FullName');
            };
            DemoController.$inject = ['$scope', 'fullNameService', '$location'];
            return DemoController;
        })();
        Controller.DemoController = DemoController;
    })(AngularDemo.Controller || (AngularDemo.Controller = {}));
    var Controller = AngularDemo.Controller;
})(AngularDemo || (AngularDemo = {}));
