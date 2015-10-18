/*
 * This file declares the example Hello World directive controller.
 */

'use strict';

define(function () {
    return function ($scope, element, attributes) {
        
        //Function to alert user
        $scope.alert = function () {
            alert("Hello World!");
        };

        //Add further directive logic here
    };
});