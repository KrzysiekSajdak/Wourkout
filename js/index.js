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
        console.log(chosenTraining);
        timeSelectorHandler(chosenTraining, sec, min);
    });

    
});

function finishWorkoutHandler() {

}

function resetTrainingHandler() {
  
}

