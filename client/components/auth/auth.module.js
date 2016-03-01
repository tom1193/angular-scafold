'use strict';

angular.module('angularScafoldApp.auth', [
  'angularScafoldApp.constants',
  'angularScafoldApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
