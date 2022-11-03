$(document).ready(function(){
    $('.slider').bxSlider({
      auto:true,
      pause: 2000
      
    });
       
  });

  $(document).ready(function(){
    $('.slider1').bxSlider({
      auto:true,
      pause: 3000,
      pager:false
    });
       
    });

          $(document).ready(function() {
              $(".item").mouseenter(function() {
                  $("img", this).animate( {
                      width: '215px',
                      height: '200px'
                  });
                  $(".code", this).text("할인 코드 : abcd");
              });
              $(".item").mouseleave(function() {
                  $("img", this).animate( {
                      width: '200px'
                  });
                  $(".code", this).text("");
              });
              $("#cat_title").click(function() {
                  $("#cate").slideToggle("slow");
              });
          });