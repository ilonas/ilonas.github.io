'use strict';
function getAppManifest() {
  return { controllersStageData: {
    controllerWithExportsAsObject: {
        default: {
            connections: {
                buttonrole: {
                    gfpp: {
                        desktop: {
                            mainAction1:'HIDE',
                            mainAction2:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                            iconButtons: {
                                stretched: {actionId: 'STRETCH_NNN'},
                                upgarde: {actionId: 'UPGRADE_PANEL'}
                        },
                            helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                        },
                        mobile: {
                            mainAction1:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                            iconButtons: {
                                layout: 'HIDE',
                                design: 'HIDE',
                                animation:{actionId: 'ANIMATION_MOBILE'},
                                settings: 'HIDE',
                                //crop: {actionId: 'CROP_PANEL_MOBILE'},

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

var _port;
var _editorSDK;

function editorReady(editorSDK) {
console.log("uploaded!")
_editorSDK = editorSDK;
self.addEventListener('message', ({data, ports}) => {
    const port = ports[0];
    switch (data.method) {
    case 'onEvent':
        _port = port;
        break;

    default:
        break;
    }
});
}


function onEvent(event) {
    const componentRef = event.eventPayload.componentRef;
    const eventId = event.eventPayload.id;
    switch (event.eventType) {
      case 'componentGfppClicked':
            switch (eventId) {
                
                case 'STRETCH_NNN':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'swwedwdw'}});
                    break;
                case 'UPGRADE_PANEL':
                    _editorSDK.components.data.console.log('test');
                    break;
                case 'FILTERS_BLA':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'filterss'}});
                default:
                    break;
           }
           break;
      case 'someEventType':
        _port.postMessage(event.eventPayload);
          break;
    default:
        break;
    }
}

module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};