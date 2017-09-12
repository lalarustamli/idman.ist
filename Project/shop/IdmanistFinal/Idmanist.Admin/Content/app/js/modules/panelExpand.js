var expansionPanel = () => {
    var $panelWrapper = $('.panel-group.expansion'),
         $panel =    $('.panel-group.expansion .panel'),
      $clickTarget = $('.panel-group.expansion .panel .panel-title > a'),
      $panelCollapse = $('.panel-group.expansion .panel-collapse')
    $clickTarget.on('click',function(){
       $panel.removeClass('active');
      if($(this).hasClass('collapsed')){
        $(this).parents('.panel').addClass('active')
      } else{
          $(this).parents('.panel').removeClass('active');
      }
    });
};
export {expansionPanel}
