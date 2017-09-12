//These javascript modules are for demo purposes.
var iconModal = () => {
  var icons = $('.icon');
  var name = 'bus';
  icons.on('click', function(e) {
    e.preventDefault();
    var oldName = name;
    name = $(this).data('name');
    var code = $(this).data('code');
    var category = $(this).parent().parent().find('.page-header').html();
    $('#icon-sizes i').removeClass('zmdi-' + oldName).addClass('zmdi-' + name);
    $('#iconModal .source').html('&lt;i class="zmdi zmdi-' + name + '"&gt;&lt;/i&gt;');
    $('#icon-code .zmdi').html('&#x' + code);
    $('#icon-code .unicode').html('Unicode: ' + code);
    $('#icon-code .category').html('Category: ' + category);
    $('#iconModalLabel').html('zmdi-' + name);
  });
};
const css3AnimationDemos = () => {
  $('.animation-demo .btn').on('click', function() {
    var className = $(this).text();
    var cardImg = $(this).closest('.card').find('img');
    $(this).closest('img').addClass(className);
    cardImg.removeAttr('class');
    cardImg.addClass('img-circle animated ' + className);
    setTimeout(function() {
      cardImg.removeClass(className);
    }, 1500);
  });
};
const cardCarousel = () => {
  $('#card-carousel').slick({dots: true, infinite: true, speed: 300, slidesToShow: 1, adaptiveHeight: true});
}
const cardDemoMorrisChart = () => {
  if ($('#morris_card_demo').length) {
    var data = [
      {
        y: '2014',
        a: 50,
        b: 90
      }, {
        y: '2015',
        a: 65,
        b: 75
      }, {
        y: '2016',
        a: 50,
        b: 50
      }, {
        y: '2017',
        a: 75,
        b: 60
      }, {
        y: '2018',
        a: 80,
        b: 65
      }, {
        y: '2019',
        a: 90,
        b: 70
      }, {
        y: '2020',
        a: 100,
        b: 75
      }, {
        y: '2021',
        a: 115,
        b: 75
      }, {
        y: '2022',
        a: 120,
        b: 85
      }, {
        y: '2023',
        a: 145,
        b: 85
      }, {
        y: '2024',
        a: 160,
        b: 95
      }
    ],
    config = {
      data: data,
      xkey: 'y',
      ykeys: [
        'a', 'b'
      ],
      labels: [
        'Total Income', 'Total Outcome'
      ],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors: ['#ffffff'],
      pointStrokeColors: ['black'],
      barColors: ['#db5c60', '#f4b0b2']
    };
    config.element = 'morris_card_demo';
    config.stacked = true;
    Morris.Bar(config);
  };
}
const loadThemes = () => {
  $('[data-load-css]').on('click', function(e) {
    var element = $(this);
    if (element.is('a'))
    e.preventDefault();
    var uri = element.data('loadCss'),
    link;
    if (uri) {
      link = swapStyleSheet(uri);
      if (!link) {
        $.error('Error creating stylesheet link element.');
      }
    } else {
      $.error('No stylesheet location defined.');
    }
  });
};
const swapStyleSheet = (uri) => {
  var linkId = 'autoloaded-stylesheet',
  oldLink = $('#' + linkId).attr('id', linkId + '-old');
  $('head').append($('<link/>').attr({'id': linkId, 'rel': 'stylesheet', 'href': uri}));
  if (oldLink.length) {
    oldLink.remove();
  }
  return $('#' + linkId);
}
const swapLayoutMode = () =>{
  $('input[name=layoutMode]').click(function(){
    if($('body').hasClass('boxed-layout')){
      $('body').removeClass('boxed-layout');
    }
      let getVal = $(this).val();
      $('body').addClass(getVal);
  });
}
export {iconModal, css3AnimationDemos, cardCarousel, cardDemoMorrisChart,loadThemes,swapLayoutMode}
