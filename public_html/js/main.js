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

function operaEvento(evento) {
    $("#saida").html($("#saida").html() + evento.type + ": " + evento.which + ", ")
}

//$(document).keypress(operaEvento);

//Array com as teclas de cada pessoa e seu elemento
var pessoas = [
    {
        "nome": "andre",
        "key": 97,
        "el": $('.andre')
    },
    {
        "nome": "gabi",
        "key": 103,
        "el": $('.gabi')
    },
    {
        "nome": "romulo",
        "key": 114,
        "el": $('.romulo')
    },
    {
        "nome": "breno",
        "key": 98,
        "el": $('.breno')
    }
]

//Verifica se a posição X do background já foi alterado
function jaMudouX(el) {
    var p = el.css("background-position-x");
    if (p == -120) {
        return true;
    } else {
        return false;
    }
}

//Muda posição X de um background
function mudaX(el, x) {
    if (!jaMudouX(el)) {
        el.css("background-position-x", x);
    }
}

//Zera a posição X de um background
function defaultX(){
    for(i in pessoas){
        if(!jaMudouX(pessoas[i].el)){
            mudaX(pessoas[i].el, 0);
        }
    }
}

var pos = 0;

// CHEATS
/*
$(document).keypress(function (e) {
    if (e.which == pessoas[0].key) {
        defaultX();
        mudaX(pessoas[0].el, -120);
    }
    if (e.which == pessoas[1].key) {
        defaultX();
        mudaX(pessoas[1].el, -120);
    }
    if (e.which == pessoas[2].key) {
        defaultX();
        mudaX(pessoas[2].el, -120);
    }
    if (e.which == pessoas[3].key) {
        defaultX();
        mudaX(pessoas[3].el, -120);
    }
    if (e.which == 116) {
        $(".andre").css("background-position-x", -120);
        $(".gabi").css("background-position-x", -120);
        $(".romulo").css("background-position-x", -120);
        $(".breno").css("background-position-x", -120);
    }
    if (e.which == 108) {
        setInterval(function(){
            defaultX();
            mudaX(pessoas[pos].el, -120);
            if(pos == 3) pos = 0;
                else pos++;
        }, 100);
    }
    
});
*/

var mosca = {
    baseY: $("#jobs").offset().top,
    baseX: $(window).width()/2,
    pageX: 0,
    pageY: 0,
    iter: 0,
    img: 0
};

var mouseFollow = true;

$(function () {
    
    $("body").mousemove(function (event) {
        if(mouseFollow)
        {
            $('.rosto').each(function (i, el) {
                moveEyes($(el), event);
            });
        }
    });
    
    
    
    cheet(decodeURI("%E2%86%91%20%E2%86%91%20%E2%86%93%20%E2%86%93%20%E2%86%90%20%E2%86%92%20%E2%86%90%20%E2%86%92%20b%20a"), function () {
        mouseFollow = false;
        mosca.baseY = $("#team").offset().top + ($("#team").height()/2);
        console.log(mosca);
        setInterval(function(){
            mosca.iter++;

            mosca.pageX = mosca.baseX + (Math.pow(Math.sin(mosca.iter/20),2)*Math.cos(mosca.iter/26)*230);
            mosca.pageY = mosca.baseY - (Math.cos(mosca.iter/20)*Math.sin(mosca.iter/40)*230);

            $("#mosca").css({top: mosca.pageY, left: mosca.pageX});

            $('.rosto').each(function (i, el) {
                moveEyes($(el), mosca);
            });

            if(mosca.img == 0){
                $("#mosca").css("background-position-y", "-22px");
                mosca.img = 1;
            }else {
                $("#mosca").css("background-position-y", 0);
                mosca.img = 0;
            }


        }, 50);
    });

    //
    var pageHeight = $(window).height();
    $(".divider2").css("height", pageHeight * 0.9);
    $(window).resize(function () {
        var pageHeight = $(window).height();
        $(".divider2").css("height", pageHeight * 0.9);
        //console.log("Altura da Janela: " + (pageHeight - (pageHeight*0.1)));
    });

    //Âncora com rolagem
    var $root = $('html, body');
    var marginTop = ($(window).height() * 0.1);
    var pageWidth = $(window).width();
    if (pageWidth > 991)
        marginTop = ($(window).height() * 0.3);
    //console.log("Valor do Margin Top: "+ marginTop);
    //console.log("Largura da Janela: " + $(window).width());
    $('a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - marginTop
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
});

!function(){function keydown(e){var id,k=e?e.keyCode:event.keyCode;if(!held[k]){held[k]=!0;for(id in sequences)sequences[id].keydown(k)}}function keyup(e){var k=e?e.keyCode:event.keyCode;held[k]=!1}function reset(){var k;for(k in held)held[k]=!1}function on(obj,type,fn){obj.addEventListener?obj.addEventListener(type,fn,!1):obj.attachEvent&&(obj["e"+type+fn]=fn,obj[type+fn]=function(){obj["e"+type+fn](window.event)},obj.attachEvent("on"+type,obj[type+fn]))}var cheet,Sequence,sequences={},keys={backspace:8,tab:9,enter:13,"return":13,shift:16,"⇧":16,control:17,ctrl:17,"⌃":17,alt:18,option:18,"⌥":18,pause:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,L:37,"←":37,up:38,U:38,"↑":38,right:39,R:39,"→":39,down:40,D:40,"↓":40,insert:45,"delete":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,"⌘":91,command:91,kp_0:96,kp_1:97,kp_2:98,kp_3:99,kp_4:100,kp_5:101,kp_6:102,kp_7:103,kp_8:104,kp_9:105,kp_multiply:106,kp_plus:107,kp_minus:109,kp_decimal:110,kp_divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,equal:187,"=":187,comma:188,",":188,minus:189,"-":189,period:190,".":190},NOOP=function(){},held={};Sequence=function(str,next,fail,done){var i;for(this.str=str,this.next=next?next:NOOP,this.fail=fail?fail:NOOP,this.done=done?done:NOOP,this.seq=str.split(" "),this.keys=[],i=0;i<this.seq.length;++i)this.keys.push(keys[this.seq[i]]);this.idx=0},Sequence.prototype.keydown=function(keyCode){var i=this.idx;return keyCode!==this.keys[i]?(i>0&&(this.idx=0,this.fail(this.str),cheet.__fail(this.str)),void 0):(this.next(this.str,this.seq[i],i,this.seq),cheet.__next(this.str,this.seq[i],i,this.seq),++this.idx===this.keys.length&&(this.done(this.str),cheet.__done(this.str),this.idx=0),void 0)},cheet=function(str,handlers){var next,fail,done;"function"==typeof handlers?done=handlers:null!=handlers&&(next=handlers.next,fail=handlers.fail,done=handlers.done),sequences[str]=new Sequence(str,next,fail,done)},cheet.disable=function(str){delete sequences[str]},on(window,"keydown",keydown),on(window,"keyup",keyup),on(window,"blur",reset),on(window,"focus",reset),cheet.__next=NOOP,cheet.next=function(fn){cheet.__next=null===fn?NOOP:fn},cheet.__fail=NOOP,cheet.fail=function(fn){cheet.__fail=null===fn?NOOP:fn},cheet.__done=NOOP,cheet.done=function(fn){cheet.__done=null===fn?NOOP:fn},window.cheet=cheet,"undefined"!=typeof module&&(module.exports=cheet)}();