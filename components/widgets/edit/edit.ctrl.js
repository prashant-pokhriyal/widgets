(function () {
    'use strict';

    angular
        .module('app.widgets.edit')
        .controller('editCtrl', editCtrl);

    editCtrl.$inject = ['widgetsService', '$stateParams', '$state'];

    function editCtrl(widgetsService, $stateParams, $state) {
        const vm = this;
        vm.id = $stateParams.id;
        vm.data = widgetsService.get(vm.id);
        vm.updateWidget = () => {
            widgetsService.update(vm.id, vm.data);
            $state.go('widgets.summary.detail', { id: vm.id });
        };
        vm.addPair = (i) => vm.data.pairs.splice(i + 1, 0, { key: '', value: '' });
        vm.deletePair = (i) => vm.data.pairs.splice(i, 1);
    }
})();