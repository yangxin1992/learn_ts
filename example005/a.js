System.register([], function (exports_1, context_1) {
    "use strict";
    var NAME;
    var __moduleName = context_1 && context_1.id;
    function getStep() {
        console.log('123');
    }
    exports_1("getStep", getStep);
    return {
        setters: [],
        execute: function () {
            exports_1("NAME", NAME = 'JOHN');
            exports_1("default", {
                age: 20
            });
        }
    };
});
