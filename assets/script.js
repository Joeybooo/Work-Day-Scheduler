$(document).ready(function () {
    // display current date and time
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"));
    
    //Assign saveBtn click listener for user inpput and time stamp
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).sibling(".description").val();
        var time = $(this).parent().attr("id");

        // set item in local storage
        localStorage.setItem(time, text);
    })
})

// load data in local storage

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// hour tracking function

function hourTracker() {
    // get current hours
    var currentHour = moment().hour();

    // loop time blocks
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        // check if hour has passed
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();