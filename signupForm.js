$().ready(function(){
    $("#jesus").validate({
        rules:{
            username: {
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 4
            },
            //if theres confirm password...
            // confirm_password:{
            //     required: true,
            //     minlength: 4,
            //     equalTo:"#password"
            // }
        },
        messages:{
            username:{
                required:"please enter a username",
                minlength: "username must consist of atleast 2 letters"
            },
            password:{
                required: "please provide a password",
                minlength:"minimum password required is 4 characters"
            }
            // confirm_password:{
            //     required: "please provide a password",
            //     minlength:"minimum password required is 4 characters",
            //     equalTo:"please enter the same password above"
            // }
        }
    });
    //incase you wantthe username to be conbination of the firstname & lastname...
    // $("#username").focus(function(){
    //     var firstname = $("#firstname").val();
    //     var lastname =$("#lastname").val();
    //     if(firstname && lastname && !this.value){
    //         this.value = firstname + "." + lastname;
    //     }
    // });
});