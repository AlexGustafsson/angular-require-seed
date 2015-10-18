/*
 * This file declares your main controller.
 */

'use strict';

define(function () {
    //Set up controller dependencies
    return ["$scope", "$location", "$route", "$version", "fooBar",
        function ($scope, $location, $route, $version, fooBar) {
                        
            //"version" is the example Version service declared in www/js/services/version_factory
            $scope.version = $version
                  
            $scope.testFactory = function () {
                //"fooBar" is the example factory declared in www/js/factories/fooBar_factory
                var myFooBar = new fooBar("Argument 1", "Argument 2");

                myFooBar.promptPrivate();
                myFooBar.promptPublic();

                myFooBar.publicFoo = "Not Foo";
                myFooBar.publicBar = "Not Bar";

                myFooBar.promptPrivate();
                myFooBar.promptPublic();
            }

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