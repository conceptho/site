function moveEyes(obj, event)
{
    var mX = event.pageX;
    var mY = event.pageY;
    var p = obj.offset();
    var pX = mX - p.left - (obj.width() / 2);
    var pY = mY - p.top - (obj.height() / 2);
    var f = 0;
    var gutter = 50;

    if (pX <= -gutter) {
        if (pY <= -gutter)
            f = 2;
        else if (pY >= gutter)
            f = 8;
        else
            f = 1;
    }
    else if (pX >= gutter)
    {
        if (pY <= -gutter)
            f = 4;
        else if (pY >= gutter)
            f = 6;
        else
            f = 5;
    }
    else
    {
        if (pY <= -gutter)
            f = 3;
        else if (pY >= gutter)
            f = 7;
        else
            f = 0;
    }

    obj.removeClass("pos0 pos1 pos2 pos3 pos4 pos5 pos6 pos7 pos8");
    obj.addClass("pos" + f);
}

$(function() {
    $("body").mousemove(function(event) {
        $('.rosto').each(function(i, el) {
            moveEyes($(el), event);
        });
        
    });
    
    //
    var pageHeight = $(window).height();
    $(".divider2").css("height", pageHeight*0.9);
    $(window).resize(function(){
        var pageHeight = $(window).height();
        $(".divider2").css("height", pageHeight*0.9);
        //console.log("Altura da Janela: " + (pageHeight - (pageHeight*0.1)));
    });

    //Âncora com rolagem
    var $root = $('html, body');
    var marginTop = ($(window).height()*0.1);
    var pageWidth = $(window).width();
    if(pageWidth > 991) marginTop = ($(window).height()*0.3);
    //console.log("Valor do Margin Top: "+ marginTop);
    //console.log("Largura da Janela: " + $(window).width());
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - marginTop
        }, 500, function() {
            window.location.hash = href;
        });
        return false;
    });
});