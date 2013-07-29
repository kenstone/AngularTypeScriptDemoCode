var AngularDemo;
(function (AngularDemo) {
    (function (Service) {
        var FullNameService = (function () {
            function FullNameService() {
            }
            FullNameService.prototype.getFullName = function (firstName, lastName) {
                return (firstName || "") + " " + (lastName || "");
            };
            return FullNameService;
        })();
        Service.FullNameService = FullNameService;
    })(AngularDemo.Service || (AngularDemo.Service = {}));
    var Service = AngularDemo.Service;
})(AngularDemo || (AngularDemo = {}));
