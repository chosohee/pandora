$(function(){

    var wd = $(window).width();
    if(wd >=421){

        // 썸네일 이미지
        var galleryImg = $('.imggallery>img');

        $('.thumbnail_box>.box').click(function(){
            var th = $(this).prev();
            var src= th.attr('src');
            var alt= th.attr('alt');
    
    
            galleryImg.attr('src',src);
            galleryImg.attr('alt',alt);
    
        });   
        


        // 하단 버튼 슬라이드
        var reImg = $('.recommend_cnt .recommend_img');

        reImg.find('.recom_img:last').prependTo(reImg);
        reImg.css('margin-left','-25%');
    
        $('.recommend_cnt .left').click(function(){
            reImg.stop().animate({
                marginLeft:0
            },500,function(){
            reImg.find('.recom_img:last').prependTo(reImg);
            reImg.css('margin-left','-25%');
            });
        });
    
        $('.recommend_cnt .right').click(function(){
            reImg.stop().animate({
                marginLeft: -50 + '%'
            },500,function(){
            reImg.find('.recom_img:first').appendTo(reImg);
            reImg.css('margin-left','-25%');
            });
        });
    

    }else{
        
        // 상단 슬라이이드
        var pg = $('.paging>li');
        
        pg.click(function(){
            pg.removeClass('sel');
            $(this).addClass('sel');
            
            var ind = $(this).index();
            
            $('div.cnt01_img').animate({
                marginLeft : ind*-100 + '%'},500);
                
        });

        var i = 0;

        $('.thumbnail_left').click(function(){
            i--;
            if(i <= 0 ){
                i=0;
            }

            $('.cnt01_img').stop().animate({
                marginLeft: i*-100+'%'
            },500);

            pg.removeClass('sel');
            pg.eq(i).addClass('sel');

        });


        $('.thumbnail_right').click(function(){
            i++;
            if(i >= 2 ){
                i=2;
            }

            $('.cnt01_img').stop().animate({
                marginLeft: i*-100+'%'
            },500);

            pg.removeClass('sel');
            pg.eq(i).addClass('sel');


        });






        // 하단 버튼 슬라이드
        var reImg = $('.recommend_cnt .recommend_img');

        reImg.find('.recom_img:last').prependTo(reImg);
        reImg.css('margin-left','-50%');

        $('.recommend_cnt .left').click(function(){
            reImg.stop().animate({
                marginLeft:0
            },500,function(){
            reImg.find('.recom_img:last').prependTo(reImg);
            reImg.css('margin-left','-50%');
            });
        });

        $('.recommend_cnt .right').click(function(){
            reImg.stop().animate({
                marginLeft: -100 + '%'
            },500,function(){
            reImg.find('.recom_img:first').appendTo(reImg);
            reImg.css('margin-left','-50%');
            });
        });


    }


    
    // 아코디언 드롭
    $('.info_txt').hide();
    $('.cnt01 h5').click(function(){
        $('.info_txt').slideToggle();
    });

    $('.rev').hide();
    $('.cnt02 h5').click(function(){
        $('.rev').slideToggle();
    });

    $('.qna').hide();
    $('.cnt03 h5').click(function(){
        $('.qna').slideToggle();
    });


    
    // 탑버튼
    $("div.top_btn>img").click(function(){
        $("html, body").animate({
            scrollTop:0
        },900);
    });


});
