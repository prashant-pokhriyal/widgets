(function () {
    'use strict';

    angular
        .module('app.widgets')
        .service('widgetsService', widgetsService);

    widgetsService.$inject = [];

    let widgets = [];

    function widgetsService() {
        this.add = (widget) => widgets.push(widget);
        this.remove = (i) => widgets.splice(i, 1);
        this.edit = (i, widget) => widgets[i] = widget;
        this.get = (i) => i ? widgets[i] : widgets;
    }
})();