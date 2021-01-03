//WIP
function getReadyComponentsHandler() {
    console.log(deviceScreenHeight);
    $("#main-container").append('<div id="get-ready-time-cnt"></div>');
    $("#get-ready-time-cnt").css("height", deviceScreenHeight);
    $("#get-ready-time-cnt").append('<div id="minutes-cnt">');
    $("#minutes-cnt").append('<div id="training-time-minutes">00</div>');
    $("#get-ready-time-cnt").append('<div id="colon-cnt">:</div>');
    $("#get-ready-time-cnt").append('<div id="seconds-cnt">');
    $("#seconds-cnt").append('<div id="training-time-seconds">00</div>');
    var getReadyTimer = 5;
    var timer = setInterval(function() {

    });
}