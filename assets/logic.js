var deliveryDate;
var companyName;
var deliveryAddress;
var itemNumber;
var timeRequired;
var specialInstructions;
var enteredBy;

$(document).ready(function() {



	$('#calendar').fullCalendar({
		defaultDate: '2016-09-12',
		editable: true,
		//this will show only Monday-Friday
		weekends: false,
		eventLimit: true, // limits events to five a day
		events: [
			{
				title: 'All Day Event',
				start: '2016-09-01'
			},
			
				
		]
	//end of full calendar function
	});

	//get user inputs
	deliveryDate = $("#delDate").val();
	companyName = $("#compName").val().trim();
	deliveryAddress = $("#delAddress").val().trim();
	itemNumber = $("#itemNum").val().trim();
	timeRequired = $("#projectedHours").val().trim();
	specialInstructions = $("#specInstr").val().trim();
	enteredBy = $("#enterBy").val().trim();

	var newDeliveryListing = {
		title: companyName,
		start: deliveryDate,
		addy: deliveryAddress,
		items: itemNumber,
		time: timeRequired,
		instrux: specialInstructions,
		salesperson: enteredBy
	}

	var APIkey = "94ccf5084d7d124f3b9a747e7d55d177";

	var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=" + APIkey;
	/*var queryURL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Austin&units=imperial&cnt=7&appid=" + APIkey;*/
	

	$.ajax({url: queryURL, method: 'GET'})

    // We store all of the retrieved data inside of an object called "response"
    .done(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
     $("#weatherForecast").append("<p>Temperature: " + response.main.temp + "</p>");
      $("#weatherForecast").append("<p>Humidity: " + response.main.humidity + "%</p>");
      $("#weatherForecast").append("<p>Forecast High: " + response.main.temp_max + "</p>");
      $("#weatherForecast").append("<p>Forecast Low: " + response.main.temp_min + "</p>");
    }); 

//end of document ready function		
});