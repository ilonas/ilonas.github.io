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
                                design: {actionId: 'DESIGN_PANEL_OPENED' },
                                layout:{actionId: 'LAYOUT_PANEL_OPENED'},
                                animation: {actionId: 'ANIMATION'},
                                settings: {actionId: 'SETTINGS_PANEL'},
                                crop: {actionId: 'CROP_PANEL'}
                        },
                            helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                        },
                        mobile: {
                            mainAction1:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                            iconButtons: {
                                layout: {actionId: 'MOBILE_LAYOUT_PANEL_OPENED'},
                                design: {actionId: 'DESIGN_PANEL_OPENED_MOBILE' },
                                animation:{actionId: 'ANIMATION_MOBILE'},
                                settings: {actionId: 'SETTINGS_PANEL_MOBILE'},
                                crop: {actionId: 'CROP_PANEL_MOBILE'}

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
                case 'EDIT':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'EditButtonClicked'}});
                    break;
                // case 'MANAGE':
                //     _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'ManageButtonClicked'}});
                //     break;
                case 'LAYOUT_PANEL_OPENED':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'LayoutPanelClicked'}});
                    break;
                case 'MOBILE_LAYOUT_PANEL_OPENED':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'LayoutPanelClickedmobile'}});
                    break;
                case 'DESIGN_PANEL_OPENED':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'DesignPanelClicked'}});
                    break;
                case 'DESIGN_PANEL_OPENED_MOBILE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'blabla'}});
                    break;
                case 'ANIMATION_MOBILE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'fewfwfw'}});
                    break;
                case 'SETTINGS_PANEL':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'settingsPanel'}});
                    break;
                case 'CROP_PANEL':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'cropppp'}});
                    break;
                case 'CROP_PANEL_MOBILE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'cropmobilee'}});
                    break;
                case 'SETTINGS_PANEL_MOBILE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'settingsPanelMobile'}});
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