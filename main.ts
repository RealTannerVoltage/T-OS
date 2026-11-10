function oobe () {
    music.play(music.createSong(assets.song`oobe`), music.PlaybackMode.LoopingInBackground)
    game.splash("Welcome to T-OS!")
    usernames[0] = game.askForString("What's your name?")
    music.stopAllSounds()
    blockSettings.writeStringArray("usernames", usernames)
    menuUsers.push(miniMenu.createMenuItem(usernames[0], assets.image`userIcon`))
    userSelect()
}
function userSelect () {
    userMenu = miniMenu.createMenuFromArray(menuUsers) as miniMenu.MenuSprite
}
function startOS () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 6000), music.PlaybackMode.UntilDone)
    scene.setBackgroundImage(assets.image`wallpaper1`)
    if (blockSettings.exists("usernames")) {
        usernames = blockSettings.readStringArray("usernames")
        menuUsers.push(miniMenu.createMenuItem(usernames[0], assets.image`userIcon`))
        userSelect()
    } else {
        oobe()
    }
}
let usernames: string[] = []
let menuUsers: miniMenu.MenuItem[] = []
let userID: number;
let currentUsername = usernames[userID]
let userMenu: miniMenu.MenuSprite;
let bootMenu: miniMenu.MenuSprite;
bootMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start T-OS", assets.image`startIcon`), // Start T-OS
    miniMenu.createMenuItem("Recovery Mode", assets.image`recoveryIcon`) // Recovery Mode
) as miniMenu.MenuSprite
bootMenu.setTitle("T-OS Boot Menu")
miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 15)
miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 2)
bootMenu.setDimensions(screen.width, screen.height)
bootMenu.top = 0
bootMenu.left = 0
bootMenu.onButtonPressed(miniMenu.Button.A, function (item, selectedIndex) {
    bootMenu.close()
    if (item == "Start T-OS") {
        startOS()
    } else if (item == "Recovery Mode") {
        game.splash("Recovery Mode is not yet implemented.")
    }
})
