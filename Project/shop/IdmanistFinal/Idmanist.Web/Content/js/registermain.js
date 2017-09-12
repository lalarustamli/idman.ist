jQuery(document).ready(function ($) {
    $("#register").click(function () {
         event.preventDefault();       
        url = $(this).parent().parent().attr('action');

        UserName = $("#reg_UserName").val();
        Email = $("#reg_email").val();
        Password = $("#reg_Password").val();
        ConfirmPassword = $("#reg_ConfirmPassword").val();

        console.log(UserName);
        console.log(Password);
        console.log(ConfirmPassword);
       
        $.ajax({
            url: url,
            type: "POST",
            data: {
                "UserName": UserName,
                "Email": Email,
                "Password": Password,
                "ConfirmPassword": ConfirmPassword
            },
            success: function (result) {         
                if (result == true && Password == ConfirmPassword) {                    
                    $(':input').val('');
                    window.location.href = "Index";
                    //location.reload();
                }
                else {
                    $("#message-reg").html(
                     "INCORRECT."
                   );
                }
              
            }
        });
       
    })
    //$("#login").click(function () {
    //    event.preventDefault();

    //    username = $("#log_username").val();
    //    password = $("#log_password").val();
    //    console.log(username + " " + password);

    //    url = $(this).parent().parent().attr('action');

    //    $.ajax({
    //        url: url,
    //        type: "POST",
    //        data: {
    //            username: username,           
    //            password: password
    //        },
    //        error:function(){
    //            console.log("error");
    //        },
    //        success: function (result) {
    //            $(':input').val('');
    //            if (result==true) {
    //                location.reload(); 
    //            }
    //            else {
    //                $("#message-login").append(
    //                 "INCORRECT."
    //               );
    //            }
    //        }
    //    });
    //});

    $.validate({
        modules: 'location, date, security, file'
       
    });

})
