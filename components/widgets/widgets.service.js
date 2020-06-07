(function () {
    'use strict';

    angular
        .module('app.widgets')
        .service('widgetsService', widgetsService);

    widgetsService.$inject = [];

    let widgets = [
        {
            name: 'Hello World',
            number: 1,
            pairs: [
                {
                    key: 'Pet',
                    value: 'Dog'
                }
            ]
        }
    ];

    function widgetsService() {
        this.add = (widget) => widgets.push(widget);
        this.delete = (i) => widgets.splice(i, 1);
        this.update = (i, widget) => widgets[i] = widget;
        this.get = (i) => i === undefined ? widgets : widgets[i];
    }
})();