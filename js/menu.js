var clicked = false;

function addMenuHandler() {
    $("#main-container").append('<div id="training-menu"></div>');
    $("#training-menu").append('<input id="warm-up" class="button" type="button" value="Warm up"/>');
    $("#training-menu").append('<input id="warm-up" class="button" type="button" value="Workout"/>');
    $("#training-menu").append('<input id="punches" class="button" type="button" value="Punches"/>');
    $("#training-menu").append('<input id="kicks" class="button" type="button" value="Kicks"/>');
    $("#training-menu").append('<input id="combinations" class="button" type="button" value="Combinations"/>');

}