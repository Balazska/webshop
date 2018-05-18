var expect = require("chai").expect;
var checkImageExtensionMW = require("../../middleware/product/checkImageExtension");

describe('checkImageExtension middleware ', function(){  
    it('imagename contains /', function(done){
        var req = {
            files:{
                image:{
                    name:'/image.PNG'
                }
            },
            header: function(string){
                return 'hello'
            },
            session:{}
        };
        var res = {
            locals:{
                imageFile:{}
            },
            redirect:function(url){
                expect(url).to.eql('hello');
                expect(req.session.sessionFlash).to.eql({
                    type: 'error',
                    message: "Wrong image type"
                });
                done();
            }
        }
        var objectRepository = {};
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        checkImageExtensionMW(objectRepository)(req,res,function(err){
            expect(true).to.eql(false);
            done();
        });
    });

    it('imagename contains multiple . char', function(done){
        var req = {
            files:{
                image:{
                    name:'image.PNG.js'
                }
            },
            header: function(string){
                return 'hello'
            },
            session:{}
        };
        var res = {
            locals:{
                imageFile:{}
            },
            redirect:function(url){
                expect(url).to.eql('hello');
                expect(req.session.sessionFlash).to.eql({
                    type: 'error',
                    message: "Wrong image type"
                });
                done();
            }
        }
        var objectRepository = {};
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        checkImageExtensionMW(objectRepository)(req,res,function(err){
            expect(true).to.eql(false);
            done();
        });
    });

    it('if extension is .PNG', function(done){
        var req = {
            files:{
                image:{
                    name:'image.PNG'
                }
            },
            header: function(string){
                return 'hello'
            },
            session:{}
        };
        var res = {
            locals:{
                imageFile:{}
            },
            redirect:function(url){
                expect(true).to.eql(false);
                done();
            }
        }
        var objectRepository = {};
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        checkImageExtensionMW(objectRepository)(req,res,function(err){
            expect(res.locals.imageFile).to.eql(req.files.image);
            done();
        });
    });

    it('if extension is .js', function(done){
        var req = {
            files:{
                image:{
                    name:'image.js'
                }
            },
            header: function(string){
                return 'hello'
            },
            session:{}
        };
        var res = {
            locals:{
                imageFile:{}
            },
            redirect:function(url){
                expect(url).to.eql('hello');
                expect(req.session.sessionFlash).to.eql({
                    type: 'error',
                    message: "Wrong image type"
                });
                done();
            }
        }
        var objectRepository = {};
        var message = {
            error: function(string){
                return {
                    type: 'error',
                    message: string
                }
            }
        }
        checkImageExtensionMW(objectRepository)(req,res,function(err){
            expect(true).to.eql(false);
            done();
        });
    });
});