/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["eu/reitmayer/ui5/ui5LibraryHostApplication/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
