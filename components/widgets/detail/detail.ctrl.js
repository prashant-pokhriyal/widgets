(function () {
    'use strict';

    angular
        .module('app.widgets.detail')
        .controller('detailCtrl', detailCtrl);

    detailCtrl.$inject = ['widgetsService', '$stateParams', '$state'];

    function detailCtrl(widgetsService, $stateParams, $state) {
        const vm = this;
        vm.id = $stateParams.id;
        vm.data = widgetsService.get(vm.id);
        if (vm.data === undefined) {
            $state.go('widgets.summary');
        }
        console.log(vm.data);
    }
})();