/*
 * This file declares your main controller.
 */

'use strict';

define(function () {
    //Set up controller dependencies
    return ["$scope", "$location", "$route",
        function ($scope, $location, $route) {
            
            //Function to handle navigation
            $scope.navigate = function (view) {
                //If the page to visit is the current one
                if (view == $location.$$path)
                    $route.reload();
                else
                    $location.path(view);
            };

            //Add further controller logic here
        }
    ];
});