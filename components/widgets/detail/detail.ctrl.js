(function () {
    'use strict';

    angular
        .module('app.widgets.detail')
        .controller('detailCtrl', detailCtrl);

    detailCtrl.$inject = ['widgetsService', '$stateParams'];

    function detailCtrl(widgetsService, $stateParams) {
        const vm = this;
        vm.id = $stateParams.id;
        vm.data = widgetsService.get(vm.id);
        console.log(vm.data);
    }
})();