$(function(){
    $("#editForm").validate({
        rules: {
            image:{
                required: $('#image').required == true
            },
            price:{
                required: true
            },
            name:{
                required: true
            },
            color:{
                required: true
            },
            description:{
                required: true
            },
            category: {
                required: true
            },
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
                normalizer: function(value) {
                    return $.trim(value);
                }
            }
        },
        messages:{
            
        }
    });
});