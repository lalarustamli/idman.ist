const navBarSearch = () => {
    var $openSearch = $('[data-navsearch-open]'),
        $closeSearch = $('[data-navsearch-close]'),
        $navbarForm = $('#navbar_form'),
        $navbarSearch = $('#navbar_search'),
        $document = $(document);
    $openSearch.on('click', function(e) {
        e.stopPropagation();
        $navbarForm.addClass('open');
        $navbarSearch.focus();
    });
    $closeSearch.on('click', function(e) {
       e.stopPropagation();
        $navbarForm.removeClass('open');
        $navbarSearch.val('');
    });
    $document.on('click', function(e) {
        e.stopPropagation();
        if (e.target !== $('#navbar_search')) {
            $navbarForm.removeClass('open');
            $navbarSearch.val('');
        }
    });
      $navbarSearch .on('click', function(e) {
       e.stopPropagation();
    });
};
const widgetSearch = () => {
    var $openSearch = $('[data-widget-search-open]'),
        $closeSearch = $('[data-widget-search-close]');
    $openSearch.on('click', function(e) {
        e.stopPropagation();
        $navbarForm.addClass('open');
        $navbarSearch.focus();
    });
};
export {
    navBarSearch
}
