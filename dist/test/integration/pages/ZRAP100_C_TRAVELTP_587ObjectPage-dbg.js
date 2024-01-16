sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zrap5873',
            componentId: 'ZRAP100_C_TRAVELTP_587ObjectPage',
            contextPath: '/ZRAP100_C_TRAVELTP_587'
        },
        CustomPageDefinitions
    );
});