'use strict';

angular.module('angularScafoldApp', [
  'angularScafoldApp.auth',
  'angularScafoldApp.admin',
  'angularScafoldApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
