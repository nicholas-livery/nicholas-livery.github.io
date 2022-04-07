function myFirstPluginFunction(playerInstance, pluginConfig, pluginDiv) {
    // automatically do something
    console.log('Hello from my first plugin')
    console.log(`I'm in the '${pluginConfig.name}' window`)

    console.log(`I'm in the '#${playerInstance.getContainer().id}' element`)

    pluginDiv.style.width = '100%'
    pluginDiv.style.height = '100%'
    pluginDiv.style.background = 'red'
    pluginDiv.style.opacity = 0.7
}

const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin

registerPlugin('myFirstPlugin', '8.0', myFirstPluginFunction)