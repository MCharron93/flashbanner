// NOTE this section is used to create and test different timer options. I will add in some options for editing a template for the banner
// NOTE the banner requires the following:
            
            // NOTE the banner must display at the top of the page with indication that a flash sale is happening
            // NOTE the banner must also display a timer counting down from 1 hour and update every second 
            // NOTE the banner should contain icons to give it some brand feel

// NOTE created function that runs a simple window alert every 5 seconds. This could be used to create time and clock to display for flash sale in banner

function checkTime(){
  // NOTE created sale start time to compare current date & time to 
  const saleStarts = new Date(2021, 2, 1, 8, 05, 0)
  let currentDate = new Date()
  // NOTE create end sale time to compare current date & time to for difference in time conversion
  const saleEnds = new Date(2021, 2, 3, 11, 05, 0)


  // NOTE compare if the currentDate is after saleStart time and before the saleEnd time
  // NOTE call timer and pass milliseconds to timer
  if(currentDate >= saleStarts && currentDate <= saleEnds){
    let milliseconds = saleEnds - currentDate
    timer(milliseconds)
  }

}


// NOTE first create the total amount of time to start at
function timer(milliseconds) {
  
  var saleTime = milliseconds;
  var seconds = Math.floor(saleTime/1000);
  

  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

//   NOTE removed the timer slots for days since it will not be used
//   pad(days) + ":" + 
//   pad(hours) + " hours " +

  document.getElementById('countdown').innerHTML =  pad(minutes) + " : " + pad(remainingSeconds);

  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval("checkTime()", 1000);