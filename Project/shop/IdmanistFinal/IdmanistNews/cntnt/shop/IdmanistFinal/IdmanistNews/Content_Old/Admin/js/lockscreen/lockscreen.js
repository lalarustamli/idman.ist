(function( $ ){

  $.fn.lockscreen = function(options) {
		
		var defaults = {  
			pin: '0000',
			message: ''
		}
		
		var options = $.extend(defaults, options);  
		
    this.append('<div class="board"></div>');
		this.addClass('lscreen');
		
		lscreen = this;
		board = $('.board');
		
		$('a.lock').click(function() {
			lscreen.fadeIn();
			lscreen.bind("contextmenu",function(e){
        return false;
    	});
			return false;
		});
		
		pinlength = defaults.pin.length
		setInterval(function() {
      $('input.pin').focus();
			$('input.pin').attr('maxlength', pinlength);
		}, 50);
		
		board.append(
					$('<h2>Screen is locked</h2>'),
					$('<input type="password" name="pin" class="pin">').addClass('field'),
					$('<p class="message">'+defaults.message+'</p>'),
            $('<button />').addClass('button one number').append('<span class="numbers">1</span><span class="chars">qz</span>'),
            $('<button />').addClass('button two number').append('<span class="numbers">2</span><span class="chars">abc</span>'),
            $('<button />').addClass('button three number last').append('<span class="numbers">3</span><span class="chars">def</span>'),
            $('<button />').addClass('button four number').append('<span class="numbers">4</span><span class="chars">ghi</span>'),
            $('<button />').addClass('button five number').append('<span class="numbers">5</span><span class="chars">jkl</span>'),
            $('<button />').addClass('button six number last').append('<span class="numbers">6</span><span class="chars">mno</span>'),
            $('<button />').addClass('button seven number').append('<span class="numbers">7</span><span class="chars">mno</span>'),
            $('<button />').addClass('button eight number').append('<span class="numbers">8</span><span class="chars">tuv</span>'),
            $('<button />').addClass('button nine number last').append('<span class="numbers">9</span><span class="chars">wxy</span>'),
						$('<button />').addClass('button submit').text('Enter'),
            $('<button />').addClass('button zero number').append('<span class="zeronum">0</span>'),
            $('<button />').addClass('button delete last').text('Delete'),
						 $('<div style="clear: both;"></div')
		);
		
		$('.number').click(function() {
			var text = $(this).html();
			var first = text.charAt(22);
			current = $('.pin').val();
			if (current.length != pinlength) {
				$('.pin').val(current + first);
			} else {
				return false;
			}
		});
		
		$('.delete').click(function() {
			var inputString = $('.pin').val();
			var shortenedString = inputString.substr(0,(inputString.length -1));
      $('.pin').val(shortenedString);
		});
		
		
		$('.submit').click(function() {
			var value = $('.pin').val();
			if (value === defaults.pin) {
				lscreen.fadeOut();
				$('.pin').val('');
				$('p.error').remove();
			} else {
				$('.pin').val('');
				$('p.error').remove();
				$('input').after('<p class="error">Entered pin code is wrong. Try again!</p>');
				return false;
			}
		});
		
		setInterval(function() {
		current = $('.pin').val();
		if (current.length === 0) {
			$('.delete').attr('disabled', 'disabled');
		} else { 
			$('.delete').removeAttr('disabled', 'disabled');
		}
		}, 50);
		
		setInterval(function() {
		current = $('.pin').val();
		if (current.length < pinlength) {
			$('.submit').attr('disabled', 'disabled');
		} else { 
			$('.submit').removeAttr('disabled', 'disabled');
		}
		}, 50);
		
		$('body').keypress(function(e){
			if (e.keyCode == 49) {
				$('button.one').addClass('activenum');
				setTimeout(function() {
					$('button.one').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 50) {
				$('button.two').addClass('activenum');
				setTimeout(function() {
					$('button.two').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 51) {
				$('button.three').addClass('activenum');
				setTimeout(function() {
					$('button.three').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 52) {
				$('button.four').addClass('activenum');
				setTimeout(function() {
					$('button.four').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 53) {
				$('button.five').addClass('activenum');
				setTimeout(function() {
					$('button.five').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 54) {
				$('button.six').addClass('activenum');
				setTimeout(function() {
					$('button.six').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 55) {
				$('button.seven').addClass('activenum');
				setTimeout(function() {
					$('button.seven').removeClass('activenum');
				}, 150);
			}
			
			if (e.keyCode == 56) {
				$('button.eight').addClass('activenum');
				setTimeout(function() {
					$('button.eight').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 57) {
				$('button.nine').addClass('activenum');
				setTimeout(function() {
					$('button.nine').removeClass('activenum');
				}, 150);
			}
			
			else if (e.keyCode == 48) {
				$('button.zero').addClass('activenum');
				setTimeout(function() {
					$('button.zero').removeClass('activenum');
				}, 150);
			}
		});
		
		$('body').keydown(function(e){
			if (e.keyCode == 8) {
				$('button.delete').addClass('activedel');
				setTimeout(function() {
					$('button.delete').removeClass('activedel');
				}, 150);
			}
			
			else if (e.keyCode == 13) {
				$('button.submit').addClass('activesub').trigger('click');;
				setTimeout(function() {
					$('button.submit').removeClass('activesub');
				}, 150);
			}
		});

  };
})( jQuery );