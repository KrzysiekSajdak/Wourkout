function addTimerComponentsHandler(deviceHeight) {
    $("header").remove();
    $("#main-container").append('<div id="setup-time-cnt"></div>');
    $("#setup-time-cnt").append('<div id="add-timer-cnt"></div>');
    $("#setup-time-cnt").css("height", deviceHeight);
    $("#add-timer-cnt").append('<div id="minutes-cnt">');
    $("#minutes-cnt").append('<input id="plus-minutes" type="button" value="+" onclick="" />');
    $("#minutes-cnt").append('<div id="training-time-minutes">00</div>');
    $("#minutes-cnt").append('<input id="minus-minutes" type="button" value="-" />');
    $("#add-timer-cnt").append('<div id="colon-cnt">:</div>');
    $("#add-timer-cnt").append('<div id="seconds-cnt">');
    $("#seconds-cnt").append('<input id="plus-seconds" type="button" value="+" onclick="" />');
    $("#seconds-cnt").append('<div id="training-time-seconds">00</div>');
    $("#seconds-cnt").append('<input id="minus-seconds" type="button" value="-" />');
    $("#setup-time-cnt").append('<input id="random-btn" class="button" type="button" value="SHUFFLE ALL COMBINATIONS" />');
    $("#setup-time-cnt").append('<input id="start-btn" class="button" type="button" value="START" />');
}

function removeTimerComponentsHandler() {
    $("#setup-time-cnt").remove();
}