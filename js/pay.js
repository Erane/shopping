








//(function(){
//    $.get("PHP/json/shopping.json", function (data) {
//        var goodlist=JSON.parse(JSON.stringify(data));
//        for(var i=0;i<goodlist.length;i++){
//            $(".goods").prepend('<ul class="goods-list">'+
//            '<li class="goods-inf">'+
//            '<a href="#">'+
//            '<span class="goods-imgs">'+
//            '<img src="image/cat-little.jpg">'+
//            '</span>'+
//            '<span class="goods-name">'+goodlist[i].name+'</span>'+
//            '</a>'+
//            '</li>'+
//            '<li class="goods-price">'+
//            '￥'+goodlist[i].price+
//            '</li>'+
//            '<li class="goods-num">'+
//            '<span class="reduce">-</span>'+
//            '<span class="num">'+goodlist[i].sub+'</span>'+
//            '<span class="add">+</span>'+
//            '</li>'+
//            '<li class="goods-sub">'+
//            '￥'+goodlist[i].money+
//            '</li>'+
//            '</ul>'+
//            '<div class="list-line"></div>')
//        }
//    })
//})();
$(function () {



function letItGo(){
    $(".close").click(function(){
        if(confirm("确认删除商品吗?")){
            var self=$(this).parent();//找到点击对象的父元素
            self.remove();//删除父元素
            if($(".goods-list").length <= 0){//如果没有商品,显示文字
                $(".No-commodity").removeClass("hide");
            }
            total();//删除商品后重新计算总价格
        }
    });
//总价计算
    function total(){
        var goods_total=$(".goods-total");//所有商品的总价
        var price_all=0;//用于暂时存放总价格
        var goods_sub=$(".goods-sub");//每一行商品的价格小计
        var goods_discount=$("#discount").html();
        var youNeedToPay=$("#youNeedToPay");
        for(var i=0;i<goods_sub.length;i++){
            //清除两端空格,踢掉￥符号(从第二个字符开始取值),将值转换为浮点数
            //每次循环都会把值相加
            price_all +=parseFloat($.trim(goods_sub.eq(i).html()).substring(1));
        }
        goods_total.html('￥'+ price_all.toFixed(2));
        youNeedToPay.html('￥'+ (price_all - parseFloat(goods_discount)).toFixed(2))
    }
    window.total=total();
//如果购物车有商品,隐藏文字提示
    if($(".goods-list").length > 0){
        $(".No-commodity").addClass("hide");
    }else{
        $(".No-commodity").removeClass("hide");
    }
//购物车价格计算(细节部分)
    (function(){

        var Sum=function(){
            this.close=$(".close");//删除商品
            this.reduce=$(".reduce");//减号
            this.goods_list=$(".goods-list");//每一行商品
            this.goods_price=$(".goods-price");//商品单价
            this.goods_sub=$(".goods-sub");//每一行商品的价格小计
        };
        //隐藏减号
        Sum.prototype.hide=function(e){
            this.reduce.eq(e).addClass("hide")
        };
        //显示减号
        Sum.prototype.show=function(e){
            this.reduce.eq(e).removeClass("hide")
        };
        //计算价格(小计)
        Sum.prototype.sub=function(list,num){
            //获取当前商品单价
            var price=parseFloat($.trim(list.find(this.goods_price).html()).substring(1));
            //获取当前商品小计
            var goods_sub_every=list.find(this.goods_sub);
            //转换为数字
            var num=parseInt(num);
            //只取小数点前2位
            goods_sub_every.html('￥'+(price * num).toFixed(2));
            //刷新总价
            total();
        };
        //实例化
        var sum= new Sum();
        for (var i=0;i<sum.goods_list.length;i++){
            //事件代理
            sum.goods_list.eq(i).click(function(e){
                var e=e || window.event;
                var el= e.target;//获取被点击的对象
                var cls=el.className;//获取className
                var num=$(this).find($(".num"));
                var nums=parseInt(num.html());
                var reduce=$(this).find($(".reduce"));
                var self=$(this);
                //根据className进行判断
                switch (cls){
                    case "add":
                        num.html(nums + 1);
                        if(parseInt(num.html()) > 1){
                            reduce.removeClass("hide");
                        }
                        sum.sub(self,num.html());
                        break;
                    case "reduce":
                        num.html(nums - 1);
                        if(parseInt(num.html()) <= 1){
                            reduce.addClass("hide");
                        }
                        sum.sub(self,num.html());
                        break;
                    default :
                        break
                }
            })
        }
        //省市区三级联动
        var Province=$("#Province");//省份
        var City=$("#City");//城市
        var County=$("#County");//区/县
        var Province_val=$("#Province_val");//保存选择省份
        var City_val=$("#City_val");//保存选择城市
        var County_val=$("#County_val");//保存选择区/县
        var option=null;//用于传入省市区数据
        var NowVal=null;//用于记录当前的值

        //简单来说,这其实是一个for循环
        //第一个参数 province 是要遍历的内容,这里是已经做好的json省级数据
        // index = i
        // data = 每一个i里面数据的值
        $.each(province,function(index,data){//遍历省份
            //根据事先定好的数据格式,将值逐一取出来
            option="<option value="+data.ID+">"+data.name+"</option>";
            //将取得的数据插入到选择栏内
            Province.append(option)
        });

        //当省份发生变化的时候保存选择的省份并根据省份取出相对应的城市列表
        Province.change(function () {
            NowVal=$(this).val();//获取当前省份在数据中的id值
            Province_val.val($(this).find("option:selected").text());//保存当前选择的省份
            City.find("option").slice(1).remove();//移除城市除了第一个以外的option,即保留 --请选择城市--
            County.find("option").slice(1).remove();//同理

            $.each(city, function (index, data) {//遍历城市
                if(data.parent_id == NowVal){//根据城市数据中事先约定好的ID值进行取值
                    option="<option value="+data.ID+">"+data.name+"</option>";
                    City.append(option);
                }
            })
        });

        City.change(function () {
            NowVal=$(this).val();
            City_val.val($(this).find("option:selected").text());
            County.find("option").slice(1).remove();

            $.each(xian, function (index, data) {//遍历区/县
                if(data.parent_id == NowVal){
                    option="<option value="+data.ID+">"+data.name+"</option>";
                    County.append(option);
                }
            })
        });

        County.change(function () {
            County_val.val($(this).find("option:selected").text());
        })
    })();
}
    //letItGo();

    //if(typeof sessionStorage.goods !== "undefined"){
    //    var goods=$(".goods");
    //    var list=JSON.parse(sessionStorage.goods);
    //    for(var i=0;i<list.length;i++){
    //        goods.prepend('<ul class="goods-list">'+
    //        '<li class="goods-inf">'+
    //        '<a href="#">'+
    //       '<span class="goods-imgs">'+
    //        '<img src="image/cat-little.jpg">'+
    //        '</span>'+
    //        '<span class="goods-name">'+list[i].name+'</span>'+
    //        '</a>'+
    //        '</li>'+
    //        '<li class="goods-price">'+
    //        '￥'+list[i].price+
    //        '</li>'+
    //        '<li class="goods-num">'+
    //        '<span class="reduce">-</span>'+
    //        '<span class="num">'+list[i].sub+'</span>'+
    //        '<span class="add">+</span>'+
    //        '</li>'+
    //        '<li class="goods-sub">'+
    //        '￥'+list[i].money+
    //        '</li>'+
    //        '</ul>'+
    //        '<div class="list-line"></div>')
    //    }
    //}else{
    //    console.log(1)
    //}

    //-----------------------获取sessionStorage上购物车的内容------------------------------
    if(typeof  (sessionStorage.goods) !== "undefined"){
        var goodlist=JSON.parse(sessionStorage.goods);
        for(var i=0;i<goodlist.length;i++){
            $(".goods").prepend('<ul class="goods-list">'+
            '<li class="goods-inf">'+
            '<a href="#">'+
            '<span class="goods-imgs">'+
            '<img src="image/cat-little.jpg">'+
            '</span>'+
            '<span class="goods-name">'+goodlist[i].name+'</span>'+
            '</a>'+
            '</li>'+
            '<li class="goods-price">'+
            '￥'+goodlist[i].price+
            '</li>'+
            '<li class="goods-num">'+
            '<span class="reduce">-</span>'+
            '<span class="num">'+goodlist[i].sub+'</span>'+
            '<span class="add">+</span>'+
            '</li>'+
            '<li class="goods-sub">'+
            '￥'+goodlist[i].money+
            '</li>'+
            '</ul>'+
            '<div class="list-line"></div>')
        }
    }


    //-----------------------利用ajax获取上购物车的内容------------------------------
    //$.get("PHP/json/shopping.json", function (data) {
    //    var goodlist=JSON.parse(JSON.stringify(data));
    //    for(var i=0;i<goodlist.length;i++){
    //        $(".goods").prepend('<ul class="goods-list">'+
    //        '<li class="goods-inf">'+
    //        '<a href="#">'+
    //        '<span class="goods-imgs">'+
    //        '<img src="image/cat-little.jpg">'+
    //        '</span>'+
    //        '<span class="goods-name">'+goodlist[i].name+'</span>'+
    //        '</a>'+
    //        '</li>'+
    //        '<li class="goods-price">'+
    //        '￥'+goodlist[i].price+
    //        '</li>'+
    //        '<li class="goods-num">'+
    //        '<span class="reduce hide">-</span>'+
    //        '<span class="num">'+goodlist[i].sub+'</span>'+
    //        '<span class="add">+</span>'+
    //        '</li>'+
    //        '<li class="goods-sub">'+
    //        '￥'+goodlist[i].money+
    //        '</li>'+
    //        '</ul>'+
    //        '<div class="list-line"></div>')
    //    }
    //}).done(function(){
    //    letItGo();
    //})



    letItGo();//记得放到末尾,否则sessionStorage添加的内容无法操作

});
