var deviceScreenHeight = $(window).height();
var sec = 0;
var min = 0;
var counter = 1;
var randomSelect;

$(document).ready(function() {
    timeSelectorHandler();
    
});

function playSoundHandler(file) {
    var sound = new Audio("sounds/" + file + ".m4a");
    sound.play();
}

function addTimerComponentsHandler(deviceHeight) {
    $("body").append('<div id="setup-time-cnt"></div>');
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
    $("#setup-time-cnt").append('<input id="start-btn" type="button" value="START" />');
}

function removeTimerComponentsHandler() {
    $("#setup-time-cnt").remove();
}

function addActiveTrainingComponentsHandler(deviceHeight) {
    
    $("body").append('<div id="active-workout-cnt">');
    $("#active-workout-cnt").css("height", deviceHeight);
    $("#active-workout-cnt").append('<div id="timer"></div>');
    $("#active-workout-cnt").append('<div id="workout-task"></div>');
    $("#active-workout-cnt").append('<div id="workout-task-again"></div>');

}

function removeActiveTrainingComponentsHandler() {
    $("#active-workout-cnt").remove();
}

function finishWorkoutHandler() {

}

function resetTrainingHandler() {
  
}

//WIP
function getReadyComponentsHandler() {
    console.log(deviceScreenHeight);
    $("body").append('<div id="get-ready-time-cnt"></div>');
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

function timeSelectorHandler() {
    addTimerComponentsHandler(deviceScreenHeight);
    $("#plus-seconds").click(function() {
        if (sec < 59) sec++;
        $("#training-time-seconds").text(sec);
    });

    $("#minus-seconds").click(function() {
        if (sec > 0) sec--;
        $("#training-time-seconds").text(sec);
    });

    $("#plus-minutes").click(function() {
        if (min < 59) min++;
        $("#training-time-minutes").text(min);
    });

    $("#minus-minutes").click(function() {
        if (min > 0) min--;
        $("#training-time-minutes").text(min);
    });

    $("#start-btn").click(function() {
        removeTimerComponentsHandler()
        //getReadyComponentsHandler();
        addActiveTrainingComponentsHandler(deviceScreenHeight);
        trainingSessionHandler()
    });
}

function makeMeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
}

function trainingSessionHandler() {
    sec = sec + (min * 60);


    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML = makeMeTwoDigits(Math.floor(sec / 60)) + ":" + makeMeTwoDigits(sec % 60);
        sec--;
        randomSelect = Math.floor(Math.random() * 6);
        var currentPunch = $("#workout-task").html();;
        if (punches[randomSelect] == currentPunch) {
            $("#workout-task").text(currentPunch);
            $("#workout-task-again").text(counter + " more!!");
            playSoundHandler(punches[randomSelect]);
            counter++;
        } else {
            $("#workout-task").text(punches[randomSelect]);
            $("#workout-task-again").text("");
            playSoundHandler(punches[randomSelect]);
            counter = 1;
        }
        if (sec < 0) {
            console.log("last" + sec);
            clearInterval(timer);
            removeActiveTrainingComponentsHandler();
            $("#reset-workout-cnt").text("DONE");
            $("#reset-workout-cnt").append('<input id="reset" type="button" value="RESET" onclick="resetTrainingHandler() " />');
        }
    }, 1000);
}
