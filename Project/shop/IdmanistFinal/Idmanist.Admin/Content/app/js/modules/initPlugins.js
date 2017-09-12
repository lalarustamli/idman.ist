var scrollBar = () => {
  if ($('.scrollbar').length > 0) {
    $('.scrollbar').mCustomScrollbar({
      theme: "minimal-dark",
            scrollInertia: 1000,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  $("#app_main-menu-wrapper.scrollbar").mCustomScrollbar("scrollTo", ".nav-dropdown.active", {scrollInertia: 0});
}
var otherScrollbarOptions = () => {
  if ($('.scrollbar-minimal-light').length > 0) {
    $('.scrollbar-minimal-light').mCustomScrollbar({
      theme: "minimal",
      scrollInertia: 1000,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  if ($('.scrollbar-light').length > 0) {
    $('.scrollbar-light').mCustomScrollbar({
      theme: "light",
      scrollInertia: 1000,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  if ($('.scrollbar-dark').length > 0) {
    $('.scrollbar-dark').mCustomScrollbar({
      theme: "dark",
      scrollInertia: 1000,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
}
var selectDropdowns = () => {
  $(".select.country").dropdown({"optionClass": "withripple", "dropdownClass": "country-icons"});
  $('.country-icons ul li').each(function() {
    let countryOptions = $(this).text();
    if ($.trim(countryOptions) === 'English') {
      $(this).prepend('<img src="assets/img/icons/flags/US.png" class="max-w-20 m-r-10" alt="" />');
    } else if ($.trim(countryOptions) === 'Español') {
      $(this).prepend('<img src="assets/img/icons/flags/ES.png" class="max-w-20 m-r-10" alt="" />');
    } else if ($.trim(countryOptions) === 'Français') {
      $(this).prepend('<img src="assets/img/icons/flags/FR.png" class="max-w-20 m-r-10" alt="" />');
    } else if ($.trim(countryOptions) === 'Italiano') {
      $(this).prepend('<img src="assets/img/icons/flags/IT.png" class="max-w-20 m-r-10" alt="" />');
    }
  });
  $(".select").dropdown({"optionClass": "withripple"});
}
var countTo = () => {
  $('.timer').countTo();
}
var initTooltips = () => {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function() {
    $('.tooltip').addClass('scale').css('opacity', 1);
  });
}
//Ref: https://github.com/hellsan631/material-avatar
var materialAvatar = () => {
  var $mdCircleAvatar = $('.circle-profile-photo'),
  $mdSquareAvatar = $('.square-profile-photo');
  $mdCircleAvatar.materialAvatar({shape: 'circle'});
  $mdSquareAvatar.materialAvatar();
}
var initSliders = () => {
  if ($('#slider-danger').length) {
    var sliderDanger = document.getElementById('slider-danger');
    noUiSlider.create(sliderDanger, {
      start: 10,
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-warning').length) {
    var sliderWarning = document.getElementById('slider-warning');
    noUiSlider.create(sliderWarning, {
      start: 20,
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-info').length) {
    var sliderInfo = document.getElementById('slider-info');
    noUiSlider.create(sliderInfo, {
      start: 40,
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-success').length) {
    var sliderSuccess = document.getElementById('slider-success');
    noUiSlider.create(sliderSuccess, {
      start: 10,
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-primary').length) {
    var sliderPrimary = document.getElementById('slider-primary');
    noUiSlider.create(sliderPrimary, {
      start: 60,
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-danger-vert').length) {
    var sliderDangerVert = document.getElementById('slider-danger-vert');
    noUiSlider.create(sliderDangerVert, {
      start: 10,
      orientation: 'vertical',
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-warning-vert').length) {
    var sliderWarningVert = document.getElementById('slider-warning-vert');
    noUiSlider.create(sliderWarningVert, {
      start: 20,
      orientation: 'vertical',
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-info-vert').length) {
    var sliderInfoVert = document.getElementById('slider-info-vert');
    noUiSlider.create(sliderInfoVert, {
      start: 40,
      orientation: 'vertical',
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-success-vert').length) {
    var sliderSuccessVert = document.getElementById('slider-success-vert');
    noUiSlider.create(sliderSuccessVert, {
      start: 10,
      orientation: 'vertical',
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-primary-vert').length) {
    var sliderPrimaryVert = document.getElementById('slider-primary-vert');
    noUiSlider.create(sliderPrimaryVert, {
      start: 60,
      orientation: 'vertical',
      connect: [
        true, false
      ],
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
  if ($('#slider-range').length) {
    // Initialize slider:
    var rangeSlider = document.getElementById('slider-range');
    var moneyFormat = wNumb({decimals: 0, thousand: ',', prefix: '$'});
    noUiSlider.create(rangeSlider, {
      start: [
        162091, 676818
      ],
      step: 1,
      range: {
        'min': [100000],
        'max': [1000000]
      },
      connect: true,
      format: moneyFormat
    });
    rangeSlider.noUiSlider.on('update', function(values, handle) {
      document.getElementById('slider-range-value1').innerHTML = values[0];
      document.getElementById('slider-range-value2').innerHTML = values[1];
      document.getElementsByName('min-value').value = moneyFormat.from(values[0]);
      document.getElementsByName('max-value').value = moneyFormat.from(values[1]);
    });
  };
}
const materialDatePicker = () => {
  $('#md_input_date').bootstrapMaterialDatePicker({weekStart: 0, time: false});
  $('#md_input_time').bootstrapMaterialDatePicker({date: false, format: 'HH:mm'});
  $('#md_input_date_time').bootstrapMaterialDatePicker({format: 'dddd DD MMMM YYYY - HH:mm'});
}
const pikaday = () => {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    firstDay: 1,
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020]
  });
  var pickerTheme = new Pikaday({field: document.getElementById('datepicker-theme'), theme: 'dark-theme'});
  var startDate,
  endDate,
  updateStartDate = function() {
    startPicker.setStartRange(startDate);
    endPicker.setStartRange(startDate);
    endPicker.setMinDate(startDate);
  },
  updateEndDate = function() {
    startPicker.setEndRange(endDate);
    startPicker.setMaxDate(endDate);
    endPicker.setEndRange(endDate);
  },
  startPicker = new Pikaday({
    field: document.getElementById('start_date'),
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
      startDate = this.getDate();
      updateStartDate();
    }
  }),
  endPicker = new Pikaday({
    field: document.getElementById('end_date'),
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
      endDate = this.getDate();
      updateEndDate();
    }
  }),
  _startDate = startPicker.getDate(),
  _endDate = endPicker.getDate();
  if (_startDate) {
    startDate = _startDate;
    updateStartDate();
  }
  if (_endDate) {
    endDate = _endDate;
    updateEndDate();
  }
}
//Form validation
const triggerFormValidation = () => {
  $("#form-horizontal").validate({
    highlight: function(element) {
      $(element).closest(".form-group").addClass("has-error")
    },
    unhighlight: function(element) {
      $(element).closest(".form-group").removeClass("has-error")
    },
    errorElement: "span",
    errorClass: "help-block",
    errorPlacement: function(element, e) {
      e.parent(".input-group").length
      ? element.insertAfter(e.parent())
      : e.parent("label").length
      ? element.insertBefore(e.parent())
      : element.insertAfter(e)
    }
  })
}
const masonryInit = () => {
  $('#masonry').masonry({itemSelector: '.masonry-item'});
}
const keepDropdownOpen = () => {
  $(document).on('click', '.dropdown-menu', function(e) {
    e.stopPropagation();
  });
};
const slickCarousel = () => {
  $('#new_arrivals_img').slick({dots: true, infinite: true, speed: 500, cssEase: 'linear'});
}
const videoPlayer = () => {
  if ($('audio, video')[0]) {
    $('video,audio').mediaelementplayer();
  }
}
const initPopovers = () =>{
   $("[data-toggle=popover]").popover();
}
const initToolbarjs = () =>{
  // Define any icon actions before calling the toolbar
				$('.toolbar-icons a').on('click', function( event ) {
					event.preventDefault();
				});
				$('button[data-toolbar="user-options"]').toolbar({
				    content: '#user-options',
				    position: 'top',
              event: 'hover'
				});
				$('button[data-toolbar="transport-options"]').toolbar({
				    content: '#transport-options',
				    position: 'top',
              event: 'hover'
				});
				$('button[data-toolbar="transport-options-o"]').toolbar({
				    content: '#transport-options-o',
				    position: 'bottom',
				    event: 'hover'
				});
				$('button[data-toolbar="content-option"]').toolbar({
				    content: '#transport-options',
				    event: 'hover'
				});
				$('button[data-toolbar="position-option"]').toolbar({
				    content: '#transport-options',
				    position: 'bottom',
				    event: 'hover'
				});
				$('button[data-toolbar="style-option"]').toolbar({
				    content: '#transport-options',
				    position: 'bottom',
				    style: 'primary',
				    event: 'hover'
				});
				$('button[data-toolbar="animation-option"]').toolbar({
				    content: '#transport-options',
				    position: 'bottom',
				    style: 'primary',
				    animation: 'flyin',
				    event: 'hover'
				});
				$('button[data-toolbar="event-option"]').toolbar({
				    content: '#transport-options',
				    position: 'bottom',
				    style: 'primary',
            event: 'hover'
				});
				$('button[data-toolbar="hide-option"]').toolbar({
				    content: '#transport-options',
				    position: 'bottom',
				    style: 'primary',
				    event: 'hover',
				    hideOnClick: true
				});
				$('#link-toolbar').toolbar({
					content: '#user-options',
					position: 'top',
					event: 'hover',
					adjustment: 35
				});
				$('button[data-toolbar="set-01"]').toolbar({
				    content: '#set-01-options',
				    position: 'top',
  					event: 'hover'
				});
				$('button[data-toolbar="set-02"]').toolbar({
				    content: '#set-02-options',
				    position: 'left',
  					event: 'hover'
				});
				$('button[data-toolbar="set-03"]').toolbar({
				    content: '#set-03-options',
				    position: 'bottom',
  					event: 'hover'
				});
				$('button[data-toolbar="set-04"]').toolbar({
				    content: '#set-04-options',
				    position: 'right',
  					event: 'hover'
				});
				$(".download").on('click', function() {
					mixpanel.track("Toolbar.Download");
				});
				$("#transport-options-2").find('a').on('hover', function() {
					$this = $(this);
					$button = $('button[data-toolbar="transport-options-2"]');
					$newClass = $this.find('i').attr('class').substring(3);
					$oldClass = $button.find('i').attr('class').substring(3);
					if($newClass != $oldClass) {
						$button.find('i').animate({
							top: "+=50",
							opacity: 0
						}, 200, function() {
							$(this).removeClass($oldClass).addClass($newClass).css({top: "-=100", opacity: 1}).animate({
								top: "+=50"
							});
						});
					}
				});
				$('button[data-toolbar="transport-options-2"]').toolbar({
				    content: '#transport-options-2',
				    position: 'top',
				});
}
export {
  scrollBar,
  selectDropdowns,
  materialAvatar,
  initTooltips,
  initPopovers,
  countTo,
  otherScrollbarOptions,
  initSliders,
  materialDatePicker,
  pikaday,
  triggerFormValidation,
  masonryInit,
  keepDropdownOpen,
  slickCarousel,
  videoPlayer,
  initToolbarjs
}
