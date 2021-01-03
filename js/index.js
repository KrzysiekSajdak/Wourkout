var deviceScreenHeight = $(window).height();
var sec = 0;
var min = 0;
var counter = 1;
var randomSelect;
var chosenTraining;
var exercise;

$(document).ready(function() {

    addMenuHandler();
    
    $(".button").click(function () { 
        chosenTraining = $(this).attr("id");
        $("#training-menu").remove();
        // var training; 
        // switch (chosenTraining) {
        //     case "punches":
        //         training = punches;
        //         break;
        //     case "kicks":
        //         training = kicks;
        //         break;
        //     case "combinations":
        //         training = combinations;
        //         break;
        //     default:
        //         break;
        // }
        timeSelectorHandler(chosenTraining, sec, min);
    });

    
});

function finishWorkoutHandler() {

}

function resetTrainingHandler() {
  
}

