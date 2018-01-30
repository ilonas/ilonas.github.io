'use strict';
function getAppManifest() {
  return { controllersStageData: {
    controllerWithExportsAsObject: {
        default: {
            connections: {
                buttonrole: {
                    gfpp: {
                        desktop: {
                            mainAction1:{ actionId: 'EDIT', label: 'Edit This Btn' },
                            mainAction2:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                            iconButtons: {
                                design: {actionId: 'DESIGN_PANEL_OPENED' },
                                layout:{actionId: 'LAYOUT_PANEL_OPENED'},
                                animation: 'HIDE'
                        },
                            helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                        },
                        mobile: {
                            mainAction1:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                            iconButtons: {
                                layout: {actionId: 'MOBILE_LAYOUT_PANEL_OPENED'},
                                animation: 'HIDE'
                            },
                            helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                        }
                    }
                }
            },
            visibility: 'DEV'
        }
    }
},
};
  
}


function editorReady(/*editorSDK, appDefinitionId*/) {
console.log("uploaded!")
}

function onEvent(event) {

}

module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};