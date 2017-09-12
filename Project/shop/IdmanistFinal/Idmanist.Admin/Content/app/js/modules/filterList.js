const filterList = ($inputTarget,$listTarget) => {
  $($inputTarget).keyup(function() {
    var filter = $(this).val().replace(/\s/g, '');
    $listTarget.each(function() {
      if ($(this).text().replace(/\s/g, '').search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
      noResultsFound($inputTarget,$listTarget)
      } else {
        $(this).show();
      };
    });
  });
}
const noResultsFound = ($inputTarget,$listTarget) =>{
  if($listTarget.not('li.filter').is(':visible') === false) {
      if($listTarget.closest('ul').find('li.no-results').length === 0){
      $listTarget.parent().append('<li class="no-results"><div class="alert alert-danger" role="alert">No Match Found</div></li>');
  }
  } else{
    $listTarget.closest('ul').find('.no-results').remove();
  }
}
export{filterList}
