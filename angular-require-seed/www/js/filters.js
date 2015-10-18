/*
 * This file declares your filters.
 * It refrences all your filters found in www/js/filters.
 */

'use strict';

define(function (require) {
    //Define the MainApp.filters module.
    require('angular').module('MainApp.filters', []).
        filter('range', require('filters/range_filter'));   //An example filter

    //Here you can add further filters if necessary.
});