// Wrap all code that interacts with the DOM in a call to jQuery to ensure that// the code isn't run until the browser has finished rendering all the elements// in the html.
$(function () {
  // TODO: 
  // Code to handle the button click & save the information to local storage!!!
  $('.saveBtn').on('click', function() {

    var note = $(this).siblings(".description"). val();
    var time = $(this).parent().attr("id");
 
    localStorage.setItem(time, note);
});
  //Changes Schedule color depending on time!!!!
  // TODO: Add code to apply the past, present, or future class to each time Add code to apply the past, present, or future class to each time

  function timeTracker () {

    var currentTime = moment().hour();
      
    $(".time-block").each(function (){

      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      if (blockTime < currentTime) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
          
      }
      else if (blockTime === currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("past");
          $(this).addClass("future");
          $(this).removeClass("present");   
      }
    })
  }

  // Adds text to Schedular and saves text even when refreshed!!!!
  // TODO: Add code to get any user input that was saved in localStorage and set

  // retreive local storage code
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  

  // TODO: Add code to display the current date in the header of the page!!!

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));




  timeTracker();
});
