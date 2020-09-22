
//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 400,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
    $(".haha").slidebox({
        boxh: 220,//盒子的高度
        w: 336,//图片的宽度
        h: 220,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });

    $(".hahabox").slidebox({
        boxh: 342,//盒子的高度
        w: 429,//图片的宽度
        h: 342,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
        $(".cnmcnm").slidebox({
            boxh: 400,//盒子的高度
            w: 1000,//图片的宽度
            h: 400,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
        $(".hahaboxs").slidebox({
            boxh: 342,//盒子的高度
            w: 429,//图片的宽度
            h: 342,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });


        $("#ebook .ebook-left .com-title li").mouseenter(function(){
            $(this).addClass("active").siblings().removeClass("active")
            let index = $(this).index();
            let re=$("#ebook .ebook-left .con").eq(index).show().siblings(".con").hide();
            console.log(re);
        })
        
        $("#baby .clothingheadr .clothingheadr-title li").mouseenter(function(){
            $(this).addClass("thisbox").siblings().removeClass("thisbox")
            let index = $(this).index();
            let re=$("#baby .conbox").eq(index).show().siblings(".conbox").hide();
            console.log(re);
        })

       $(".ebook-right ul li").mouseenter(function(){
           $(this).find("div").show();
           $(this).find(".title").hide()
           $(this).siblings().find("div").hide()
           $(this).siblings().find(".title").show()
       })

       let bgclolor = [`#93d46f`,`#f65727`,`#bb9dee`,`#ff7394`,`#c2ec51`];
       $("#floornav ul li").hover(function(){
           let index = $(this).index();
           $(this).css({"backgroundColor":bgclolor[index],"background-position-x":"-40px","width":"40px"})
       },function(){
           $(this).css({"backgroundColor":"","background-position-x":"0px","width":"0px"})
       }).click(function(){
        let $jumpBox=$(".floor").eq( $(this).index() );
        let top = $jumpBox.offset().top;
        $("html,body").stop().animate({ scrollTop:top },300)
       })

    //    返回顶部
    $(".gototop").gototop(); 
    $(".gototop").gototop({
        position : 0,
        duration : 1250,
        visibleAt : 300,
        classname : "isvisible"
    });


    $(".ewmbt").mouseenter(function(){
        $(".wet").animate({right:40})
    })
    $(".ewmbt").mouseleave(function(){
        $(".wet").animate({right :-140})
    })
    $(".ewmbt").mouseenter(function(){
        $(".wet1").animate({right:0})
    })
    $(".ewmbt").mouseleave(function(){
        $(".wet1").animate({right :-40})
    })
    $(".ewmbt").mouseenter(function(){
        $(".wet2").animate({right:0})
    })
    $(".ewmbt").mouseleave(function(){
        $(".wet2").animate({right :-40})
    })
})
// ==========================
$(window).scroll(function () {
    let scrollbox = document.querySelector('.topsearch')
    let st = document.documentElement.scrollTop || document.body.scrollTop
    if (st >= 860) {
        scrollbox.style.display = 'block'
    } else {
        scrollbox.style.display = 'none'
    }
})
