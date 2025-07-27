var MainServices = function () {
    "use strict";

    /*
    |--------------------------------------------------------------------------
    | Navigation Menu Toggle
    |--------------------------------------------------------------------------
    |
    | This function handles the mobile sidebar navigation toggle behavior.
    | It listens for clicks on the menu open and close buttons and applies
    | appropriate TailwindCSS utility classes to show/hide the sidebar.
    |
    */
    var initNavigation = function () {
        $(document).ready(function () {
            /*
            |--------------------------------------------------------------------------
            | DOM Elements
            |--------------------------------------------------------------------------
            |
            | Define selectors for the menu toggle button and sidebar container.
            |
            */
            var $menuBtn = $('#menuBtn');
            var $mobileSidebar = $('#mobileSidebar');
            var $closeMenu = $('#closeMenu');

            /*
            |--------------------------------------------------------------------------
            | Event Listeners
            |--------------------------------------------------------------------------
            |
            | Attach click event listeners to toggle the sidebar visibility.
            |
            */
            $menuBtn.on('click', function () {
                $mobileSidebar.removeClass('translate-x-full').addClass('translate-x-0');
            });

            $closeMenu.on('click', function () {
                $mobileSidebar.addClass('translate-x-full').removeClass('translate-x-0');
            });
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Public Init Function
    |--------------------------------------------------------------------------
    |
    | The init function is the entry point for initializing all component logic.
    |
    */
    return {
        init: function () {
            initNavigation();
        }
    };
}();

/*
|--------------------------------------------------------------------------
| Initialize Main Services
|--------------------------------------------------------------------------
|
| Call the main initialization method when the DOM is fully loaded.
|
*/
jQuery(document).ready(function () {
    MainServices.init();
});