/*
 * This file declares an example Foo Bar factory.
 */

'use strict';

define(function () {
    //Set up dependencies
    return ["$timeout", 
        function ($timeout) {
            //arg1 and arg2 are arguments passed in when creating the object
            return function (arg1, arg2){
                //Non-accessable values
                var privateFoo = "foo";
                var privateBar = "bar";
                
                //Accessable values
                var publicFoo = "foo";
                var publicBar = "bar";

                var promptPrivate = function () {
                    alert(privateFoo + privateBar);
                };
                
                var promptPublic = function () {
                    alert(publicFoo + publicBar);
                };
                
                //Return publicly accessable functions and values
                return {
                    //Get only functions
                    get promptPrivate() { return promptPrivate },

                    get promptPublic() { return promptPublic },
                    
                    //Get/set public values
                    get publicFoo() { return publicFoo },
                    set publicFoo(value) { publicFoo = value },

                    get publicBar() { return publicBar },
                    set publicBar(value) { publicBar = value },
                }
            };
        }
    ];
});