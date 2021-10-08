$(function(){
    // $('.cnt01_thumbnail>img').click(function(){
    //     var src= $(this).attr('src');
    //     alert(src); -> 확인
    // })
    

    // $("div.imggallery>img").css("display","none");
    // $("img.thumbnail").click(function(){
    //     $("div.imggallery>img").hide();    
    //     $(this).show(function(){
    //         let index_num=$("img.thumbnail").index(this);    
    //         $("div.imggallery>img:eq("+index_num+")").show();
    //     });
    // });


    var galleryImg = $('.imggallery>img');

    $('.thumbnail_box>.box').click(function(){
        var th = $(this).prev();
        var src= th.attr('src');
        var alt= th.attr('alt');


        galleryImg.attr('src',src);
        galleryImg.attr('alt',alt);

    });





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



    $("div.top>img").click(function(){
        $("html, body").animate({
            scrollTop:0
        },900);
    });


});
