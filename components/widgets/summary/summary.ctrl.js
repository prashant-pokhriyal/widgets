(function () {
    'use strict';

    angular
        .module('app.widgets.summary')
        .controller('summaryCtrl', summaryCtrl);

    summaryCtrl.$inject = ['widgetsService'];

    function summaryCtrl(widgetsService) {
        const vm = this;
        vm.widgets = widgetsService.get();
        vm.deleteWidget = widgetsService.delete;
    }
})();