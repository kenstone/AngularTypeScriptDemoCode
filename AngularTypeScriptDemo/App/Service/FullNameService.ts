/// <reference path="../../Scripts/angular.d.ts" />

module AngularDemo.Service {

    export class FullNameService {

        constructor () { }

        getFullName(firstName: string, lastName: string) {
            return (firstName || "") + " " + (lastName || "");
        }
    }
}
