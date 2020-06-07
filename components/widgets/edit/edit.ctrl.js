(function () {
    'use strict';

    angular
        .module('app.widgets.edit')
        .controller('editCtrl', editCtrl);

    editCtrl.$inject = ['widgetsService', '$stateParams'];

    function editCtrl(widgetsService, $stateParams) {
        const vm = this;
        vm.id = $stateParams.id;
        vm.data = widgetsService.get(vm.id);
        vm.saveWidets = () => widgetsService.add(vm.data);
        vm.addPair = (i) => vm.data.pairs.splice(i, 0, { key: '', value: '' });
        vm.deletePair = (i) => vm.data.pairs.splice(i, 1);
    }
})();