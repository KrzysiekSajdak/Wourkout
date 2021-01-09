function trainingSessionHandler(exercise, sec, min) {
    sec = sec + (min * 60);
    var exerciseIndex = 0;
    var singleExerciseCounter = 5;
    var combinationsMovementsCounter = 0;
    var combinationsExercisesCounter;
    var combosIndex = 0;

    var training;
    switch (exercise) {
        case "punches":
            training = punches;
            break;
        case "kicks":
            training = kicks;
            break;
        case "combinations":
            training = punchesCombinations;
            break;
        default:
            break;
    }

    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML = makeMeTwoDigits(Math.floor(sec / 60)) + ":" + makeMeTwoDigits(sec % 60);
        sec--;

        if (exercise === "punches") {
            if (training.length > exerciseIndex) {
                if (singleExerciseCounter > 0) {
                    if (singleExerciseCounter === 5) playSoundHandler(training[exerciseIndex]);
                    $("#workout-task").text(training[exerciseIndex]);
                    $("#workout-task-again").text(singleExerciseCounter + " repetitions left");
                    singleExerciseCounter--;
                } else {
                    $("#workout-task-again").text(singleExerciseCounter + " repetitions left");
                    singleExerciseCounter = 5;
                    exerciseIndex++;
                }
            } else {
                shuffle(training);
                exerciseIndex = 0
            }
        } 
        else if (exercise === "combinations") {
                if (training.length > exerciseIndex) {
                    if (training[exerciseIndex].length > combosIndex) {
                        $("#workout-task").animate({
                            opacity: 1,
                        }, 500);
                        playSoundHandler(training[exerciseIndex][combinationsMovementsCounter]);
                        $("#workout-task").text(training[exerciseIndex][combinationsMovementsCounter]);
                        $("#workout-task").animate({
                            opacity: 0,
                        }, 500);
                        combosIndex++;
                        combinationsMovementsCounter++;
                    } else {
                        exerciseIndex++;
                        combosIndex = 0;
                        combinationsMovementsCounter = 0;
                    } 
                } else {
                    exerciseIndex = 0;
                }            
            } 
        // randomSelect = Math.floor(Math.random() * 6);
        // var currentPunch = $("#workout-task").html();;
        // if (exercise[randomSelect] == currentPunch) {
        //     $("#workout-task").text(currentPunch);
        //     $("#workout-task-again").text(counter + " more!!");
        //     playSoundHandler(exercise[randomSelect]);
        //     counter++;
        // } else {
        //     $("#workout-task").text(exercise[randomSelect]);
        //     $("#workout-task-again").text("");
        //     playSoundHandler(exercise[randomSelect]);
        //     counter = 1;
        // }
        // if (sec < 0) {
        //     console.log("last" + sec);
        //     clearInterval(timer);
        //     removeActiveTrainingComponentsHandler();
        //     $("#reset-workout-cnt").text("DONE");
        //     $("#reset-workout-cnt").append('<input id="reset" type="button" value="RESET" onclick="resetTrainingHandler() " />');
        // }
        if (sec < 0) {
            clearInterval(timer);
            removeActiveTrainingComponentsHandler();
        }
    }, 1000);
}