// Set the date we're counting down to
var countDownDate = new Date("June 5, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("").innerHTML = "EXPIRED";
  }
}, 1000);

// Countdown for mobile
// Set the date we're counting down to
var countDownDateM = new Date("June 5, 2022 00:00:00").getTime();

// Update the count down every 1 second
var xM = setInterval(function () {
  // Get today's date and time
  var nowM = new Date().getTime();

  // Find the distanceM between nowM and the count down date
  var distanceM = countDownDateM - nowM;

  // Time calculations for days, hours, minutes and seconds
  var daysM = Math.floor(distanceM / (1000 * 60 * 60 * 24));
  var hoursM = Math.floor(
    (distanceM % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesM = Math.floor((distanceM % (1000 * 60 * 60)) / (1000 * 60));
  var secondsM = Math.floor((distanceM % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoMobile").innerHTML =
    daysM + "d " + hoursM + "h " + minutesM + "m " + secondsM + "s ";

  // If the count down is over, write some text
  if (distanceM < 0) {
    clearInterval(xM);
    document.getElementById("demoMobile").innerHTML = "EXPIRED";
  }
}, 1000);

// share with
var url = window.location;
var title = document.title;
var mnsocial = document.getElementsByClassName("mn-social-bottom");
mnsocial[0].href = "https://www.facebook.com/sharer/sharer.php?u=" + 'https://wittyoneliners.com/';
mnsocial[1].href = "https://twitter.com/home?status=" + 'https://wittyoneliners.com/' + " " + title;
mnsocial[2].href = "https://www.linkedin.com/shareArticle?mini=true&url=" + 'https://wittyoneliners.com/';
mnsocial[3].href = "https://api.whatsapp.com/send?phone=&text=" + 'https://wittyoneliners.com/';





function copyText() {
      
  /* Copy text into clipboard */
  navigator.clipboard.writeText
      ('https://wittyoneliners.com/');
      // alert("Link copied to clipboard");
      document.getElementById("link-copy").innerHTML = "Link copied to clipboard";
}