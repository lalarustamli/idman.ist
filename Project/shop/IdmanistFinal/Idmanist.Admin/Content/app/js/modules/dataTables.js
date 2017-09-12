const mwDataTables = () => {
  $('.card-data-tables table tbody .checkbox-cell .checkbox input[type=checkbox]').each(function(i) {
    $(this).attr('id', "CheckboxId_" + (i + 1));
  });
  //Initialize and UI setup
  $('.product-table-wrapper table').DataTable({
    "aaSorting": [
      [2, 'asc']
    ]
  });
  var oTable = $('.dataTable').DataTable();
  $('.filter-input').keyup(function() {
    oTable.search($(this).val()).draw();
  })
  var $lengthSelect = $(".card.card-data-tables select.form-control.input-sm");
  var tableLength = $lengthSelect.detach();
  $('#dataTablesLength').append(tableLength);
  $(".card.card-data-tables .card-actions select.form-control.input-sm").dropdown({
    "optionClass": "withripple"
  });
  $('#dataTablesLength .dropdownjs .fakeinput').hide();
  $('#dataTablesLength .dropdownjs ul').addClass('dropdown-menu dropdown-menu-right');
}
const checkAll = () => {
  //See if any checkboxes are checked on page load
  if ($(' .checkbox-cell input[id*=CheckboxId_][type=checkbox]:checked').length == 0) {
    $('#deleteItems').hide();
  } else {
    $('#deleteItems').show();
    //get a record count
    var initCheckCount = $('.checkbox-cell input[id*=CheckboxId_][type=checkbox]:checked').length;
    if (initCheckCount === 1) {
      var countGrammer = 'item'
    } else if (initCheckCount > 0) {
      var countGrammer = 'items'
    }
    $('#deleteItems span').text(`${initCheckCount} ${countGrammer} selected`);
  }
  $('#checkAll').on('click',function() {
    $('.checkbox-cell input:checkbox').not(this).prop('checked', this.checked);
  });
  //On change of individual checkbox
  $(".checkbox-cell [id*=CheckboxId_]").change(function() {
    var $this = $(this);
    if ($('.checkbox-cell input[id*=CheckboxId_][type=checkbox]:checked').length == $('.checkbox-cell input[id*=CheckboxId_][type=checkbox]').length) {
      $('#checkAll').prop('checked', true);
    } else {
      $('#checkAll').prop('checked', false);
    }
    if ($this.is(":checked")) {
      $this.closest("tr").addClass("highlight");
    } else {
      $this.closest("tr").removeClass("highlight");
    }
    if ($('.checkbox-cell input[id*=CheckboxId_][type=checkbox]:checked').length == 0) {
      $('#deleteItems').hide();
    } else {
      $('#deleteItems').show();
    }
    var initCheckCount = $('.checkbox-cell input[id*=CheckboxId_]:visible[type=checkbox]:checked').length;
    if (initCheckCount === 1) {
      var countGrammer = 'item'
    } else if (initCheckCount > 0) {
      var countGrammer = 'items'
    }
    $('#deleteItems span').text(`${initCheckCount} ${countGrammer} selected`);
  });
  //On change of the CheckAll checkbox
  $("#checkAll").change(function() {
    var $this = $(this);
    if ($this.is(":checked")) {
      $('.card-data-tables table tbody .checkbox-cell .checkbox input[type=checkbox]').each(function() {
        $(this).closest("tr").addClass("highlight");
      })
    } else {
      $('.card-data-tables table tbody .checkbox-cell .checkbox input[type=checkbox]').each(function() {
        $(this).closest("tr").removeClass("highlight");
      })
    }
    if ($('.checkbox-cell input[id*=CheckboxId_][type=checkbox]:checked').length == 0) {
      $('#deleteItems').hide();
    } else {
      $('#deleteItems').show();
    }
    var initCheckCount = $('.checkbox-cell input[id*=CheckboxId_]:visible[type=checkbox]:checked').length;
    if (initCheckCount === 1) {
      var countGrammer = 'item'
    } else if (initCheckCount > 0) {
      var countGrammer = 'items'
    }
    $('#deleteItems span').text(`${initCheckCount} ${countGrammer} selected`);
  });
}
//Confirm delete
const deleteItem = () => {
  $('#confirmDelete').on('click', function(e) {
    e.stopPropagation();
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this data.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Delete',
      cancelButtonText: "Cancel",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm) {
      if (isConfirm) {
        swal("Deleted!", "Your data has been deleted.", "success");
        setTimeout(function() {
          $('.checkbox-cell input[id*=CheckboxId_][type=checkbox]:checked').each(function() {
            $(this).prop('checked', false);
            $(this).closest("tr").fadeOut();
            $('#deleteItems').fadeOut();
          });
          if ($('#checkAll').is(":checked")) {
            $('#checkAll').prop('checked', false);
          };
          $('#deleteItems span').text('');
        }, 600);
        setTimeout(function() {
          $('.card-data-tables table tbody tr').attr('style','').removeClass('highlight');
        }, 2000);
      } else {
        swal("Cancelled", "Your action has been cancelled.", "error");
      };
    });
  });
}
//Re-init on pagination
const pagination = () => {
  $('.card-data-tables table').on('page.dt', function() {
    $('.card-data-tables table tbody .checkbox-cell .checkbox input[type=checkbox]').each(function(i) {
      $(this).prop('checked', false);
      $(this).closest("tr").removeClass("highlight");
    });
    setTimeout(function() {
      checkAll();
      deleteItem();
    }, 600);
  });
};
export {
  mwDataTables,
  checkAll,
  deleteItem,
  pagination
}
