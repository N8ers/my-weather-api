$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a106239c326e4b268a05bd6c1d2f755d`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showTemp').text(`It's ${response.main.temp} F in ${city},`);
          $('.showHumidity').text(`with ${response.main.humidity}% humidity!`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });
  });