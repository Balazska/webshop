$(function(){
    $("#checkoutForm").validate({
        rules: {
            email: {
                required: true,
            },
        },
        messages:{
            email: "Please fill this field",
        }
    });
});