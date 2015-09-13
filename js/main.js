/**
 * Created by Administrator on 2015/9/9.
 */
    var box=$("#autoplay");
    var imgs=$("#autoplay ul li");
    var imgsLen=imgs.length;
    var cir=$(".cir li");
    var playing=true;
    var index=0;
    var timer=null;

    if(imgsLen>0){
        cir.eq(0).addClass("active")
    }
    function autoPlay(key){
        imgs.fadeOut(800,function(){
            playing=false
        });
        index=key % imgsLen;
        imgs.eq(index).fadeIn(800,function(){
            playing=true;
        });
        cir.eq(index).addClass("active").siblings().removeClass("active");
    }

    timer=setInterval(function(){
        index++;
        autoPlay(index)
    },2500);
    cir.click(function(){
        if(!playing){
            return
        };
        index=$(this).index();
        autoPlay(index)
    });

    box.hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            index++;
            autoPlay(index)
        },2500);
    });

