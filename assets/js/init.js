var deadline = new Date('2016-02-23T11:00:00');

function getTimeRemaining(deadline) {
  var t = Date.parse(deadline) - Date.parse(new Date());

  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/(1000*60*60)) % 24);
  var days = Math.floor( t/(1000*60*60*24) );

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateTime() {
  var data = getTimeRemaining(deadline);

  $("#daysID").html(data.days + " days");

  $("#counterDays").html(data.days + " days - ");
  $("#counterHours").html(data.hours + " hours - ");
  $("#counterMinutes").html(data.minutes + " minutes - ");
  $("#counterSeconds").html(data.seconds + " seconds");
}

updateTime();

setInterval(updateTime, 1000);
