/// <reference path="../../Scripts/angular.d.ts" />

// Module
module AngularDemo.Service {

    // Class
    export class FullNameService {
        // Constructor
        constructor () { }

        getFullName(firstName: string, lastName: string) {
            return (firstName || "") + " " + (lastName || "");
        }
    }
}
