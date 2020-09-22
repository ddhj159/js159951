$(
    function () {


        /*
        1 全选
          选中或者不选中子项目前面的复选框 
        
         */
        $(".selall").click(function () {
            // console.log( $(this).prop("checked") );
            // 自己的状态
            let bool = $(this).prop("checked");
            // if(bool){
            //     $(".singlechk").prop("checked",true); 
            // }else{
            //     $(".singlechk").prop("checked",false); 

            // }
            // $(".singlechk").prop("checked",bool); 
            // $(".selall").prop("checked",bool);
            $(".singlechk , .selall").prop("checked", bool);
            totalPrice();
            totalnum()
        })
        /**
         * 2 子项目的选中状态来决定全选的选中状态
         * 分析：
         * 当点击其中一个子项目的复选框时，
         * 要遍历所有的子项目的复选框，只要其中
         * 有一个没有选择中，那么全选就不选中，否则就选中全选。
         * 
         * 
         * 第一种做法：使用标杆思想
         * 用一个变量来引导页面的元素的状态。 
         * 第一步：定义一个变量。
         * 第二步：在程序中改变变量的值。
         * 第三点：根据变量的值来决定页面元素的状态。
         * 
        */
        //  let flag = true ;//true 表示选中   false表示不选中
        // $("table .singlechk").click(function(){

        //     $("table .singlechk").each(function(index,dom){
        //     //  console.log(  index,dom,this );
        //     let bool = $(this).prop("checked")
        //     //当这个值为假时，没有选中时就要改变flag的值为假。
        //         //bool==flase   
        //         if(!bool){
        //             flag=false;
        //             return ;
        //         }
        //      }
        //     ) 
        //    console.log( "flag:",flag);

        //     // if(flag){
        //     //     $(".selall").prop("checked",flag);
        //     //     // flag=false;
        //     // }else{
        //     //     $(".selall").prop("checked",flag);
        //     //     // flag=true;
        //     // }
        //     $(".selall").prop("checked",flag);
        //     flag = !flag;

        // })
        /*
          2   子项目的选中状态来决定全选的选中状态
            如果选中子项目复选框的个数与所有子项目复选框的个数相同时，那么就全选，否则就不全选。
        
            选中复选框的个数 ＝ $("table .singlechk:checked").length
            所有子项目复选框的个数 =  $("table .singlechk").length
         */
        $("table .singlechk").click(function () {
            let singleNum = $("table .singlechk:checked").length;
            let singleAll = $("table .singlechk").length

            console.log(" 选中复选框的个数: ", singleNum, " 所有子项目复选框的个数:", singleAll);

            if (singleNum === singleAll) {
                $(".selall").prop("checked", true);
            } else {
                $(".selall").prop("checked", false);

            }
            totalPrice();
            totalnum()
        })
        /* 
        3 增加数量
         分析：
            当点击事件发生时，取出文本框的值，然后自加1 ，最后要把修改后的值赋给文本框 
         */
        $("#shopcartarea table tbody .addbtn").click(function () {
            // alert(1)
            let num = $(this).siblings(".count").val()

            //   num++;//隐式类型转换
            ++num; //num=num+1

            // console.log(num, typeof num);
            // 最后要把修改后的值赋给文本框 
            $(this).siblings(".count").val(num);
            // 计算小计:  数量 * 单价
            singleTotalPrice(this, num);
            totalPrice()
            totalnum()

        })

        /* 3 减少数量
         分析：
            当点击事件发生时，取出文本框的值，然后自减1 ，最后要把修改后的值赋给文本框 
         */
        $("#shopcartarea table tbody .reducebtn").click(function () {
            // alert(1)
            let num = $(this).siblings(".count").val();

            if (num > 1) {
                //   num++;//隐式类型转换
                --num; //num=num+1
            }
            // console.log(num, typeof num);
            // 最后要把修改后的值赋给文本框 
            $(this).siblings(".count").val(num);
            // 计算小计:  数量 * 单价
            singleTotalPrice(this, num)
            totalPrice();
            totalnum()
        })
        /* 
        4 删除单个商品
        
        */
        $(".delbtn").click(function () {
            $(this).parent().parent().remove();
            //重新计算总价
            totalPrice()
            totalnum()
        })
        /**
         * 5删除选中商品
         * 分析：
         *   获取所有选中的商品，遍历删除。
        */
        $(".delallbtn").click(function () {

            $("table .singlechk:checked").each(function (index, dom) {
                $(this).parent().parent().remove();
            })
            //重新计算总价
            totalPrice()
            totalnum()
        })
        /***
         * 6 改变数量的事件
         */
        $("#shopcartarea table tbody .count").keyup(function () {
            //    console.log( 1 );
            let num = $(this).val();
            //判断：如果不是一个数字那么就改为1
            //如果不是一个数字,返回true
            //如果是一个数字，返回false
            if(isNaN(num)) {
                $(this).val(1) ;
                num = 1;
            }
            if (num > 200) {
                $(this).val(200)
                num=200;
            }
            
            singleTotalPrice(this, num)
            totalPrice();
            totalnum()
        })


        /*
         计算小计 
         */
        function singleTotalPrice(obj, num) {
            // 计算小计:  数量 * 单价
            //函数中的this,默认指向window
            //   console.log( this); //window
            //单价
            let singleprice = $(obj).parent().siblings(".singleprice").html()
            //小计
            let singleTotalPrice = singleprice * num;//隐式类型转换
            //赋回页面
            $(obj).parent().siblings(".singleTotalPrice").html(singleTotalPrice.toFixed(2))

            // console.log(singleTotalPrice, typeof singleTotalPrice);
        }
        /**
         * 计算总价
         * 分析 ：
         *    应该计算所有选中单项的小计之和，显示在总价处。
         *    找出选中的单项，分别去取出对应的小计，然后相加
         */
        function totalPrice() {
            let sum = 0;
            $("table .singlechk:checked").each(function (index, dom) {
                //    console.log( index,dom);
                let singleTotalPrice = $(dom).parent().siblings(".singleTotalPrice").html();
                sum += parseFloat(singleTotalPrice);
                console.log(sum);

            })
            //遍历结束得到总价
            $(".totalprice").html(sum.toFixed(2))
        }


        function totalnum(){
            let sum = 0;
            $("table .singlechk:checked").each(function (index, dom) {
                //    console.log( index,dom);
                let count = $(dom).parent().siblings().find(".count").val();
                sum += parseFloat(count);
                console.log(sum);

            })
            //遍历结束得到总价
            $(".totalnum").html(sum)
        }
        
    })

