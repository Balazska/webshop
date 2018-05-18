var expect = require("chai").expect;
var authMW = require("../../middleware/generic/auth");

describe('auth middleware ', function(){
    it('user is authenticated', function(done){
        var req = {
            isAuthenticated: function(){
                return true;
            },
        };
        var objectRepository = {};
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        authMW(objectRepository)(req,{},function(err){
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('user is not authenticated', function(done){
        var req = {
            isAuthenticated: function(){
                return false;
            },
            session:{
                sessionFlash:''
            }
        };
        var objectRepository = {};
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        var res={
            redirect:function(route){
                expect(req.session.sessionFlash).to.eql({
                    type: 'error',
                    message: "Please login first!"
                });
                expect(route).to.eql('/login');
                done();
            } 
        }
        authMW(objectRepository)(req,res,function(err){
            expect(true).to.eql(false);
        });
    });
});