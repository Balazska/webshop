var expect = require("chai").expect;
var getUserMW = require("../../middleware/user/getUser");

describe('getUser middleware ', function(){
    it('get user from DB', function(done){
        var req = {
            session:{}
        };
        var res= {
            locals:{
                parsedUser:{
                    username:'hello',
                    email:'jo'
                }
            }
        };
        var objectRepository = {
            userModel: {
                findOne:function(params,callback){
                    callback(null,{name: 'hello'});
                }
            }
        };
        getUserMW(objectRepository)(req,res,function(err){
            expect(err).to.eql(undefined);
            expect(res.locals.user).to.eql({name:'hello'});
            done();
        });
    });

    it('no user found', function(done){
        var req = {
            session:{
            }
        };
        var res= {
            locals:{
                parsedUser:{
                    username:'hello',
                    email:'jo'
                }
            },
            redirect:function(url){
                expect(req.session.sessionFlash).to.eql({
                    type: 'error',
                    message: 'Wrong username or email'
                });
                expect(url).to.eql("/forgottenpassword");
                done();
            }
        };
        var objectRepository = {
            userModel: {
                findOne:function(params,callback){
                    callback(null,null);
                }
            }
        };
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        getUserMW(objectRepository)(req,res,function(err){
            expect(true).to.eql(false);
            done();
        });
    });
});