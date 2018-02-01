'use strict';
function getAppManifest() {
  return { controllersStageData: {
    controllerWithExportsAsObject: {
        default: {
            connections: {
                buttonrole: {
                    gfpp: {
                        desktop: {
                            mainAction1:{ actionId: 'EDIT', label: 'Edit  Btn' },
                            mainAction2:{ actionId: 'MANAGE', label: 'Manage bla bla' },
                            mainAction3:{ actionId: 'BLAB', label: 'BLAB' },
                            iconButtons: {
                                design: {actionId: 'DESIGN_PANEL_OPENED' },
                                layout:{actionId: 'LAYOUT_PANEL_OPENED'},
                                animation: {actionId: 'ANIMATION'},
                                link: {actionId: 'LINK'},
                                effects: 'HIDE'
                        },
                            helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                        },
                        mobile: {
                            mainAction1:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                            iconButtons: {
                                layout: {actionId: 'MOBILE_LAYOUT_PANEL_OPENED'},
                                animation:'HIDE'
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
                case 'MANAGE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'ManageButtonClicked'}});
                    break;
                case 'LAYOUT_PANEL_OPENED':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'LayoutPanelClicked'}});
                    break;
                case 'DESIGN_PANEL_OPENED':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'DesignPanelClicked'}});
                    break;
                case 'ANIMATION':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'blabla'}});
                    break;
                case 'LINK':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'blablassssssss'}});
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