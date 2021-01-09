function playSoundHandler(file) {
    var sound = new Audio("sounds/" + file + ".mp3");
    sound.autoplay = true;
    sound.muted = false;
    sound.play();
    
}