sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zrap5873',
            componentId: 'ZRAP100_C_TRAVELTP_587List',
            contextPath: '/ZRAP100_C_TRAVELTP_587'
        },
        CustomPageDefinitions
    );
});