$(function() {

/* Select all rows ========================== */

	$('.checkall').click(function(){
		var table = $(this).parents('table');
		var checkbox = table.find('input[type=checkbox]');
		
		// Check is checkall button checked 
		if($(this).is(':checked')) {
			checkbox.each(function(){ // then on all other checks do following
				$(this).attr('checked',true); // check all other check buttons
				$(this).parent().addClass('checked'); // add class checked to them so that uniform can be applied properly
				$(this).parents('tr').addClass('active');
			}); 
		} else { // If checkall button it not checked
			checkbox.each(function(){  // then on all other checks do following
				$(this).attr('checked',false);  // uncheck all other check buttons
				$(this).parent().removeClass('checked'); // remove class checked to them so that uniform can be applied properly
				$(this).parents('tr').removeClass('active');
			});	
		}
	});
	
	$('.tMultimedia tbody input[type=checkbox]').click(function(){
		if($(this).is(':checked')) {
			$(this).parents('tr').addClass('active');	
		} else {
			$(this).parents('tr').removeClass('active');
		}
});

/* Dynamic table ========================== */

oTable = $('#dynamic, #dynamic-multimedia').dataTable({
        "bJQueryUI": true,
        "sPaginationType": "full_numbers"
});

/* Multimedia table
============================================================================ */

$("a.remove").click(function() {
	$(this).parent().parent('tr, .image-container').fadeOut(450);
	return false;
});

});