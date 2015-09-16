







    //为所有的数组添加一个方法
    //根据参数删除数组内指定的值
    Array.prototype.removeByVal=function(val){
            for(var i=0;i<this.length;i++){
                if(this[i] == val){
                    this.splice(i,1);
                    break
                }
            }
    };

//在加载JS代码前,首先获取json文件内是否有商品
//var getAjax_val=(function(){
//    var res=null;
//    $.ajax({
//        type:"get",
//        url:"PHP/json/shopping.json",
//        dataType:"json",
//        async:false
//    }).done(function(data){
//        res=JSON.parse(JSON.stringify(data))
//    });
//    return res;
//})();


$(function () {



function letItGo(){
    $(".close").click(function(){
        if(confirm("确认删除商品吗?")){
            var goods_parent=$(this).parent();//找到点击对象的父元素
            var goods_parent_index=$(".goods ul").index(goods_parent);
            goods_parent.remove();//删除父元素
            if($(".goods-list").length <= 0){//如果没有商品,显示文字
                $(".No-commodity").removeClass("hide");
            }
            //--------------------------------------sessionStorage方法 开始-----------------------------------------------------------------------
            //在sessionStorage内删除指定的商品
            var goodlist=JSON.parse(sessionStorage.goods);
            goodlist.removeByVal(goodlist[goods_parent_index]);
            sessionStorage.goods=JSON.stringify(goodlist);
            //-------------------------------------------------------------------------------------------------------------

            //--------------------------------------ajax方法 开始-----------------------------------------------------------------------
            //2秒后清除json文件内指定的商品
            //var timer=null;
            //clearTimeout(timer);
            //timer=setTimeout(function(){
            //    var goodlist=getAjax_val;
            //    goodlist.removeByVal(goodlist[goods_parent_index]);
            //    $.ajax({
            //        type:"post",
            //        url:"PHP/getJson.php",
            //        dataType:"json",
            //        data:{
            //            shopping:JSON.stringify(goodlist)
            //        }
            //    })
            //},2000);
            //--------------------------------------ajax方法 结束-----------------------------------------------------------------------

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
        youNeedToPay.html('￥'+ (price_all - parseFloat(goods_discount)).toFixed(2));
    }
    //点击转入支付页面时计算价格
    //无论是ajax 还是 session都要有
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

            var goods_id=parseInt(list.attr("data-id"));//获取代表该商品的id

            //--------------------------------------sessionStorage方法 开始-----------------------------------------------------------------------
            //将变更的商品信息添加到sessionStorage中
            var sessSto_goodlist=JSON.parse(sessionStorage.goods);
            for(var i=0;i<sessSto_goodlist.length;i++){
                if(sessSto_goodlist[i].id == goods_id){
                    sessSto_goodlist[i].sub=num;
                    sessSto_goodlist[i].money=(price * num).toFixed(2);
                    sessionStorage.goods=JSON.stringify(sessSto_goodlist);
                }
            }
            //-------------------------------------------------------------------------------------------------------------

            //--------------------------------------ajax方法 开始-----------------------------------------------------------------------
            //用于将支付页面对商品的增减,价格变化信息重新存入json当中
            //var timer=null;
            //clearTimeout(timer);
            //var goodlist=null;
            //if(getAjax_val){
            //    timer=setTimeout(function(){
            //        goodlist=getAjax_val;
            //        for(var i = 0,l=goodlist.length;i<l;i++){
            //            goodlist[i].sub=parseInt(num);
            //            goodlist[i].money=(parseFloat(num * price)).toFixed(2);
            //        }
            //        $.ajax({
            //            type:"post",
            //            url:"PHP/getJson.php",
            //            dataType:"json",
            //            data:{
            //                shopping:JSON.stringify(goodlist)
            //            }
            //        })
            //    },2000)
            //}
            //--------------------------------------ajax方法 结束-----------------------------------------------------------------------

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
        });
        window.sum=sum
    })();
}




    //-----------------------获取sessionStorage上购物车的内容------------------------------
    if(typeof  (sessionStorage.goods) !== "undefined"){
        var goodlist=JSON.parse(sessionStorage.goods);
        for(var i=0;i<goodlist.length;i++){
            $(".goods").append('<ul class="goods-list" data-id="'+goodlist[i].id+'">'+
            '<li class="goods-inf">'+
            '<a href="#">'+
            '<span class="goods-imgs">'+
            '<img src="image/'+goodlist[i].img+'.jpg">'+
            '</span>'+
            '<span class="goods-name">'+goodlist[i].name+'</span>'+
            '</a>'+
            '</li>'+
            '<li class="goods-price">'+
            '￥'+goodlist[i].price+
            '</li>'+
            '<li class="goods-num">'+
            '<span class="reduce hide">-</span>'+
            '<span class="num">'+goodlist[i].sub+'</span>'+
            '<span class="add">+</span>'+
            '</li>'+
            '<li class="goods-sub">'+
            '￥'+goodlist[i].money+
            '</li>'+
            '<li class="close">&times;</li>'+
            '</ul>'+
            '<div class="list-line"></div>')
        }
    }


    //-----------------------利用ajax获取上购物车的内容------------------------------

        //if(getAjax_val){
        //    for(var i=0;i<getAjax_val.length;i++){
        //        $(".goods").append('<ul class="goods-list" data-id="'+getAjax_val[i].id+'">'+
        //        '<li class="goods-inf">'+
        //        '<a href="#">'+
        //        '<span class="goods-imgs">'+
        //        '<img src="image/'+getAjax_val[i].img+'.jpg">'+
        //        '</span>'+
        //        '<span class="goods-name">'+getAjax_val[i].name+'</span>'+
        //        '</a>'+
        //        '</li>'+
        //        '<li class="goods-price">'+
        //        '￥'+getAjax_val[i].price+
        //        '</li>'+
        //        '<li class="goods-num">'+
        //        '<span class="reduce hide">-</span>'+
        //        '<span class="num">'+getAjax_val[i].sub+'</span>'+
        //        '<span class="add">+</span>'+
        //        '</li>'+
        //        '<li class="goods-sub">'+
        //        '￥'+getAjax_val[i].money+
        //        '</li>'+
        //        '<li class="close">&times;</li>'+
        //        '</ul>'+
        //        '<div class="list-line"></div>')
        //    }
        //}


    letItGo();//记得放到末尾,否则sessionStorage添加的内容无法操作

});
