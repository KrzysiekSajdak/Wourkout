function timeSelectorHandler(training, sec, min) {
    addTimerComponentsHandler(deviceScreenHeight);

    var shuffledTraining = false;

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

    $("#random-btn").click(function() { 
        if (!shuffledTraining) {
            $("#random-btn").css("background-color", "#ff7043");
            shuffledTraining = true;
        } 
        else {
            $("#random-btn").css("background-color", "white");
            shuffledTraining = false;
        } 
    });

    $("#start-btn").click(function() {
        console.log(training);
        removeTimerComponentsHandler();
        addActiveTrainingComponentsHandler(deviceScreenHeight);
        trainingSessionHandler(training, sec, min, shuffledTraining);
    });

}