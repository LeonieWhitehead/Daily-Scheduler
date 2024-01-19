let today = dayjs();
$('#currentDay').text(today.format("dddd-MMMM-D"));

//Get data for header date
// $(document).ready(function() {
// let currentDate = dayjs();
// let formattedDate = currentDate.format('dddd-MMMM-D');
// $('#currentDay').text(formattedDate);
// console.log(formattedDate);
// });

// Create Hours
let hoursInDay =[]

// Create timeblocks
// Time dependent row colours