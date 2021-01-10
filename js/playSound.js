function playSoundHandler(file) {
    console.log("working...");
   var sound = new Howl({
       src: ["sounds/" + file + ".mp3"],
       format: ['mp3'],
       volume: 1,
       autoplay: true,
   });

   sound.play();
}

var radio;
var radioOn = false;

function radioPlay(musicVolume) {

    if(radioOn) {
        radioOn = false;
        console.log(radioOn);
        $("i").remove();
        $("#radio-btn").append('<i class="fas fa-play"></i>')
    } else if (!radioOn) {
        radioOn = true;
        console.log(radioOn);
        $("i").remove();
        $("#radio-btn").append('<i class="fas fa-stop"></i>');
    }
    if(radio != null) {
        radio.stop();
        radio.unload();
        radio = null;
    } else {
        radio = new Howl({
            //src: ['https://tunein.streamguys1.com/cnn-new'],
            src: ['http://51.89.148.171:8022/stream/'],
            html5: true,
            format: ['mp3', 'aac'],
            volume: musicVolume,
        });
        radio.play();
    }    
}

 