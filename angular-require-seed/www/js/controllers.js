/*
 * This file declares your controllers.
 * It refrences all your controllers found in www/js/controllers.
 */

'use strict';

define(function (require) {
    //Define the MainApp.controllers module. Require custom services and custom factories.
    require('angular').module('MainApp.controllers', ['MainApp.services', 'MainApp.factories']).
        controller("MainController", require("controllers/MainController"));    //An example main controller

    //Here you can add further controllers if necessary.
});