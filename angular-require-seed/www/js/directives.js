/*
 * This file declares your directives.
 * It refrences all your directives found in www/js/directives.
 */

'use strict';

define(["require", "ngCss", 
        'directives/helloWorld_directive'
        //Add further directive dependencies here
    ], 
    function (require, css,
        helloWorldDirective
        //Add further directive dependencies here
    ) {
        //Define the MainApp.directives module. Require door3.css for lazily loading css.
        require('angular').module('MainApp.directives', []).
            directive('helloWorld', helloWorldDirective); //An example directive

        //Here you can add further directives if necessary.
});