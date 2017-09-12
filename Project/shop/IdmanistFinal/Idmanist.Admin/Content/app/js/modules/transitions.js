export const fullscreenTransition = () => {
    $('[data-transition]').on('click', function(e) {
        var $body = $('body'),
            element = $(this),
            className = element.data('transition');
        if (!element.hasClass(className)) {
            element.addClass(className);
            $body.addClass(className);
        }
        return false
    });
}
