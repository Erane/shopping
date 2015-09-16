/**
 * Created by Administrator on 2015/9/11.
 */


(function(){
    var Buy=function(){
        this.context={};//用于承载每一种商品的信息
        this.goodsList={};//用于承载购物车内所有的商品
    };
    //利用sessionStorage存储购物信息
    //第一个参数是sessionStorage的key值,就是它的名字
    //第二个参数是约定好的,代表改商品的id值
    //第三个参数是该商品的单价
    //第四个参数是该商品的名称
    //第五个参数是该商品的缩略图名称
    Buy.prototype.shopping=function(ssStr_name,id,price,name,img){
        //判断有没有这个key值
        if(typeof (sessionStorage[ssStr_name]) === "undefined"){
            //这个其实就是对象字面量赋值
            this.context.id=id;
            this.context.price=parseFloat(price);//存放商品单价
            this.context.money=parseFloat(price);//存放商品总价
            this.context.name=name;
            this.context.sub=1;//要购买商品的数量,初始值为1
            this.context.img=img;

            //存放商品信息
            var goods_arr=[];
            //JSON.stringify() 把值转换为对象,json
            //JSON.parse 把值转换为字符串
            goods_arr[0]=JSON.parse(JSON.stringify(this.context));

            //把商品信息以json格式存放到指定的sessionStorage内
            sessionStorage[ssStr_name]=JSON.stringify(goods_arr);
        }else{
            //如果已经有这个sessionStorage,把它转换为对象格式,并取出来
            this.goodsList=JSON.parse(sessionStorage[ssStr_name]);
            //用于判断是否有新的商品加入
            var con=true;
            for(var i= 0;i<this.goodsList.length;i++){
                if(this.goodsList[i].id == id){//判断当前购物车内是否已经有该商品
                    //如果有,商品数量+1,商品小计=单价*数量
                    this.goodsList[i].sub=parseInt(this.goodsList[i].sub)+1;
                    //价格只取小数点前2位
                    this.goodsList[i].money=((parseFloat(this.goodsList[i].sub)*price)).toFixed(2);
                    //重新保存
                    sessionStorage[ssStr_name]=JSON.stringify(this.goodsList);
                    //没有新增商品
                    con=false;
                    break;
                }
            }
            //有新增商品
            if(con){
                this.context.id=id;
                this.context.money=parseFloat(price);
                this.context.name=name;
                this.context.sub=1;
                this.context.img=img;

                this.goodsList[this.goodsList.length]=JSON.parse(JSON.stringify(this.context));
                sessionStorage[ssStr_name]=JSON.stringify(this.goodsList)
            }
        }
    };
    //利用Ajax + PHP + json存储购物信息
    //流程大致与sessionStorage相同,只是传给了PHP
    Buy.prototype.shopping2=function(id,price,name,img){
        var context={};
        var goodlist={};
        //判断有shopping里面有没有内容,初始化是没有的
        $.ajax({
            type:"get",
            url:"PHP/json/shopping.json",
            dataType:"json"
        }).done(function(e){//第二次后已经产生内容了,正常调用下面的方法
            goodlist=e;
            var con=true;
            for(var i=0;i<goodlist.length;i++){
                if(goodlist[i].id == id){
                    goodlist[i].sub=parseInt(goodlist[i].sub)+1;
                    goodlist[i].money=(parseFloat(goodlist[i].sub)*price).toFixed(2);

                    $.ajax({
                        type:"post",
                        url:"PHP/getJson.php",
                        dataType:"json",
                        data:{shopping:JSON.stringify(goodlist)}
                    });

                    con=false;
                    break
                }
            }

            if(con){
                context.id=id;
                context.name=name;
                context.sub=1;
                context.money=parseFloat(price);
                context.price=price;
                context.img=img;

                goodlist[goodlist.length]=JSON.parse(JSON.stringify(context));

                $.ajax({
                    type:"post",
                    url:"PHP/getJson.php",
                    dataType:"json",
                    data:{shopping:JSON.stringify(goodlist)}
                });
            }

        }).fail(function(e){//因为初始化下shopping是没有内容的,会导致ajax取值失败,进而调用取值失败的方法
            //把购物内容传给PHP,PHP将获得的内容生成json文件,第二次调用ajax就会成功
            context.id=id;
            context.name=name;
            context.sub=1;
            context.money=parseFloat(price);
            context.price=price;
            context.img=img;

            var goods_arr=[];
            goods_arr[0]=JSON.parse(JSON.stringify(context));
            console.log(goods_arr);
            $.ajax({
                type:"post",
                url:"PHP/getJson.php",
                dataType:"json",
                data:{shopping:JSON.stringify(goods_arr)}
            })
        });
    };
    var buy=new Buy();
    var play=true;
    var num=1;
    $(".goToBuy-shopping").on("click",function(){
        if(!play){//防止动画在进行时不停地点加入购物车
            return
        }
        play=false;
        $(this).find("span").html("+ "+num).fadeIn(800).fadeOut(400,function(){
            play=true;
        });

        //这里偷懒了,原本应该要遍历商品取得它的商品名和价格等信息的
       //sessionStorage调用
        buy.shopping("goods",147,188,"猫爪蛋糕","cat-little");
        //AJax调用
        //buy.shopping2(147,188,"猫爪蛋糕","cat-little");
        num++;
    });
})();



