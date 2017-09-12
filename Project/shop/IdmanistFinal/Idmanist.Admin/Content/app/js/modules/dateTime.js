const currentDateTimeSidebar = () => {
  moment.updateLocale('en', {
    ordinal: function(number, token) {
      var b = number % 10;
      var output = (~~(number % 100 / 10) === 1) ? 'th' :
      (b === 1) ? 'st' :
      (b === 2) ? 'nd' :
      (b === 3) ? 'rd' : 'th';
      return number + '<sup>' + output + '</sup>';
    }
  });
    $('.curr-dd').html(moment().format('dddd') + ',');
    $('.curr-mmmm-dd').html(moment().format("MMMM Do"));
};
const nextThreeDays = () => {
  moment.updateLocale('en', {
    calendar: {
      'lastDay': 'D MMMM',
      'sameDay': 'h:mmA',
      'nextDay': 'dddd',
      'lastWeek': 'dddd',
      'nextWeek': 'dddd',
      'sameElse': 'dddd'
    }
  });
  if ($('.forcast').length > 0) {
    $('.forcast-one').html(moment().add(1, 'days').calendar());
    $('.forcast-two').html(moment().add(2, 'days').calendar());
    $('.forcast-three').html(moment().add(3, 'days').calendar());
  }
};
const todaysDate = () =>{
  var today = moment().format('MM/DD/YYYY');
  var year = moment().format('YYYY');
  $('.today').text(today);
  $('.year').text(year);
}
const timlineInput = () =>{
  var date = new Date().toISOString().substring(0, 10);
  $('#timeline-date').val(date);
  var picker = new Pikaday(
    {
      field: document.getElementById('timeline-date'),
      firstDay: 1,
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
      yearRange: [2000,2020]
    });
  };
export {
  currentDateTimeSidebar,
  nextThreeDays,
  todaysDate,
  timlineInput
}
