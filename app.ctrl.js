(() => {
  'use strict';
  angular
    .module('app')
    .controller('appCtrl', appCtrl);

  appCtrl.$inject = [];

  function appCtrl() {
    let vm = this;
  }
})();