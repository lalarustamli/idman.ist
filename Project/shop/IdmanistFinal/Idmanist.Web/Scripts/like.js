jQuery(document).ready(function () {
//do the ajax call
    jQuery(document).on("click", "a.like", function () {

    var id = jQuery(this).data("id");
    var link = "/Home/LikeThis/" + id;
    var a = jQuery(this);
    jQuery.ajax({
        type: "GET",
        url: link,
        success: function (result) {
            a.html('<i class="fa fa-heart fa-lg text-danger"></i> (' + result + ')').removeClass("like").addClass("unlike");
        }
    });
})
    jQuery(document).on("click", "a.unlike", function () {
    
    var id = jQuery(this).data("id");
    var link = "/Home/UnlikeThis/" + id;
    var a = jQuery(this);
    jQuery.ajax({
        type: "GET",
        url: link,
        success: function (result) {
            a.html('<i class="fa fa-heart-o fa-lg"></i> (' + result + ')').removeClass("unlike").addClass("like");;
        }
    });
})
    })