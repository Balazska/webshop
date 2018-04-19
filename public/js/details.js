$(function(){
    $("#detailsForm").validate({
        rules: {
            quantity: {
                required: true,
                // Using the normalizer to trim the value of the element 
                // before validating it. 
                // 
                // The value of `this` inside the `normalizer` is the corresponding 
                // DOMElement. In this example, `this` references the `username` element. 
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            size: {
                required: true,
                // Using the normalizer to trim the value of the element 
                // before validating it. 
                // 
                // The value of `this` inside the `normalizer` is the corresponding 
                // DOMElement. In this example, `this` references the `username` element. 
                normalizer: function(value) {
                    return $.trim(value);
                }
            }
        },
        messages:{
            quantity: "Please fill this field",
            size:'Please fill this field'
        }
    });
});