import {
  backDrops
} from './backdrops';
const mailList = () => {
  let $eachPanel = $('#mail-wrapper .panel-group .panel'),
  count = 0;
  $eachPanel.each(function() {
    $(this).find('#expansionHeading_').attr('id', 'expansionHeading_' + count);
    $(this).find('div[aria-labelledby="expansionHeading_"]').attr('aria-labelledby', 'expansionHeading_' + count);
    $(this).find('a[href="#expansion_"]').attr('href', '#expansion_' + count);
    $(this).find('a[aria-controls="expansion_"]').attr('aria-controls', 'expansion_' + count);
    $(this).find('#expansion_').attr('id', 'expansion_' + count);
    $(this).find('#expansionCheckbox_').attr('id', 'expansionCheckbox_' + count);
    count++;
  });
  $('#mail-wrapper .action, #mail-wrapper .checkbox-material .ckeck').on('click', function(e) {
    e.stopPropagation();
  });
}
var mailCompose = () => {
  var $toggleElement = $('[data-compose]')
  $toggleElement.on('click', function(e) {
    e.stopPropagation();
    var $body = $('body'),
    element = $(this),
    className = element.data('compose'),
    $target = $('#mail_compose_wrapper')
    if (className == 'open') {
      if ($target.hasClass(className)) {
        $target.removeClass(className);
        $('.backdrop').fadeOut(250, function() { $(this).remove(); });
      } else {
        $target.addClass(className);
      }
    }
    if (className == 'close') {
      $target.removeAttr('class');
      if($('#mail_compose_wrapper .zmdi-window-maximize').length){
        $('#mail_compose_wrapper [data-compose="min"] i').remove('zmdi-window-maximize');
        $('#mail_compose_wrapper [data-compose="min"] i').addClass('zmdi-window-minimize');
      }
      if($('#mail_compose_wrapper .mdi-arrow-compress').length){
        $('#mail_compose_wrapper [data-compose="expand"] i').remove('mdi-arrow-compress');
        $('#mail_compose_wrapper [data-compose="expand"] i').addClass('mdi-arrow-expand');
      }
      $('#mail_compose_wrapper input[type=text],#mail_compose_wrapper textarea').val('');
      if($('.backdrop').length){
        $('.backdrop').fadeOut(250, function() { $(this).remove(); });
      }
    }
    if (className == 'expand') {
      if ($target.hasClass(className)) {
        $target.removeClass(className);
        element.children('i').removeClass('mdi-arrow-compress');
        element.children('i').addClass('mdi-arrow-expand');
        if($('.backdrop').length){
          $('.backdrop').fadeOut(250, function() { $(this).remove(); });
        }
      } else {
        element.children('i').removeClass('mdi-arrow-expand');
        element.children('i').addClass('mdi-arrow-compress');
        $target.addClass(className);
        backDrops(className, element, $target);
      }
    }
    if (className == 'min') {
      if ($target.hasClass(className)) {
        element.children('i').removeClass('zmdi-window-maximize');
        element.children('i').addClass('zmdi-window-minimize');
        $target.removeClass(className);
        $target.addClass('open');
      } else {
        $target.removeAttr('class');
        element.children('i').removeClass('zmdi-window-minimize');
        element.children('i').addClass('zmdi-window-maximize');
        $target.addClass(className);
        if($('.backdrop').length){
          $('.backdrop').fadeOut(250, function() { $(this).remove(); });
        }
      }
    }
  });
};
const mailSelected = () =>{
  $("#mail-wrapper [id*=expansionCheckbox_").change(function(e) {
      e.stopPropagation();
    var $this = $(this);
    if ($('#mail-wrapper input[id*=expansionCheckbox_][type=checkbox]:checked').length){
      $('#header_action_bar').addClass('open');
    } else {
      $('#header_action_bar').removeClass('open');
    }
    if ($this.is(":checked")) {
      $this.closest(".panel-heading").addClass("highlight");
    } else {
      $this.closest(".panel-heading").removeClass("highlight");
    }
    var initCheckCount = $('#mail-wrapper input[id*=expansionCheckbox_][type=checkbox]:checked').length;
    $('#selected_items span').text(`${initCheckCount} selected`);
  });
  $('#header_action_bar [data-mail-actionbar="closed"]').on('click',function(e){
    e.stopPropagation();
    $('#header_action_bar').removeClass('open');
    $('#mail-wrapper input[id*=expansionCheckbox_][type=checkbox]:checked').each(function() {
      $(this).prop('checked', false);
       $(this).closest(".panel-heading").removeClass("highlight");
    });
  })
}
export {
  mailList,
  mailCompose,
  mailSelected
}
