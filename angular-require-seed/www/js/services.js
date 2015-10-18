/*
 * This file declares your services.
 * It refrences all your services found in www/js/services.
 */

'use strict';

define(function (require) {
    //Define the MainApp.services module.
    require('angular').module('MainApp.services', []).
        service('$version', require('services/version_service'));   //An example service

    //Here you can add further services if necessary.
});