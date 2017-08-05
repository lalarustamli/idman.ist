$(function() {
	
/* UI sliders
============================================================================ */
$( ".ui_slider1" ).slider({
	value:100,
	min: 0,
	max: 500,
	step: 50,
	slide: function( event, ui ) {
		$( ".ui_slider1_val" ).text( "$" + ui.value );
		$( "#ui_slider_default_val" ).val( "$" + ui.value );
	}
});
$( ".ui_slider1_val" ).text( "$" + $( ".ui_slider1" ).slider( "value" ) );
$( "#ui_slider_default_val" ).val( "$" + $( ".ui_slider1" ).slider( "value" ) );

//* range slider
$( ".ui_slider2" ).slider({
	range: true,
	min: 0,
	max: 500,
	values: [ 75, 300 ],
	slide: function( event, ui ) {
		$( ".ui_slider2_val" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		$( "#ui_slider_min_val" ).val( "$" + ui.values[ 0 ] );
		$( "#ui_slider_max_val" ).val( "$" + ui.values[ 1 ] );
	}
});
$( ".ui_slider2_val" ).text( "$" + $( ".ui_slider2" ).slider( "values", 0 ) + " - $" + $( ".ui_slider2" ).slider( "values", 1 ) );
$( "#ui_slider_min_val" ).val( "$" + $( ".ui_slider2" ).slider( "values", 0 ) );
$( "#ui_slider_max_val" ).val( "$" + $( ".ui_slider2" ).slider( "values", 1 ) );

$(".ui_slider3").slider({
		range: "min",
		value: 120,
		min: 80,
		max: 700,
		slide: function( event, ui ) {
			$( ".ui_slider3_val" ).html( "$" + ui.value );
		}
	});
$( ".ui_slider3_val" ).text( "$" + $( ".ui_slider3" ).slider( "value" ) );

$(".ui_slider4").slider({
		range: "min",
		value: 120,
		min: 1,
		max: 400,
		slide: function( event, ui ) {
			$( ".ui_slider4_val" ).html( "$" + ui.value );
		}
	});
$( ".ui_slider4_val" ).text( "$" + $( ".ui_slider4" ).slider( "value" ) );

$(".ui_slider5_ver").slider({
	orientation: "vertical",
	range: "min",
	min: 0,
	max: 100,
	value: 60,
});

$(".ui_slider6_ver").slider({
	orientation: "vertical",
	range: "min",
	min: 0,
	max: 100,
	value: 50,
});

$(".ui_slider7_ver").slider({
	orientation: "vertical",
	range: "min",
	min: 0,
	max: 100,
	value: 90,
});

$(".ui_slider8_ver").slider({
	orientation: "vertical",
	range: "min",
	min: 0,
	max: 100,
	value: 30,
});

$(".ui_slider9_ver").slider({
	orientation: "vertical",
	range: "min",
	min: 0,
	max: 100,
	value: 70,
});

$(".ui_slider_green").slider({
	range: "min",
	min: 0,
	max: 100,
	value: 80,
});

$(".ui_slider_red").slider({
	range: "min",
	min: 0,
	max: 100,
	value: 60,
});

$(".ui_slider_black").slider({
	range: "min",
	min: 0,
	max: 100,
	value: 50,
});

$(".ui_slider_orange").slider({
	range: "min",
	min: 0,
	max: 100,
	value: 30,
});

/* UI tabs
============================================================================ */
$( "#header-tabs" ).tabs();

$().ready(function() {
$(".maxchars").supertextarea({
	maxl: 200
});


$('.on_off :checkbox, .on_off :radio').iButton({
	labelOn: "",
	labelOff: "",
	enableDrag: false 
});

$('.yes_no :checkbox, .yes_no :radio').iButton({
	labelOn: "On",
	labelOff: "Off",
	enableDrag: false
});
	
$('.enabled_disabled').iButton({
	labelOn: "Enabled",
	labelOff: "Disabled",
	enableDrag: false
});
});

/* Validation engine 
============================================================================ */
$('#tooltipvalidate').validationEngine();

/* Simple validation
============================================================================ */
$("#usual-validate").validate({
	rules: {
		first_name: "required",
		last_name: "required",
		email: {
			required: true,
			email: true
		},
		url: {
			required: true,
			url: true
		},
		date: {
			required: true,
			date: true
		},
		numbers: {
			required: true,
			digits: true
		},
		password: {
			required: true,
			minlength: 5
		},
		confirm_password: {
			required: true,
	   	minlength: 5,
			equalTo: "#password_con"
		},
		agree: "required",
		radio: "required",
		select_req: "required"
	},
	messages: {
		agree: "Please accept our policy"
	}
});


/* Uniform 
============================================================================ */
$().ready(function() {
$("select.uniform, input:checkbox, input:radio, input:file").uniform();
});


/* Spinners
============================================================================ */
$(".spinner_simple").spinner();

$(".spinner_decimal").spinner({
	decimals: 2,
	stepping: 0.15
});

$(".spinner_currency").spinner({
	currency: '$',
	max: 20,
	min: 2
});

$(".spinner_currency_e").spinner({
	currency: '€',
	max: 20,
	min: 2
});

$(".spinner_disabled").spinner().spinner("disable");

$(".spinner_list").spinner();

/* Jquery chosen
============================================================================ */
$(".select").chosen();


/* Styled select
============================================================================ */
$('select.styled').selectmenu({ style:'dropdown' });
//a custom format option callback
		var addressFormatting = function(text){
			var newText = text;
			//array of find replaces
			var findreps = [
				{find:/^([^\-]+) \- /g, rep: '<span class="ui-selectmenu-item-header">$1</span>'},
				{find:/([^\|><]+) \| /g, rep: '<span class="ui-selectmenu-item-content">$1</span>'},
				{find:/([^\|><\(\)]+) (\()/g, rep: '<span class="ui-selectmenu-item-content">$1</span>$2'},
				{find:/([^\|><\(\)]+)$/g, rep: '<span class="ui-selectmenu-item-content">$1</span>'},
				{find:/(\([^\|><]+\))$/g, rep: '<span class="ui-selectmenu-item-footer">$1</span>'}
			];
			
			for(var i in findreps){
				newText = newText.replace(findreps[i].find, findreps[i].rep);
			}
			return newText;
		}
		

/* Colorpicker
============================================================================ */
$('.colorpick').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		$(el).val(hex);
		$(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		$(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	$(this).ColorPickerSetColor('#' + this.value);
});


/* Datepicker ============================================================================ */
$( ".inlinedate" ).datepicker();


/* wysiwyg editor ============================================================================ */
$(".wysiwyg").cleditor({width:"100%", height:"100%"});


/* Masked inputs
============================================================================ */
$("#date").mask("99/99/9999");
$("#phone").mask("(999) 999-9999");
$('#phoneext').mask("(999) 999-9999? x99999");
$("#tin").mask("99-9999999");
$("#ssn").mask("999-99-9999");
$("#product").mask("a*-999-a999",{placeholder:" ",completed:function(){alert("You typed the following: "+this.val());}});
$("#eyescript").mask("~9.99 ~9.99 999");


/* Form wizards
============================================================================ */
$("#form-wizard1").formwizard({ 
	formPluginEnabled: true, 
	validationEnabled: false,
	focusFirstInput : false,
	disableUIStyles : true,

	formOptions :{
		success: function(data){$("#status1").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
		beforeSubmit: function(data){$("#success1").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
		resetForm: true
	}
 }
);

$("#form-wizard2").formwizard({ 
	formPluginEnabled: true,
	validationEnabled: true,
	focusFirstInput : true,
	formOptions :{
		success: function(data){$("#status2").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
		beforeSubmit: function(data){$("#success2").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
		resetForm: true
	},
	validationOptions : {
		rules: {
			username: "required",
			password: { required: true },
			confirm_password: { required: true, equalTo: "#password_con" }
		}
	}
 }
);

});




