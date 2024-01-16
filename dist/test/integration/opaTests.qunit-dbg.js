sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zrap5873/test/integration/FirstJourney',
		'zrap5873/test/integration/pages/ZRAP100_C_TRAVELTP_587List',
		'zrap5873/test/integration/pages/ZRAP100_C_TRAVELTP_587ObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZRAP100_C_TRAVELTP_587List, ZRAP100_C_TRAVELTP_587ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zrap5873') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZRAP100_C_TRAVELTP_587List: ZRAP100_C_TRAVELTP_587List,
					onTheZRAP100_C_TRAVELTP_587ObjectPage: ZRAP100_C_TRAVELTP_587ObjectPage
                }
            },
            opaJourney.run
        );
    }
);