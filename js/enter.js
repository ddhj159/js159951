$(function () {


    $(".hdbanner .hdenter div span").mouseenter(function () {
        $(this).addClass("action").siblings().removeClass("action")
        let index = $(this).index();
        let re = $(".hdbanner .hdenter").eq(index).show().siblings(".clore").hide();
        console.log(re);
    })


// -------------------------
document.body.onmousedown = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    if (target.type === 'radio') {
        target.previousValue = target.checked;
    }
}
document.body.onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    if (target.type === 'radio') {
        if (target.previousValue) {
            target.checked = false;
        }
    }
}




$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#bdys").validate({
        rules: {
            username: {
                required: true,
                yourname: true
            },
            pwd: {
                required: true,
                pwd: true
            }
        },
            messages: {
                username: {
                    required: "用户名必填",
                },
                pwd: {
                    required: "密码必填",
                }
            }
        })
    })
    jQuery.validator.addMethod("username", function (value, element) {
        var tel = /^[a-zA-Z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    },"请输入正确的用户名"
    );
    
    // 密码  
    jQuery.validator.addMethod("pwd", function (value, element) {
        var tel = /^[a-zA-Z0-9_]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    },"请输入正确的密码");
    
})


    
