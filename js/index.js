var screenHeight = $(window).height();
var sec = 0;
var min = 0;
var counter = 1;
var randomSelect;

$(document).ready(function() {
    $("#setup-time-cnt").css("height", screenHeight);
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
        $("#add-timer-cnt").css("display", "none");
        $("#start-btn").css("display", "none");
        $("#timer").css("display", "flex");
        $("#setup-time-cnt").css("height", 0);
        $("#active-workout-cnt").css("height", screenHeight);
        timer()
    });

    function timer() {
        sec = sec + (min * 60);
        console.log(randomSelect = Math.floor(Math.random() * 6));

        function makeMeTwoDigits(n) {
            return (n < 10 ? "0" : "") + n;
        }

        var timer = setInterval(function() {
            document.getElementById('timer').innerHTML = makeMeTwoDigits(Math.floor(sec / 60)) + ":" + makeMeTwoDigits(sec % 60);
            sec--;
            randomSelect = Math.floor(Math.random() * 6);
            var currentPunch = $("#workout-task").html();;
            if (punches[randomSelect] == currentPunch) {
                console.log("Again");
                $("#workout-task").text(currentPunch);
                $("#workout-task-again").text(counter + " more!!");
                counter++;
            } else {
                console.log("2");
                $("#workout-task").text(punches[randomSelect]);
                $("#workout-task-again").text("");
                counter = 1;
            }
            if (sec < 0) {
                clearInterval(timer);
                $("#workout-task").text("DONE");
            }
        }, 1000);
    }
});