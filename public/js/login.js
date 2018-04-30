$(function(){
    $("#loginForm").validate({
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages:{
            password: "Please fill this field",
            username:'Please fill this field'
        }
    });
});