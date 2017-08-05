$("#CommentRateUp").click(function () {
    $.ajax({
        type: "POST",
        url: "/Haber/YorumBegen",
        data: "id=@item.Id",
        success: function (data) {
            $("#ratenumber").html(data);
        }
    });


});
$("#CommentRateDown").click(function () {
    $.ajax({
        type: "POST",
        url: "/Haber/YorumTiksin",
        data: "id=@item.Id",
        success: function (data) {
            $("#ratenumber").html(data);
        }
    });
});