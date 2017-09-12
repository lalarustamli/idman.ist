export const backDrops = (className, element, $target) => {
  var $body = $('body');
	var $html = $('html');
  if ($target.hasClass(className)) {
    if (className === 'expand' || className === 'app_sidebar-left-open') {
      $body.append(`<div class="backdrop ${className} top"></div>`);
    } else {
      $body.append(`<div class="backdrop ${className}"></div>`);
    }
    if(MaterialWrap.APP_TOUCH === true){
    $(`.${className}.backdrop`).hammer().bind('tap', function(e) {
        e.stopPropagation();
        element.trigger('click');
      });
    } else{
      $(`.${className}.backdrop`).on('click', function(e) {
        e.stopPropagation();
        element.trigger('click');
      });
    };
		if($('.backdrop').length > 0 && !$html.hasClass('backdrop-open')){
			$html.addClass('backdrop-open');
		}
  } else {
    if (className === 'sidebar-overlay-open') {
      $('#chat_compose_wrapper').removeClass('open');
    }
    $(`.${className}.backdrop`).fadeOut(250, function() {
      $(this).remove();
			if ($('.backdrop').length === 0){
				 $html.removeClass('backdrop-open');
			 }
    });
  }
}
