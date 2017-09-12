const dismissListItem = () => {
    $('.dismissable').on('click', function() {
        var listItem = $(this).parents('.list-group-item'),
            nextHR = listItem.next('.list-group-separator');
        listItem.addClass('animated slideOutRight');
        nextHR.addClass('animated slideOutRight');
        setTimeout(function() {
            $(listItem).remove();
            $(nextHR).remove();
            if (!$.trim($('#dismissable-group').html()).length) {
                $('#dismissable-group').append(`<div class="alert alert-success" role="alert"> <strong > Well done! </strong> You successfully cleared all items from your list.</div>`)
            }
        }, 250);
    });
};
export {
    dismissListItem
}
