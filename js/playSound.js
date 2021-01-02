function playSoundHandler(file) {
    var sound = new Audio("sounds/" + file + ".mp3");

    sound.play();
    sound.autoplay = true;
}