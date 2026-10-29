let userID: number;
let usernames: Array<string> = [];
const currentUsername = usernames[userID];
let userMenu: Sprite;
let menuUsers: miniMenu.MenuItem[] = [];
function oobe() {
    music.play(music.createSong(assets.song`oobe`), music.PlaybackMode.LoopingInBackground);
    game.splash("Welcome to T-OS!");
    usernames[0] = game.askForString("What's your name?");
    music.stopAllSounds();
    music.play(music.stringPlayable("C D E F G A B C5 ", 800), music.PlaybackMode.UntilDone);
    blockSettings.writeStringArray("usernames", usernames);
    menuUsers.push(miniMenu.createMenuItem(usernames[0]));
    userSelect();
};
function desktop(userID = 0) {
    game.splash(`Hello, ${usernames[userID]}`);
    miniMenu.createMenuFromArray([miniMenu.createMenuItem("Settings")]);
};
function userSelect() {
    userMenu = miniMenu.createMenuFromArray(menuUsers);
};
console.log(`Running T-OS at a resolution of ${scene.screenWidth()}x${scene.screenHeight()}`);
console.log(`Current installed RAM: ${null}`)
scene.setBackgroundImage(assets.image`wallpaper1`);
if (blockSettings.exists("usernames")) {
    menuUsers = [];
    usernames = blockSettings.readStringArray("usernames");
    for (let value of usernames) {
        menuUsers.push(miniMenu.createMenuItem(value));
    };
    userSelect();
} else {
    oobe();
};
