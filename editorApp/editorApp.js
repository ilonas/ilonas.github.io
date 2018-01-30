'use strict';
function getAppManifest() {
    const buttonManifest = {
        gfpp: {
            mainActions: [
                { id: 'EDIT', label: 'Edit This Btn' },
                { id: 'MANAGE', label: 'Manage This Btn' }
            ],
            enabledActions: {
                layout: {
                    title: 'buy_now_button_layout_header_label'
                },
                design: {
                    title: 'buy_now_button_design_header_label'
                },
                animation: {
                    actionId: '123'
                },
                help: {
                    helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                }
            }
        }
    }
    return {
        controllersStageData: {
            fooBar: {
                default: {
                    connections: {
                        btn_role: buttonManifest
                    },
                    visibility: 'DEV'
                }
            }
        },
        exports: {
            fooBar: {
                tagname: 'controller',
                eventHandlers: {
                    onFooBar: {
                        type: 'fooBar',
                        description: 'Runs a function when an element is clicked.'
                    }
                },
                synthetic: false,
                inherits: {},
                members: {},
                description: '',
                viewernames: {
                    fooBar: true
                }
            }
        }
    };
}

var _port;

function editorReady(/*editorSDK, appDefinitionId*/) {
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
    switch (event.eventType) {
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