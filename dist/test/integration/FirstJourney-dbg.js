sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZRAP100_C_TRAVELTP_587List.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZRAP100_C_TRAVELTP_587List.onFilterBar().iExecuteSearch();
                
                Then.onTheZRAP100_C_TRAVELTP_587List.onTable().iCheckRows();

                When.onTheZRAP100_C_TRAVELTP_587List.onTable().iPressRow(0);
                Then.onTheZRAP100_C_TRAVELTP_587ObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});