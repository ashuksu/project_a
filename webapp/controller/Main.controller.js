// sap.ui.define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';
// });

sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend(ROOT_FOLDER + ".view.Main", {
        pressMe: function() {
            alert(ROOT_FOLDER);
        }
    });
});