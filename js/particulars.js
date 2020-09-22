$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 340,//承载容器宽
		height : 350,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	let input = document.querySelector(".jsqbf")


	// =======================================
	$("#details .centersright .cenjsq .addbtn").click(function () {
		// alert(1)
		let num = $(this).parent().siblings().find(".count").val()

		//   num++;//隐式类型转换
		++num; //num=num+1

		// console.log(num, typeof num);
		// 最后要把修改后的值赋给文本框 
		$(this).parent().siblings().find(".count").val(num)
	   

	})

	/* 3 减少数量
	 分析：
		当点击事件发生时，取出文本框的值，然后自减1 ，最后要把修改后的值赋给文本框 
	 */
	$("#details .centersright .cenjsq .reducebtn").click(function () {
		// alert(1)
		let num = $(this).parent().siblings().find(".count").val()

		if (num > 1) {
			//   num++;//隐式类型转换
			--num; //num=num+1
		}
		// console.log(num, typeof num);
		// 最后要把修改后的值赋给文本框 
		$(this).parent().siblings().find(".count").val(num)
		

	})


	$("#details .centersright .cenxxk div").click(function () {
        $(this).addClass("actions").siblings().removeClass("actions")
    })
	// ==============================
	$("#exclusive .ivetitle ul li").mouseenter(function () {
        $(this).addClass("action").siblings().removeClass("action")
        let index = $(this).index();
        let re = $("#exclusive .conts").eq(index).show().siblings(".conts").hide();
        console.log(re);
    })
	
})
