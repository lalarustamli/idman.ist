// GLOBAL CONSTANTS
// -----------------------------------
(function(window, document, $, undefined) {
	"use strict";
  var MaterialWrap = window.MaterialWrap || (window.MaterialWrap = {});
  if (Modernizr.touchevents) {
    MaterialWrap.APP_TOUCH = true;
  } else {
    MaterialWrap.APP_TOUCH = false;
  }
  MaterialWrap.APP_MEDIAQUERY = {
    'desktopLG': 1280,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
  };
  MaterialWrap.APP_COLORS = {
    'primary': '#ec407a',
    'success': '#28bebd',
    'info': '#42a5f5',
    'warning': '#fdf39e',
    'danger': '#ef5350',
    'mw_purple': '#6B79C4',
    'mw_turquoise': '#00c5dc',
    'mw_peach': '#feb38d',
    'mw_salmon': '#EE6E73',
    'mw_lightGray': '#EEF5F9',
    'mw_gray': '#8f9eb5',
    'mw_darkGray': '#707C94',
    'mw_grayBlue': '#59779B'
  };
})(window, document, window.jQuery);
// Initialize App configurations
// --------------------------------------------------
(function(window, document, $, undefined) {
  //Option to persist settings:
  var persistSettings = true;
  var $html = $('html'),
  $body = $('body'),
  $appWrapper = $('#app_wrapper'),
  $sidebarLeft = $('#app_sidebar-left'),
  $sidebarRight = $('#app_sidebar-right');
  if (persistSettings) {
    //Setup some default layout options on app start.
    //Let's check if localStorage is available and persist our settings,
    if (typeof localStorage !== 'undefined') {
      //Global namespace for sessionStorage,localStorage, and cookieStorage
      window.appConfig = Storages.initNamespaceStorage('appConfig');
      // If no appConfig key exsist then setup our default settings
      if (appConfig.localStorage.isEmpty()) {
        appConfig.localStorage.set({'leftSideBar': '', 'contentExpand': ''});
      };
      $body.addClass(appConfig.localStorage.get('leftSideBar'));
      $appWrapper.addClass(appConfig.localStorage.get('contentExpand'));
    };
  };
  window.app = {
    persist: persistSettings,
    config: {
      isTouch: function isTouch() {
        return $html.hasClass('touch');
      },
      isLeftSideBarCollapsed: function isLeftSideBarCollapsed() {
        return $body.hasClass('app_sidebar-menu-collapsed');
      },
      isContentExpand: function isContentExpand() {
        return $appWrapper.hasClass('content-expanded');
      }
    }
  };
})(window, document, window.jQuery);
