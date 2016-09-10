$(document).ready(function() {

		$('#calendar').fullCalendar({
			defaultDate: '2016-09-12',
			editable: true,
			//this will show only Monday-Friday
			//weekends: false,
			eventLimit: true, // limits events to five a day
			events: [
				{
					title: 'All Day Event',
					start: '2016-09-01'
				},
			
				
			]
		});
		
	});