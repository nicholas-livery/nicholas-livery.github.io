function myLiveryInteractivePluginFunction1 (playerInstance, pluginConfig, pluginDiv) { 
    // put the interactive layer in the plugin div by giving it the id 'root' and loading the scripts into that div
    // The 1.3.x version of the interactive page only targets the div #root
    
    /*
     * If the interactive layer did not only target the div #root then we could give the div a unique id and target that,
     * which would allow us to have more than one extension on a page. As it is we have to use a shadow dom to contain
     * the root element, the added benefit of which is that we contain the application and styling to that shadow dom.
     * (see myLiveryInteractivePluginFunction4)
     */
    
    // give the pluginDiv a width and height to fit the player
    // add the livery-interactive scripts to the plugin-div
}


function myLiveryInteractivePluginFunction2 (playerInstance, pluginConfig, pluginDiv) {
    // put the interactive layer in an iframe with no bridging comms
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


function myLiveryInteractivePluginFunction3 (playerInstance, pluginConfig, pluginDiv) {
    // put the interactive layer in an iframe with bridging comms
}

function myLiveryInteractivePluginFunction4 (playerInstance, pluginConfig, pluginDiv) {
    // create a shadow dom
    // const shadow = pluginDiv.attachShadow({mode: 'open'});

    // const reactRoot = document.createElement('div').setAttribute('id', 'root');
    // const liveryInteractiveApp = document.createElement('script');

    // liveryInteractiveApp.setAttribute('type', 'module');
    // liveryInteractiveApp.setAttribute('src', 'https://livery-videoextension-demo1.playtotv.com/assets/main.54402e55.js');

    // const environment = document.createElement('script').setAttribute('src', 'https://livery-videoextension-demo1.playtotv.com/environment.js');
}

const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin

registerPlugin('myLiveryInteractivePlugin', '8.0', myLiveryInteractivePluginFunction2)