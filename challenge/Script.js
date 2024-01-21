$(document).ready(function() {
  console.log("Document is ready."); // Check if document is ready


let currentDay= $("currentDay");
let now=dayjs().format('dddd, MMMM Do D');
// currentDay.text(now);
$("currentDay").html(currentDay);

let timeBlock =[
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
];



$(".saveBtn").on("click", function(event){
  console.log(this);
  // event.preventDefault();
$("#hourOfDay").append("#timeBlockText");
})
});