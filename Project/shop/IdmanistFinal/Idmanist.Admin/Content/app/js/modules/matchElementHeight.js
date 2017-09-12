export var matchElementHeight = (elements) => {
        var windowWidth = window.innerWidth,
            elementsToSize = $(elements),
            elementsHeights = [];
            if (elementsToSize.length > 1) {
                $.each(elementsToSize, function() {
                    $(this).css('height', '');
                    elementsHeights.push($(this).outerHeight());
                });
                $(elements).css('height', Math.max.apply(Math, elementsHeights));
              };
            };
