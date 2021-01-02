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