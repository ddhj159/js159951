$(function () {
    $(".lunbobox1").slidebox({
        boxh: 400,//盒子的高度
        w: 1200,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });


    $(".ebook-right ul li").mouseenter(function () {
        $(this).find("div").show();
        $(this).find(".title").hide()
        $(this).siblings().find("div").hide()
        $(this).siblings().find(".title").show()
    })
    $(".lunbobox2").slidebox({
        boxh: 400,//盒子的高度
        w: 1200,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });

    $("#exclusive .ivetitle ul li").mouseenter(function () {
        $(this).addClass("action").siblings().removeClass("action")
        let index = $(this).index();
        let re = $("#exclusive .conts").eq(index).show().siblings(".conts").hide();
        console.log(re);
    })
    let flag = 0;
    $("#likes .likestitle span").click(function () {
        
         /**
         */
        if (flag === 0){
             flag++; //1
            console.log($("#likes .newbooksflet").eq(flag).addClass("open").siblings(".box"));
   
            $("#likes .newbooksflet").eq(flag).addClass("open").siblings(".box").removeClass("open");
            
        } else if (flag ===1 ) {
            flag++;
            console.log($("#likes .newbooksflet").eq(flag).addClass("open").siblings(".box"));
            
            $("#likes .newbooksflet").eq(flag).addClass("open").siblings(".box").removeClass("open");
           
        }else if(flag===2){
            flag=0
            console.log($("#likes .newbooksflet").eq);
            
            $("#likes .newbooksflet").eq(flag).addClass("open").prevAll(".box").removeClass("open");
            

        }
console.log(flag);

        //  $("#likes .newbooksflet").toggleClass("open")

    })
})
