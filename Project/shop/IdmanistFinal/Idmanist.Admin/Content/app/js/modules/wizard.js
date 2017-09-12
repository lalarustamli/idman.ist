const wizardDemo = () => {
  $('#rootwizard').bootstrapWizard({
    onTabShow: function(tab, navigation, index) {
      var total = navigation.find('li').length;
      var current = index + 0;
      var percent = (current / (total - 1)) * 100;
      var percentWidth = 100 - (100 / total) + '%';
      navigation.find('li').removeClass('done');
      navigation.find('li.active').prevAll().addClass('done');
      $('#rootwizard').find('.progress-bar').css({
        width: percent + '%'
      });
      $('.form-wizard-horizontal').find('.progress').css({
        'width': percentWidth
      });
    }
  });
  $('#rootwizard .finish').on('click', function(e) {
    e.stopPropagation();
    swal({title: "Order Complete", text: "Thank you for your purchase!", type:"success",timer: 2000,
    showConfirmButton: false});
    $('#rootwizard').find("a[href*='tab1']").trigger('click');
  });
}
export {
  wizardDemo
}
