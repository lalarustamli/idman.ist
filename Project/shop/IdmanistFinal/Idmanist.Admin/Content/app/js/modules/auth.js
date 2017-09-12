const registerForm = () => {
    $('[data-toggle="register"]').on('click',function(e) {
        e.stopPropagation();
        $(this).parents('#login_content').toggleClass('open');
    });
}
const loginV3 = () => {
    $('#login-wrapper .btn-fab').on('click',function(e) {
        e.stopPropagation();
        $(this).parents('.card').toggleClass('active');
    });
}
export{loginV3,registerForm}
