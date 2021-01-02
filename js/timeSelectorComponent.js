function timeSelectorHandler(training, sec, min) {
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
        removeTimerComponentsHandler();
        addActiveTrainingComponentsHandler(deviceScreenHeight);
        trainingSessionHandler(training, sec, min);
    });

}