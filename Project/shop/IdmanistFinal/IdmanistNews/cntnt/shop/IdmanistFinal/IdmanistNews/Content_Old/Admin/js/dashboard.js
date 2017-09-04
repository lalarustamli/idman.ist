$(function() {

/* Dashboard calendar
============================================================================ */

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
var calendar = $('#calendar').fullCalendar({
	header: {
		left: 'prev,next',
		center: 'title,today',
		right: 'month,agendaWeek,agendaDay'
	},
	buttonText: {
		prev: '<i class="icon-chevron-left cal_prev" />',
		next: '<i class="icon-chevron-right cal_next" />'
	},
	aspectRatio: 1.5,
	selectable: true,
	selectHelper: true,
	select: function(start, end, allDay) {
		var title = prompt('Event Title:');
		if (title) {
			calendar.fullCalendar('renderEvent',
				{
					title: title,
					start: start,
					end: end,
					allDay: allDay
				},
				true // make the event "stick"
			);
		}
		calendar.fullCalendar('unselect');
	},
	editable: true,
	theme: false,
	events: [
		{
			title: 'All Day Event',
			start: new Date(y, m, 1),
									color: '#9094ba',
									textColor: '#ffffff'
		},
		{
			title: 'Long Event',
			start: new Date(y, m, d-5),
			end: new Date(y, m, d-2)
		},
		{
			id: 999,
			title: 'Repeating Event',
			start: new Date(y, m, d+8, 16, 0),
			allDay: false
		},
		{
			id: 999,
			title: 'Repeating Event',
			start: new Date(y, m, d+15, 16, 0),
			allDay: false
		},
		{
			title: 'Meeting',
			start: new Date(y, m, d+12, 15, 0),
			allDay: false,
									color: '#aedb97',
									textColor: '#3d641b'
		},
		{
			title: 'Lunch',
			start: new Date(y, m, d, 12, 0),
			end: new Date(y, m, d, 14, 0),
			allDay: false
		},
		{
		title: 'Birthday Party',
						start: new Date(y, m, d+1, 19, 0),
						end: new Date(y, m, d+1, 22, 30),
						allDay: false,
												color: '#be3d3d',
												textColor: '#ffffff'
					},
					{
						title: 'Click for Google',
						start: new Date(y, m, 28),
						end: new Date(y, m, 29),
						url: 'http://google.com/'
					}
				],
			eventColor: '#bcdeee'
		})
		
		
/* Chart 
============================================================================ */

elem = $('#chart');
	var sin = [], cos = [];
	for (var i = 0; i < 14; i += 0.5) {
						sin.push([i, Math.sin(i)]);
						cos.push([i, Math.cos(i)]);
				}

$.plot(elem, 
						[
								{ label: "Sin",  data: sin},
								{ label: "Cos",  data: cos}
						], 
						{
								lines: { show: true, },
								points: { show: true },
								legend: { backgroundOpacity: 0, noColumns: 0, margin: [0, -30] },
								shadowSize: 0,
								yaxis: { min: -1.1, max: 1.1, tickColor: '#e3e3e3', color: '#7d7d7d'},
								xaxis: { tickColor: '#e3e3e3', color: '#7d7d7d' },
								grid: {
										hoverable: true,
										borderWidth: 0,
										backgroundColor: '#ffffff',
										borderColor: '#ffffff',
								},
							
								
			colors: [ "#be3d3d", "#9094ba" ]
						}
				);

	 // Create a tooltip on our chart
		elem.qtip({
				prerender: true,
				content: 'Loading...', // Use a loading message primarily
				position: {
						viewport: $(window), // Keep it visible within the window if possible
						target: 'mouse', // Position it in relation to the mouse
						adjust: { x: 8, y: -30 } // ...but adjust it a bit so it doesn't overlap it.
				},
				show: false, // We'll show it programatically, so no show event is needed
				style: {
						classes: 'ui-tooltip-tipsy',
						tip: false // Remove the default tip.
				}
		});
		
		// Bind the plot hover
		elem.on('plothover', function(event, coords, item) {
				// Grab the API reference
				var self = $(this),
						api = $(this).qtip(),
						previousPoint, content,
 
				// Setup a visually pleasing rounding function
				round = function(x) { return Math.round(x * 1000) / 1000; };
 
				// If we weren't passed the item object, hide the tooltip and remove cached point data
				if(!item) {
						api.cache.point = false;
						return api.hide(event);
				}
 
				// Proceed only if the data point has changed
				previousPoint = api.cache.point;
				if(previousPoint !== item.dataIndex)
				{
						// Update the cached point data
						api.cache.point = item.dataIndex;
 
						// Setup new content
						content = item.series.label + '(' + round(item.datapoint[0]) + ') = ' + round(item.datapoint[1]);
 
						// Update the tooltip content
						api.set('content.text', content);
 
						// Make sure we don't get problems with animations
						//api.elements.tooltip.stop(1, 1);
 
						// Show the tooltip, passing the coordinates
						api.show(coords);
				}
		});		
							

});