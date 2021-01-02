var clicked = false;

function addMenuHandler() {
    $("body").append('<div id="training-menu"></div>');
    $("#training-menu").append('<input id="punches" class="button" type="button" value="Punches"/>');
    $("#training-menu").append('<input id="kicks" class="button" type="button" value="Kicks"/>');
    $("#training-menu").append('<input id="combinations" class="button" type="button" value="Combinations"/>');
}
