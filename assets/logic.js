$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});

$('#calendar').fullCalendar({
    weekends: false // will hide Saturdays and Sundays
});
$('#calendar').fullCalendar({
    dayClick: function() {
        alert('a day has been clicked!');
    }
});
$('#calendar').fullCalendar('next');
