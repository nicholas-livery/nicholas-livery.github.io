// adds the Livery interactive layer in an iframe with no bridging comms
function myLiveryInteractivePluginFunction (playerInstance, pluginConfig, pluginDiv) {
    const interactiveLayer = document.createElement('iframe')
    interactiveLayer.title = "Livery Interactive Layer"
    interactiveLayer.src = "https://jwplayer.interactive.liveryvideo.com/#/interactions"
    interactiveLayer.style.width = '100%'
    interactiveLayer.style.height = '100%'
    interactiveLayer.style.border = 0

    pluginDiv.appendChild(interactiveLayer)

    pluginDiv.style.width = '100%'
    pluginDiv.style.height = '90%'
}

const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin

registerPlugin('myLiveryInteractivePlugin', '8.0', myLiveryInteractivePluginFunction2)