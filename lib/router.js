/**
 * Created by terryshek on 5/3/15.
 */
Router.configure({
    layoutTemplate: 'appLayout'
})
Router.route('/', function(){
    this.render('Home', {
        data:function(){return true}
    })
})