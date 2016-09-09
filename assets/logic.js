$(document).ready(function() {

		$('#calendar').fullCalendar({
			defaultDate: '2016-09-12',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2016-09-01'
				},
			
				
			]
		});
		
	});