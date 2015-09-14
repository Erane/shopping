/**
 * Created by Administrator on 2015/9/14.
 */
(function(){
    $.get("PHP/json/shopping.json", function (data) {
        var goodlist=JSON.parse(JSON.stringify(data));
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
    }).done(function(){
        letItGo();
    })
})();