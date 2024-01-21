$(document).ready(function() {
  console.log("Document is ready."); // Check if document is ready
});

let currentDay= $("currentDay");
let now=dayjs().format('dddd, MMMM Do D');
// currentDay.text(now);
$("currentDay").html(currentDay);

// let timeBlock =

$(".saveBtn").on("click", function(){
  
})