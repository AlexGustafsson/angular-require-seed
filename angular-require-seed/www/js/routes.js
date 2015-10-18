/*
 * This file declares your routes.
 * It refrences all your views found in www/views.
 */

'use strict';

define(['require', 'app',
        //Require view controllers
        'views/default/controller.js',
        'views/helloworld/controller.js'
        //Add further route dependencies here
    ], 
    function (require, app,
        defaultController,
        helloWorldController
        //Add further route dependencies here
    ) {
    
    return app.config(['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider', function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {
            
            $routeProvider.when('/helloworld', {
                templateUrl: 'views/helloworld/index.html',
                controller: helloWorldController,
                css: 'views/helloworld/style.css'
            });
            
            $routeProvider.when('/', {
                templateUrl: 'views/default/index.html',
                controller: defaultController,
                css: 'views/default/style.css'
            });
            
            $routeProvider.otherwise({
                templateUrl: 'views/error/404.html',
                css: 'views/error/style.css'
            });
            
            //The delay in milliseconds before showing the progress when loading resources
            cfpLoadingBarProvider.latencyThreshold = 10;
            //Don't include a "spinner"
            cfpLoadingBarProvider.includeSpinner = false;
            
            //Use the HTML5 History API
            $locationProvider.html5Mode(true);
        }]);
});