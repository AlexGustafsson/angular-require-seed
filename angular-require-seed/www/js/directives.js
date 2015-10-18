/*
 * This file declares your directives.
 * It refrences all your directives found in www/js/directives.
 */

'use strict';

define(function (require) {
    //Define the MainApp.directives module. Require door3.css for lazily loading css.
    require('angular').module('MainApp.directives', ["door3.css"]).
        directive('helloWorld', require('directives/helloWorld_directive')); //An example directive

    //Here you can add further directives if necessary.
});