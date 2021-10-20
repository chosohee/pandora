$(function(){

    var wd = $(window).width();
    if(wd >= 1024){
        // pc에 대한 액션
    }else if(wd <= 780 && wd >= 421){ 
        // 태블릿에 대한 액션
    }else{
        //모바일
        var i = 0;
        $('.list_box').swipeleft(function(){
            i++;
            if(i >= 2){
                i =2;
            }
            $(this).find('ul').animate({
                marginLeft :i * -50+'%'},500);
        });
        $('.list_box').swiperight(function(){
            i--;
            if(i <= 0){
                i=0;
            }
            $(this).find('ul').animate({
                marginLeft :i * -50+'%'},500);
            
        })
    }







    $("div.top_btn>img").click(function(){
        $("html, body").animate({
            scrollTop:0
        },900);
    });

});