$(function(){
    $("#resettokenForm").validate({
        rules: {
            password: {
                required: true,
            },
            passwordAgain: {
                required: true,
            }
        },
        messages:{
            password: "Please fill this field",
            passwordAgain:'Please fill this field'
        }
    });
});