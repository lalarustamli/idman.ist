//
// Module to toggle drawers
// ----------------------------------
import {backDrops} from './backdrops';
import {masonryInit} from './initPlugins';
var toggleDrawer = () => {
  var $toggleElement = $('[data-drawer]');
  $toggleElement.off('click');
  $toggleElement.on('click', function(e) {
    e.stopPropagation();
    var $body = $('body'),
    element = $(this),
    className = element.data('drawer'),
    $target = $('#content_wrapper')
    if (className) {
      if ($target.hasClass(className)) {
        $target.removeClass(className);
      } else {
        $target.addClass(className);
      }
    }
    if (className === 'open-left' || className === 'open-right' || className === 'open-left-lg' || className === 'open-right-lg') {
      backDrops(className, element, $target);
    } else if (className === 'toggle-left' && Modernizr.mq('(max-width: 992px)') || className === 'toggle-right' && Modernizr.mq('(max-width: 992px)')) {
      backDrops(className, element, $target);
    }
    //Redraw Masonary Layout for Notes App
    setTimeout(function() {
      masonryInit();
    }, 200);
    setTimeout(function() {
      if($('#storeLocations').length > 0){
        var storeLocations = window.storeLocations || (window.storeLocations = {});
        google.maps.event.trigger(storeLocations,'resize');
      }
    }, 200);
  });
  var $dismissElement = $('[data-dismiss=drawer]');
  $dismissElement.on('click', function(e) {
    e.stopPropagation();
    $('.backdrop').trigger('click');
  });
};
export {toggleDrawer}
