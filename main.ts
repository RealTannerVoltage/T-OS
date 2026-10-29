function oobe () {
    music.play(music.createSong(assets.song`oobe`), music.PlaybackMode.LoopingInBackground)
    game.splash("Welcome to T-OS!")
    username = game.askForString("What's your name?")
    music.stopAllSounds()
    music.play(music.stringPlayable("C D E F G A B C5 ", 800), music.PlaybackMode.UntilDone)
    blockSettings.writeStringArray("usernames", [username])
    menuUsers.push(miniMenu.createMenuItem(username))
}
function userSelect () {
    myMenu = miniMenu.createMenuFromArray(menuUsers)
}
let myMenu: Sprite = null
let username = "User"
let menuUsers: miniMenu.MenuItem[] = []
console.log(`Running GUI at a resolution of ${scene.screenWidth()}x${scene.screenHeight()}`)
scene.setBackgroundImage(assets.image`wallpaper1`)
if (blockSettings.exists("usernames")) {
    menuUsers = []
    for (let value of blockSettings.readStringArray("usernames")) {
        menuUsers.push(miniMenu.createMenuItem(value))
    }
    userSelect()
} else {
	
}
