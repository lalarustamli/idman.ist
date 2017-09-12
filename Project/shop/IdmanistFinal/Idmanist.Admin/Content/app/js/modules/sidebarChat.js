export const sidebarChatCompose = () => {
  $('[data-chat]').on('click', function(e) {
    var $body = $('body'),
    element = $(this),
    className = element.data('chat'),
    $target = $('#chat_compose_wrapper');
    if (className == 'open') {
      if ($target.hasClass(className)) {
        $target.removeClass(className);
      } else {
        $target.addClass(className);
      }
    }
    if (className == 'close') {
      $target.removeAttr('class');
    }
  });
};
