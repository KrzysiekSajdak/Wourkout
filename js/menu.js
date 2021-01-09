var clicked = false;

function addMenuHandler() {
    $("#main-container").append('<div id="training-menu"></div>');
    $("#training-menu").append('<input id="warm-up" class="button" type="button" value="Warm up" onclick="start()"/>');
    $("#training-menu").append('<input id="warm-up" class="button" type="button" value="Workout" onclick="start()"/>');
    $("#training-menu").append('<input id="punches" class="button" type="button" value="Punches" onclick="start()"/>');
    $("#training-menu").append('<input id="punches-combinations" class="button" type="button" value="Punches Combinations" onclick="start()"/>');
    $("#training-menu").append('<input id="kicks" class="button" type="button" value="Kicks" onclick="start()"/>');
    $("#training-menu").append('<input id="elbows" class="button" type="button" value="Elbows" onclick="start()"/>');
    $("#training-menu").append('<input id="mma-combinations" class="button" type="button" value="MMA Combinations" onclick="start()"/>');
    $("#training-menu").append('<input id="karate-combinations" class="button" type="button" value="Karate Combinations" onclick="start()"/>');
}

function start() {
    //sounds.play();   
}