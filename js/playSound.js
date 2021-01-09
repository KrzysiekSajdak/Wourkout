function playSoundHandler(file) {
    sound.play();
    var sound = new Audio("sounds/" + file + ".mp3");
    sound.play();   
}