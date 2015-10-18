/*
 * This file declares your main controller.
 */

'use strict';

define(function () {
    return function () {
        //Return filter function
        return function (input, total) {
            total = parseInt(total);
                
            for (var i = 0; i < total; i++)
                input.push(i);
                
            return input;
        };
    }
});