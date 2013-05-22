var AngularDemo;
(function (AngularDemo) {
    (function (Controller) {
        var DemoController = (function () {
            function DemoController($scope, fullNameService, $location) {
                this.$scope = $scope;
                this.fullNameService = fullNameService;
                this.$location = $location;
                $scope.names = new AngularDemo.Model.NameModel();
                $scope.getFullName = function () {
                    $scope.names.fullName = fullNameService.getFullName($scope.names.firstName, $scope.names.lastName);
                    $location.path('/FullName');
                };
            }
            DemoController.$inject = [
                '$scope', 
                'fullNameService', 
                '$location'
            ];
            return DemoController;
        })();
        Controller.DemoController = DemoController;        
    })(AngularDemo.Controller || (AngularDemo.Controller = {}));
    var Controller = AngularDemo.Controller;
})(AngularDemo || (AngularDemo = {}));
