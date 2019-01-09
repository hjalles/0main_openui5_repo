jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/prego/test/mobileHybridCRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/prego/test/mobileHybridCRUD/test/integration/pages/App",
	"com/prego/test/mobileHybridCRUD/test/integration/pages/Browser",
	"com/prego/test/mobileHybridCRUD/test/integration/pages/Master",
	"com/prego/test/mobileHybridCRUD/test/integration/pages/Detail",
	"com/prego/test/mobileHybridCRUD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.prego.test.mobileHybridCRUD.view."
	});

	sap.ui.require([
		"com/prego/test/mobileHybridCRUD/test/integration/NavigationJourneyPhone",
		"com/prego/test/mobileHybridCRUD/test/integration/NotFoundJourneyPhone",
		"com/prego/test/mobileHybridCRUD/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});