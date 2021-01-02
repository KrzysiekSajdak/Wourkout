function trainingSessionHandler(exercise, sec, min) {
    sec = sec + (min * 60);


    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML = makeMeTwoDigits(Math.floor(sec / 60)) + ":" + makeMeTwoDigits(sec % 60);
        sec--;
        randomSelect = Math.floor(Math.random() * 6);
        var currentPunch = $("#workout-task").html();;
        if (exercise[randomSelect] == currentPunch) {
            $("#workout-task").text(currentPunch);
            $("#workout-task-again").text(counter + " more!!");
            playSoundHandler(exercise[randomSelect]);
            counter++;
        } else {
            $("#workout-task").text(exercise[randomSelect]);
            $("#workout-task-again").text("");
            playSoundHandler(exercise[randomSelect]);
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