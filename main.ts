namespace project {
    // information about this project
    export let name = "T-OS"
}
// init system
console.log(`Screen size ${screen.width}x${screen.height}`)
scene.setBackgroundImage(assets.image`wallpaper1`)
console.log(`Initializing ${project.name}...`)
let loadingBar = statusbars.create(scene.screenWidth(), 16, StatusBarKind.Health)
loadingBar.bottom = scene.screenHeight()
loadingBar.value = 0
loadingBar.max = 4
console.log("loadingBar loading sequence (probably) completed successfully.")