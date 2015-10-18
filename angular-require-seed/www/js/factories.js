/*
 * This file declares your factories.
 * It refrences all your factories found in www/js/factories.
 */

'use strict';

define(function (require) {
    //Define the MainApp.factories module. Require MainApp.services.
    require('angular').module('MainApp.factories', ["MainApp.services"]).
        factory('fooBar', require('factories/fooBar_factory')); //An example factory

    //Here you can add further factories if necessary.
});