$(function(){
    $("#forgetForm").validate({
        rules: {
            username: {
                required: true,
            },
            email: {
                required: true
            }
        },
        messages:{
            username: "Please fill this field",
            email: "Please fill this field",
        }
    });
});