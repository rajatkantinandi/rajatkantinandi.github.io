$(document).ready(function(){
    $(".navbar-collapse a").click(function(){
        $(".navbar-collapse li.active").removeClass("active");
        $(this).parent().addClass("active");
        $(".navbar-collapse").collapse('hide');
    });
  window.onscroll = function() {
    if ( document.body.scrollTop > 10 &&document.body.scrollTop < 350|| document.documentElement.scrollTop > 10  && document.documentElement.scrollTop < 350 ) {
        $("#e1").addClass("active");
        $("#e2").removeClass("active");
        $("#e3").removeClass("active");
        $(".navbar-header img").css("display","none");
    }
   else if (document.body.scrollTop > 350 && document.body.scrollTop < 1700|| document.documentElement.scrollTop > 350 && document.documentElement.scrollTop < 1700 ) {
        $("#e2").addClass("active");
        $("#e1").removeClass("active");
        $("#e3").removeClass("active");        
        $(".navbar-header img").css("display","inline");
    }
    else if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700 ) {
        $("#e3").addClass("active");
        $("#e2").removeClass("active");
        $("#e1").removeClass("active");
        $(".navbar-header img").css("display","inline");
    }
  }
});