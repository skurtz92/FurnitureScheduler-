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

	//$('#datepicker').datepicker();

	/*$('#datepicker').on('change', function(event){
    deliveryDate = event.currentTarget.value;
	});*/

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

//end of document ready function		
});