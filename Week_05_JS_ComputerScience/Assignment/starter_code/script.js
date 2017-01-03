 
$(document).ready(function() {
  // don't understand how this works!! got it from the solution code!

 $('#submit-btn').click(function(){

  event.preventDefault();

  var city = $('#city-type').val();
  $('#city-type').val(''); 
  // this also confuses me!

  if  (city === 'new york city' || city === 'New York City' || city === 'nyc' || city === 'NYC' || city === 'new york' || city === 'New York ') {
    $('body').attr('class', 'nyc');
  } 

  else if (city === 'San Francisco' || city === 'san francisco' || city === 'SF' || city === 'sf' || city === 'Bay Area' || city === 'bay area') {
    $('body').attr('class', 'sf');
  } 

  else if (city === 'LA' || city === 'la' || city === 'Los Angeles' || city === 'los angeles' || city === 'LAX' || city === 'lax') {
    $('body').attr('class', 'la');
  } 

  else if (city === 'Austin' || city === 'austin' || city === 'ATX' || city === 'atx') {
    $('body').attr('class', 'austin');
  } 

  else (city === 'Sydney' || city === 'sydney' || city === 'SYD' || city === 'syd') {
    $('body').attr('class', 'sydney');
  }
    });
});

