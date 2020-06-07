(function () {
    'use strict';

    angular
        .module('app.widgets.add')
        .controller('addCtrl', addCtrl);

    addCtrl.$inject = ['widgetsService', '$state'];

    function addCtrl(widgetsService, $state) {
        const vm = this;
        vm.data = {
            pairs: [
                {
                    key: '',
                    value: '',
                }
            ],
        };
        vm.saveWidget = () => {
            widgetsService.add(vm.data);
            $state.go('widgets.summary');
        };
        vm.addPair = (i) => vm.data.pairs.splice(i + 1, 0, { key: '', value: '' });
        vm.deletePair = (i) => vm.data.pairs.splice(i, 1);
    }
})();