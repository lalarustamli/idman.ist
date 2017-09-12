const autocompleteBasic = () => {
    var statesArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    $('#autocomplete_states').typeahead({
        source: statesArray
    });
}
const autocompleteClear = () => {
    var statesArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    $('#autocomplete_clear').typeahead({
        source: statesArray
    });
$(document.body).on('click','.autocomplete_clear .zmdi-close',function(){
  $('#autocomplete_clear').val('');
  $('.autocomplete_clear .zmdi-close').remove();
});
    $("#autocomplete_clear").on('change keyup copy paste cut', function(e) {
      if(e.which == 8 && this.value.length == 0){
        $(this).parent().find('.zmdi-close').remove();
      } else if ($('.autocomplete_clear .zmdi-close').length == 0){
        $(this).parent().append(`<i class="zmdi zmdi-close"></i>`);
      }
    });
}
const countryAutocomplete = () => {
    var countryObjs = {};
    var countryNames = [];
    var throttledRequest = _.debounce(function(query, process) {
        $.ajax({
            url: '/assets/data/autocomplete_countries.json',
            cache: false,
            success: function(data) {
                countryObjs = {};
                countryNames = [];
                _.each(data, function(item, ix, list) {
                    countryNames.push(item.countryName);
                    countryObjs[item.countryName] = item;
                });
                process(countryNames);
            }
        });
    }, 300);
    $("#autocomplete_countries").typeahead({
        source: function(query, process) {
            throttledRequest(query, process);
        },
        highlighter: function(item) {
            var country = countryObjs[item];
            return `<div class="country"><img style="max-width:45px;margin:10px;" src="assets/img/icons/flags/${country.countryCode}.png"/><strong>${country.countryName}</strong></div>`;
        },
        updater: function(selectedName) {
            $(".country").val(countryObjs[selectedName].id);
            return selectedName;
        }
    });
}
export {
    autocompleteBasic,
    autocompleteClear,
    countryAutocomplete
}
