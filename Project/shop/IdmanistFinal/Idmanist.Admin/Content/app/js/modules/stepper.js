const simpleStepper = (elem) => {
    function triggerClick(elem) {
        $(elem).click();
    }
    var $progressWizard = $('.modal-stepper .stepper'),
        $tab_active,
        $tab_prev,
        $tab_next,
        $btn_prev = $progressWizard.find('.prev-step'),
        $btn_next = $progressWizard.find('.next-step'),
        $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
        $tooltips = $progressWizard.find('[data-toggle="tab"][title]'),
        $btn_cancel = $('.cancel-stepper'),
        $stepper_item = $('.stepper li');
    //Initialize tooltips
    $tooltips.tooltip();
    //Stepper
    $tab_toggle.on('show.bs.tab', function(e) {
        var $target = $(e.target);
        if (!$target.parent().hasClass('active, disabled')) {
            $target.parent().prev().addClass('completed');
        }
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });
    $btn_next.on('click', function() {
        $tab_active = $progressWizard.find('.active');
        $tab_active.next().removeClass('disabled');
        $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
        triggerClick($tab_next);
    });
    $btn_prev.on('click',function() {
        $tab_active = $progressWizard.find('.active');
        $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
        triggerClick($tab_prev);
    });
    $btn_cancel.on('click', function() {
        $stepper_item.attr('class', '');
        $stepper_item.each(function(index, value) {
            if (index === 0) {
                $(this).addClass('active');
            } else {
                $(this).addClass('disabled');
            }
        });
    });
}
export {
    simpleStepper
}
