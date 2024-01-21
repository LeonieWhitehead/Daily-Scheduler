$(document).ready(function () {
  console.log("Document is ready."); // Check if document is ready
  // Display current date in the header
  $("currentDay").text(dayjs().format("dddd, MMMM D"));

  // let currentDay= $("currentDay");
  // let now=dayjs().format('dddd, MMMM Do D');
  // // currentDay.text(now);
  // $("currentDay").html(currentDay);

  // Function to update time block colors based on current time
  function updateHourlyColors() {
    let currentHour = dayjs().hour();

    $(".row").each(function () {
      let hourBlock = parseInt($(this).find(".col-md-1").text().trim());

      if (hourBlock < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  // Function to load saved events from localStorage
  function loadEvents() {
    $(".row").each(function () {
      let hourBlock = $(this).find(".col-md-1").text().trim();
      let savedEvent = localStorage.getItem(hourBlock);

      if (savedEvent) {
        $(this).find("#timeBlockText").value(savedEvent);
      }
    });
  }

// Function to save events to localStorage

// Update colors on page load
updateHourlyColors();

// Load saved events on page load
loadEvents();

  // function for timeslots
  // $("hourOfDay").each(function()){

  // }
// Save events on save button click
  $(".saveBtn").on("click", function(){
    saveEvents();
    // console.log(this);
    // event.preventDefault();
  // $("#hourOfDay").append("#timeBlockText");
  });
});