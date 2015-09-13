/**
 * Created by Administrator on 2015/9/11.
 */

addgoos("123",2,"蒸鱼");
addgoos("21",30,"龙虾");

function addgoos(id,price,name,num){
    var context={};
    var goodlist={};
    var money=price;
    var men=["id","name","sum","price"];

    if(typeof (sessionStorage.good) === "undefined"){
        context.id=parseInt(id);
        context.name=name;
        context.sum=10;
        context.price=parseInt(price);

        var goods=[];
        goods[0]=JSON.parse(JSON.stringify(context,men));
        sessionStorage.good=JSON.stringify(goods,men);
    }else{
        goodlist=JSON.parse(sessionStorage.good);
        var con=0;


        for(var i=0;i<goodlist.length;i++){
            if(goodlist[i].id == id){
                goodlist[i].sum=parseInt(goodlist[i].sum)+1;
                goodlist[i].price=(parseInt(goodlist[i].sum)*money);
                if(goodlist[i].sum == 0){

                }
                sessionStorage.good=JSON.stringify(goodlist,men);
                con++;
                break;
            }
        }
        if(con == 0){
            context.id=parseInt(id);
            context.name=name;
            context.sum=1;
            context.price=parseInt(price);

            goodlist[goodlist.length]=JSON.parse(JSON.stringify(context,men));
            sessionStorage.good=JSON.stringify(goodlist,men);
        }
    }
}
