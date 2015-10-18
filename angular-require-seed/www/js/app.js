/*
 * This file declares your angular application.
 * It sets up further dependencies used throughout the application.
 */

'use strict';

define(['angular'], function () {
    return angular.module('MainApp', [
        'ngRoute',              //Angular routings
        'ngResource',           //Angular lazily loading resources
        'angular-loading-bar',  //Automatic loading bar when resources are loaded
        'door3.css',            //Lazily loading css

        'MainApp.filters',      //Custom filters
        'MainApp.factories',    //Custom Factories
        'MainApp.services',     //Custom services
        'MainApp.directives',   //Custom directives
        'MainApp.controllers'   //Custom controllers
    ]);
});