(function () {
    'use strict';

    angular
        .module('app.widgets', [
            'app.widgets.summary',
            'app.widgets.add',
            'app.widgets.edit',
            'app.widgets.detail',
        ]);
})();