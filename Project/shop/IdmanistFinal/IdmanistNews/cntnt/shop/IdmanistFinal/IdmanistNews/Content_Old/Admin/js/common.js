$(function(){

/* Main navigation scroll and update scroll
============================================================================ */
main_navigation.make_scroll();
main_navigation.update_scroll();

$('.icons .icon-frame').click(function() {
	var source = $(this).find('span').attr('class');
	$(this).parent().find('p').text('Example: <span class="'+source+'"></span> - Note: You can use this class with any element like span, i, div, etc...');
});

$('.glyphicons .glyphicons-frame').click(function() {
	var source = $(this).find('i').attr('class');
	$(this).parent().find('p').text('Example: <i class="'+source+'"></i>');
});

$('.glyphicons-white .glyphicons-frame-dark').click(function() {
	var source = $(this).find('i').attr('class');
	$(this).parent().find('p').text('Example: <i class="'+source+'"></i>');
});


/* Uploading files switch
============================================================================ */
$('.switch-upload').click(function() {
	if($('.upload-status').is(":visible")) {
		$('.upload-status').slideUp();
	} else {
		$('.upload-status').slideDown();
	}
});


/* Patterns changer
============================================================================ */
$('#body-patterns a').click(function() {
	el = $('#body-patterns');
	if (el.css('top') == '18px') {
		el.animate({top:'60px'});
	} else {
		el.animate({top:'18px'});
	}
	return false;
});

$("#body-patterns span.background").on("click", function(){
	var id = $(this).attr("id");
	$("body").css("background-image", "url('img/"+ id +".png')");
});

$('#main-nav-bg a').click(function() {
	el = $('#main-nav-bg');
	if (el.css('left') == '-177px') {
		el.animate({left:'0px'});
	} else {
		el.animate({left:'-177px'});
	}
	return false;
});

$("#main-nav-bg span.background").on("click", function(){
	var id = $(this).attr("id");
	$(".main-navigation").css("background-image", "url('img/"+ id +".png')");
});

$('#right-sidebar-bg a').click(function() {
	el = $('#right-sidebar-bg');
	if (el.css('right') == '-177px') {
		el.animate({right:'0px'});
	} else {
		el.animate({right:'-177px'});
	}
	return false;
});

$("#right-sidebar-bg span.background").on("click", function(){
	var id = $(this).attr("id");
	$(".right-sidebar").css("background-image", "url('img/"+ id +".png')");
});

/* Responsive menu
============================================================================ */

$('.resp span').click(function() {
	element = $(this);
	if ($('.resp ul.respnav').is(":visible")) {
		$('.resp ul.respnav').slideUp(250);
		$('span.pointer').remove();
		$(this).append('<span class="pointer icon-chevron-down"></span>');
	} else {
		$('.resp ul.respnav').slideDown(250);
		$('span.pointer').remove();
		$(this).append('<span class="pointer icon-chevron-up"></span>');
	}
});

$('ul.respnav li').click(function() {
	subnav = $(this).find('ul.subresp');
	element = $(this);
	if (subnav.is(":visible")) {
		subnav.slideUp(250);
		$(this).find('span').remove();
		if ($(this).has("ul").length) { $(this).append('<span class="icon-chevron-down"></span>'); return false; }
	} else {
		subnav.slideDown(250);
		$(this).find('span').remove();
		if ($(this).has("ul").length) { $(this).append('<span class="icon-chevron-up"></span>'); return false; }
	}
});

/* Animated UI progress bars
============================================================================ */
$( ".updates" ).progressbar({
	value: 72
});
		
		
$(".progressAnimate").progressbar({
	value: 1,
	create: function() {
		$(".progressAnimate .ui-progressbar-value").animate({"width":"100%"},{
			duration: 10000,
			step: function(now){
				$(".proValue").html(parseInt(now)+"%");
			},
			easing: "linear"
		})
	}
});

$(".UprogressAnimate").progressbar({
	value: 1,
	create: function() {
			$(".UprogressAnimate .ui-progressbar-value").animate({"width":"100%"},{
				duration: 30000,
				easing: 'linear',
				step: function(now){
					$(".UproValue").html("Uploading: <span>"+parseInt(now*10.24)+" Mb</span> / 1024 Mb");
				},
				complete: function(){
					$(".UprogressAnimate + .field_notice").html("<span class='must'>Upload Finished</span>");
				} 
			})
		}
});


/* Detect is window height/width changes and then update scroll
============================================================================ */
//* resize elements on window resize
var lastWindowHeight = $(window).height();
var lastWindowWidth = $(window).width();
$(window).on("debouncedresize",function() {
	if($(window).height()!=lastWindowHeight || $(window).width()!=lastWindowWidth){
		lastWindowHeight = $(window).height();
		lastWindowWidth = $(window).width();
		main_navigation.update_scroll();
	}
});

$('#formContainer .image').bind('hover', function() {
	var links = $(this).find('a');
	links.stop(true, true).fadeToggle();
});


/* Filetree
============================================================================ */
$('.filetree').fileTree({
		root: '/demos/waveoffice/img/',
		script: 'php/jqueryFileTree.php',
		expandSpeed: 200,
		collapseSpeed: 200,
		multiFolder: true
}, function(file) {
		alert(file);
});

/* Remove gallery
============================================================================ */
$('.removeGall').click(function() {
	$(this).parents('.image-container, li').fadeOut();
});

/* Rightsidebar uploaded files notification delete 
============================================================================ */
$('.right-sidebar a.close').bind("click", function(event) {
	$(this).parent().fadeOut();
	return false;
});



/* Rightsidebar uploaded files notification delete 
============================================================================ */
$('#tags').tagsInput({width:'100%'});



/* Qtip on drag and drop files 
============================================================================ */
$('.drag-files-container').qtip({
	 prerender: true,
   content: 'Drag and drop files here to upload them.',
   show: 'mouseover',
   hide: 'mouseout',
	 position: {
                    viewport: $(window), // Keep it visible within the window if possible
                    target: 'mouse', // Position it in relation to the mouse
                    adjust: { x: 8, y: -30 } // ...but adjust it a bit so it doesn't overlap it.
  },
	style: {
  	classes: 'ui-tooltip-tipsy',
    tip: false // Remove the default tip.
  }
});



/* Breadcrumbs
============================================================================ */
$('.xbreadcrumbs').xBreadcrumbs();




/* Drop down toggle
============================================================================ */
$('.dropdown-toggle').dropdown();



/* Easy tabs
============================================================================ */
	$('#tab-container').easytabs({
		animationSpeed: 300,
		collapsible: false,
	});



/* Main navigation slide 
============================================================================ */
$(".main-navigation ul li a").click(function() {
		submenu = $(this).parent().find('ul');
		if (submenu.is(":visible")) {
				submenu.slideUp(250, function() {
				main_navigation.update_scroll();
			});
			$(this).parent().find('span').remove();
			if ($(this).parent().has("ul").length) { $(this).parent().append('<span class="icon-chevron-down"></span>'); return false; }
		} else {
			submenu.slideDown(250, function() {
				main_navigation.update_scroll();
			});
			$(this).parent().find('span').remove();
			if ($(this).parent().has("ul").length) { $(this).parent().append('<span class="icon-chevron-up"></span>'); return false; }
		}
});	

main_navigation.update_scroll();



/* Main navigation show/hide with remember cookie
============================================================================ */
$('a.sidebar_switch').bind('click',function() {

if ($('.main-navigation').is(":visible")) {
	$.cookie('sidebar', 'hide', { path: '/' });
	$('.main-navigation').hide();
	$('a.sidebar_switch').addClass('switch_off');
	$('a.sidebar_switch').removeClass('switch_on');
	$('.main-content').css('margin-left', '0px');
	$(window).scrollTop($(window).position());
} else {
	$.cookie('sidebar', null, { path: '/' });
	$('.main-navigation').show();
	$('a.sidebar_switch').addClass('switch_on');
	$('a.sidebar_switch').removeClass('switch_off');
	$('.main-content').css('margin-left', '220px');
	$(window).scrollTop($(window).position());}
});

if($.cookie('sidebar')) { 
	$('.main-navigation').hide(); 
	$('.main-content').css('margin-left', '0px');
	$('a.sidebar_switch').prop('title', 'Show sidebar');
} else {
	$('.main-navigation').show();
	$('.main-content').css('margin-left', '220px');
	$('a.sidebar_switch').prop('title', 'Hide sidebar');
}

$('.right-sidebar').height($(window).height() - 85);


/* Sparklines
============================================================================ */

	$("#sparkline2").sparkline([2,18,13,15,11,16,15,17,18,16,15,17,18,18,13,15,11,16,15,17,18,16,15], {
		type: 'bar',
	
		height: 30,
		barColor: '#be3d3d'
	});
	
	$("#sparkline3").sparkline([2,18,13,15,11,16,15], {
		type: 'bar',
		height: 20,
		barColor: '#be3d3d'
	});




/* Tooltips
============================================================================ */
$('[rel="tooltipup"]').tipsy({gravity: 's', fade: true});
$('[rel="tooltipdown"]').tipsy({gravity: 'n', fade: true});
$('[rel="tooltipleft"]').tipsy({gravity: 'e', fade: true});
$('[rel="tooltipright"]').tipsy({gravity: 'w', fade: true});


/* Logged user options dropdown
============================================================================ */
$('a.login').bind('click', function() {
	var userinfo = $(this).parent().find('.profile-options');
	if(userinfo.is(':visible')) {
		userinfo.fadeOut(300);
	} else {
		userinfo.fadeIn(300);
	}
	return false;
});

$('.profile-options').click(function() {
	return false;
});

$(document).click(function() {
	$('.profile-options').fadeOut();
});

/* Screen lock
============================================================================ */
$('.screen').lockscreen({
	pin: '0000'	,
	message: 'Default pin is 0000. You can change it!'
});

$('a.lock').tipsy({fallback: "Lock your screen!", gravity: "e"});


/* prettyPhoto
============================================================================ */
$("a[rel^='prettyPhoto']").prettyPhoto({theme: 'facebook'});


});

/* Main navigation update scroll function
============================================================================ */
main_navigation = {
	make_scroll: function() {
		antiScroll = $('.antiscroll').antiscroll().data('antiscroll');
	},
	update_scroll: function() {
		if($('.antiscroll').length) {
			if( $(window).width() > 979 ){
			$('.antiscroll-inner, .antiscroll-content').height($(window).height() - 85);
		} else {
			$('.antiscroll-inner, .antiscroll-content').width('100%');
		}
			antiScroll.refresh();
		}
	}
};