'use strict';
function getAppManifest() {
  return {};
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