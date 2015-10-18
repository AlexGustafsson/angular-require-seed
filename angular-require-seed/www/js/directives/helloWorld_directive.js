/*
 * This file declares an example Hello World directive.
 */

'use strict';

define(function (require) {
    return function () {
        return {
            restrict: "AE",                                     //Allow use through element tag and attribute
            replace: "true",                                    //Replace the written HTML with the template (maximum support - rewrites custom elements)
            scope: true,                                        //Isolate scope
            templateUrl: 'partials/helloWorld/index.html',      //Template the partial
            css: 'partials/helloWorld/style.css',               //Load style
            link: require("partials/helloWorld/controller.js")  //Directive controller
        };
    }
});