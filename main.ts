function oobe () {
    music.play(music.createSong(assets.song`oobe`), music.PlaybackMode.LoopingInBackground)
    game.splash("Welcome to T-OS!")
    usernames[0] = game.askForString("What's your name?")
    music.stopAllSounds()
    music.play(music.stringPlayable("C D E F G A B C5 ", 800), music.PlaybackMode.UntilDone)
    blockSettings.writeStringArray("usernames", usernames)
    menuUsers.push(miniMenu.createMenuItem(usernames[0]))
    userSelect()
}
function userSelect () {
    userMenu = miniMenu.createMenuFromArray(menuUsers)
}
let menuUsers: miniMenu.MenuItem[] = []
let usernames: string[] = []
let userID: number;
let currentUsername = usernames[userID]
let userMenu: Sprite;
if (blockSettings.exists("usernames")) {
    usernames = blockSettings.readStringArray("usernames")
    menuUsers.push(miniMenu.createMenuItem(usernames[0], assets.image`UserIcon`))
    userSelect()
} else {
    oobe()
}
