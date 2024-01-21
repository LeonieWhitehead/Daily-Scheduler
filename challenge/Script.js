$(document).ready(function () {
  console.log("Document is ready."); // Check if document is ready
  // Display current date in the header
  // $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  let currentDay= $("#currentDay");
  let today =dayjs().format('dddd, MMMM D');
  // currentDay.text(now);
  currentDay.text(today);

  // Function to update time block colours based on current time
  function updateHourlyColours() {
    let currentHour = dayjs().hour();

    $(".row").each(function () {
      let hourBlock = parseInt($(this).find(".time-column").text().trim());

      // if (hourBlock < currentHour) {
      //   $(this).removeClass("present future").addClass("past");
      // } else if (hourBlock === currentHour) {
      //   $(this).removeClass("past future").addClass("present");
      // } else {
      //   $(this).removeClass("past present").addClass("future");
      // }


      //clean up code by combining if statements using ternary
      $(this).removeClass("past present future").addClass(
        hourBlock < currentHour ? "past" :
        hourBlock === currentHour ? "present" :
        "future"
      );
    });
  }

  // Function to load saved events from localStorage
  function loadEvents() {
    $(".row").each(function () {
      let hourBlock = $(this).find(".time-column").text().trim();
      let savedEvent = localStorage.getItem(hourBlock);

      if (savedEvent) {
        $(this).find(".timeBlockText").val(savedEvent);
      }
    });
  }

  // Function to save events to localStorage
  function saveEvents() {
    $(".row").each(function () {
      let hourBlock = $(this).find(".time-column").text().trim();
      let eventText = $(this).find(".timeBlockText").val().trim();

      localStorage.setItem(hourBlock, eventText);
    });
  }

  // Update colours on page load
  updateHourlyColours();

  // Load saved events on page load
  loadEvents();

  // function for timeslots
  // $("hourOfDay").each(function()){

  // }
  // Save events on save button click
  $(".saveBtn").on("click", function () {
    saveEvents();
    // console.log(this);
    // event.preventDefault();
    // $("#hourOfDay").append("#timeBlockText");
  });
});
