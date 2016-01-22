// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('hive', ['ionic', 'hive.controllers', 'hive.services', 'easypiechart'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.mykpi', {
    url: '/mykpi',
    views: {
      'menuContent': {
        templateUrl: 'templates/my-kpis.html',
          controller: 'KPICtrl'
      }
    }
  })

  .state('app.expectations', {
    url: '/expectations',
    views: {
      'menuContent': {
        templateUrl: 'templates/expectations.html',
          controller: 'ExpectationsCtrl'
      }
    }
  })

  .state('app.glossary', {
    url: '/glossary',
    views: {
      'menuContent': {
        templateUrl: 'templates/glossary.html',
          controller: 'GlossaryCtrl'
      }
    }
  })

  .state('app.organization', {
    url: '/organization',
    views: {
      'menuContent': {
        templateUrl: 'templates/organization.html',
          controller: 'OrganizationCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/organization');
});
