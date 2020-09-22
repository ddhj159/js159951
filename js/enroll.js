
 $().ready(function () {
    $(".enrollformss").validate({
        rules: {
            names: {
                required: true,
                names: true
            },
            paws: {
                required: true,
                myPwd: true
            },
            pawsqr: {
                required: true,
                pawsqr: true,
                equalTo: "#paws"
            },
            
           phone: {
                required: true,
                phone: true,
            }
           
        },
        messages: {
            names: {
                required: "用户名必填",
            },
            paws: {
                required: "密码必填",
            },
            pawsqr: {
                required: "请输入密码",
                equalTo: "两次密码输入不一致"
            },
            phone: {
                required: "请输入电话号码",
            }
        
        }
    })
    
    jQuery.validator.addMethod("names", function (value, element) {
        var tel = /^[a-zA-Z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的用户名");
    jQuery.validator.addMethod("paws", function (value, element) {
        var tel = /^[a-zA-Z0-9_]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的密码");
    jQuery.validator.addMethod("phone", function (value, element) {
        var tel = /^1[3|4|5|8][0-9]\d{4,8}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确格式的电话号码");


    let $btns  =  $(".btns")
    $(".btn").click(function(){
        // alert(1)
        let bool =  $(this).prop("checked");
        // alert(bool)
        if(bool){
            //取消禁用功能
            $btns.prop("disabled",false) 
            $btns.addClass("bg2")
        }else{
            $btns.prop("disabled",true) 
            $btns.addClass("bg1").removeClass("bg2")

        }
    })
})
