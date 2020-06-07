(() => {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$locationProvider', 'toastrConfig'];

  function config($stateProvider, $locationProvider, toastrConfig) {
    var states = [
      // {
      //   url: '/',
      //   name: 'main',
      //   templateUrl: 'index.html',
      //   controller: 'appCtrl as app',
      // },
      {
        url: '/',
        abstract: true,
        name: 'widgets',
        templateUrl: 'components/widgets/widgets.view.html',
        controller: 'widgetsCtrl as widgets',
      },
      {
        url: '',
        name: 'widgets.summary',
        templateUrl: 'components/widgets/summary/summary.view.html',
        controller: 'summaryCtrl as summary',
      },
      {
        url: 'detail/:id',
        name: 'widgets.summary.detail',
        templateUrl: 'components/widgets/detail/detail.view.html',
        controller: 'detailCtrl as detail',
        // view: {
        //   'detail': {
        //     templateUrl: 'components/widgets/detail/detail.view.html',
        //     controller: 'detailCtrl as detail',
        //   }
        // },
      },
      {
        url: '^/add',
        name: 'widgets.add',
        templateUrl: 'components/widgets/add/add.view.html',
        controller: 'addCtrl as add',
      },
      {
        url: '^/edit/:id',
        name: 'widgets.edit',
        templateUrl: 'components/widgets/edit/edit.view.html',
        controller: 'editCtrl as edit',
      }
    ];
    angular.extend(toastrConfig, {
      allowHtml: true,
      // closeButton: false,
      // closeHtml: '<button>&times;</button>',
      // extendedTimeOut: 1000,
      // // iconClasses: {
      // //   success: 'bg-primary',
      // // },
    });

    $locationProvider.html5Mode(true);

    states.forEach((state) => {
      $stateProvider.state(state);
    });
  }
})();