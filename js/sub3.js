$(function(){

    var wd = $(window).width();
    if(wd >= 1024){
        // pc에 대한 액션
    }else if(wd <= 780 && wd >= 421){ 
        // 태블릿에 대한 액션
    }else{
        //모바일


        // 무한슬라이드
        var i = 0;
        var lb= $('.list');

        lb.find('li:last').prependTo(lb);
        lb.css('margin-left','-50%');

        $('.list_box').swipeleft(function(){
            $(this).find('ul').animate({
                marginLeft :  -100+'%'},500,function(){
                lb.find('li:first').appendTo(lb);
                lb.css('margin-left','-50%');
            });
        });
        $('.list_box').swiperight(function(){
            $(this).find('ul').animate({
                marginLeft : 0+'%'},500,function(){
                lb.find('li:last').prependTo(lb);
                lb.css('margin-left','-50%');
            });
        })

    }


    // 탑버튼
    $("div.top_btn>img").click(function(){
        $("html, body").animate({
            scrollTop:0
        },900);
    });

});