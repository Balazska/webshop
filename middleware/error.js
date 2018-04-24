//module for create message objects
module.exports = {
    error: function(message){
        return {
            type: 'error',
            message: message
        }
    },
    info: function(message){
        return {
            type: 'info',
            message: message
        }
    },
    success: function(message){
        return {
            type: 'success',
            message: message
        }
    }
}