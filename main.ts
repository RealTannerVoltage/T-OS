namespace project {
    // information about this project lol
    export let name = "T-OS"
    export let version = "indev"
}
// init system lol
console.log(`Initialising ${project.name} version ${project.version}`)
let loadingBar = statusbars.create(scene.screenWidth(), 16, StatusBarKind.Health)
loadingBar.bottom = scene.screenHeight()
loadingBar.value = 0
loadingBar.max = 4
let loadingText = textsprite.create(`Loading ${project.name}...`)
loadingText.left = 0
loadingText.bottom = scene.screenHeight() - 16