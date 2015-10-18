/*
 * This file sets up RequireJS dependencies / resources and bootstraps / starts your application.
 * It refrences all external javascript libraries and resources.
 */

'use strict';

require.config({
    paths: {
        angular: '../lib/angular/angular',                          //Angular JS
        ngRoute: '../lib/angular-route/angular-route',              //Angular routings
        ngResource: "../lib/angular-resource/angular-resource",     //Angular lazily loading resources
        ngProgress: "../lib/angular-loading-bar/build/loading-bar", //Automatic loading bar when resources are loaded
        ngCss: "../lib/angular-css/angular-css",                    //Lazily loading css
        jquery: '../lib/jquery/dist/jquery',                        //JQuery
        text: '../lib/requirejs-text/text',                         //Lazily load text resources
        async: '../lib/async/lib/async',                            //Async JS for handling flows
    },
    shim: {                                                         //Shim sets up non-supported libraries to work with Require JS
        'angular' : {
            exports: 'angular'
        },
        'ngRoute': {
            deps: ["angular"]
        },
        "ngResource": {
            deps: ["angular"]
        },
        "ngProgress": {
            deps: ["angular"]
        },
        "ngCss": {
            deps: ["angular"]
        },
        "async": {
            exports: "async"
        },
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";

//Set up dependencies and bootstrap / start application
require([
    // Add additional dependencies
    'angular',
    'app',
    'async',
    'controllers',
    'directives',
    'filters',
    'jquery',
    'ngCss',
    'ngProgress',
    'ngResource',
    'ngRoute',
    'routes',
    'services',
    'factories',
], function () {
    angular.bootstrap(document, ['MainApp']);
});