//Fab MENU
const fabMenu = () => {
  $('.fab-menu').on('click', function(e) {
    e.stopPropagation();
    let $this = $(this),
    $menuGroup = $this.parent(),
    $subMenu = $this.next().children(),
    fabDir = '';
    if ($this.data("fab") == 'right') {
      fabDir = 'translateX('
    } else if ($this.data("fab") == 'left') {
      fabDir = 'translateX(-'
    } else if ($this.data("fab") == 'up') {
      fabDir = 'translateY(-'
    } else {
      //fallback is down
      fabDir = 'translateY('
    };
    $this.parent().toggleClass('open');
    if ($menuGroup.hasClass('open')) {
      let num = 0;
      $subMenu.each(function(index, value) {
        num += 48;
        $(this).css({'transform': `${fabDir}${num}px)`});
      });
    } else {
      $(this).removeAttr('style')
    }
  });
  $(document).on('click', function(e) {
    $('.btn-fab-group').removeClass('open');
  });
};
const toggleCard = () => {
  $('input#toggle-price:checkbox').on('change',function() {
    if ($(this).is(":checked")) {
      $('.pricing-wrapper .card-container').addClass("flipped");
    } else {
      $('.pricing-wrapper .card-container').removeClass("flipped");
    }
  });
}
const toggleSearch = () => {
  if($('.search-target')[0]) {
    let toggleSearchIcon = '[data-search-trigger]',
    $body = $('body');
    $body.on('focus', toggleSearchIcon, function(e) {
      let element = $(this),
      className = element.data('searchTrigger'),
      $target = element.parents('.search-target');
      $target.addClass('open');
    });
    $body.on('blur', toggleSearchIcon, function(e) {
      let element = $(this),
      className = element.data('searchTrigger'),
      $target = element.parents('.search-target');
      $target.removeClass('open');
    });
  };
};
export {fabMenu, toggleCard, toggleSearch}
