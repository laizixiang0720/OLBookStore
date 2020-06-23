/*
author:withtao@126.com
qq:329864068
Copyright 2008 All rights reserved. 2008-1-9
*/
var ph; //put car timeout handle
var hy = function () { return getc("huiyuan"); };
function getscrollpos() {
    var a = { 'top': 0, 'left': 0 };
    a.top = document.documentElement.scrollTop + document.documentElement.clientHeight / 2;
    a.left = document.documentElement.scrollLeft + document.documentElement.clientWidth / 2;
    return a;
}
function cartwin(url) {
    logUrlHistory('&fun=cartwin');
    var popup = window.open(url, "shoppingcart2008", "");
    popup.focus();
}
(function () {
    if (!$('xtip')) {
        document.write('<style type="text/css">#xtip {background-color:#FFFF99;position:absolute;font-size:18px;border: 1px solid #000000;padding: 3px;z-index: 500;}</style>');
        document.write('<span id="xtip" style="top: 414px;left: 761.5px;display:none;"></span>');
    }
})();
/*
window.onload = function(){
var a = $T('a'),t;
var ie = b_t()=='ie'?true:false;
for(var i=0;i<a.length;i++){
if(a[i].href.include(['winpop','add','tg'])){
t = a[i].href.replace('javascript:','');
a[i].href='javascript:void(0)';
if(ie)a[i].onclick=function(){eval(t)};else a[i].setAttribute("onclick",t);
}
}
}
*/
function getPos(o) {
    var t = o.offsetTop;
    var l = o.offsetLeft;
    while (o = o.offsetParent) {
        t += o.offsetTop;
        l += o.offsetLeft;
    }
    return [t, l];
}
function getspos() {
    var e = gete();
    var spos = getscrollpos();
    if (e != null) { var p = getPos(esrc(e)); spos.top = p[0]; spos.left = p[1]; }
    return spos;
}
function setpos(o, mp, pos) {
    o.style.top = (mp[0] - pos[0]) + "px";
    o.style.left = (mp[1] - pos[1]) + "px";
}
function newpop(url, spos) {

    //logUrlHistory('&fun=newpop');


    if (ph) clearTimeout(ph);
    var pos = [0, 0];
    var tip = $('xtip');
    var mp = [spos.top, spos.left];
    tip.style.display = '';
    setpos(tip, mp, pos);
    tip.innerHTML = '<span class="red13">请稍侯……</span>';
    getajax(url, function (p) {
        tip.innerHTML = p;
        ph = setTimeout(function () {
            tip.style.display = 'none';
        }, 3000);
    });
}
function winpop(tushubianhao, tg, num) {//javascript:伪链接 不能传递事件 e=null
    if (tushubianhao == -1) {
        if (tg == null) tg = 0;
        //cartwin('/cart/view.asp?tg=' + tg + '&' + (new Date()));
        cartwin('#/tcart/cart_j.asp?tg=' + tg + '&' + (new Date()));
        return;
    }
    if (!num) num = 1;
    logUrlHistory('&fun=newpop.' + tushubianhao);
    newpop('/cart/putcarx.asp?bookid=' + parseInt(tushubianhao) + '&num=' + num + '&tg=' + tg, getspos());
}
function tgwinpop(tushubianhao) {
    //newpop('/member/cart_tg/putcar.asp?tushubianhao='+ tushubianhao +'&typeid=c',getspos());
    winpop(tushubianhao, 1);
}




function addcsg(tushubianhao) {
    if (hy() == null) oaddcsg(tushubianhao);
    else {
        logUrlHistory('&fun=addcsg.' + tushubianhao);
        newpop('/member/addmyhome/add.asp?tushubianhao=' + tushubianhao + '&typeid=c', getspos());
    }

}
function oaddcsg(tushubianhao) {
    logUrlHistory('&fun=oaddcsg');
    window.open('#/member/addmyhome/add.asp?tushubianhao=' + tushubianhao + '&typeid=c', 'csg');
}
function addmyhome(tushubianhao) {
    addcsg(tushubianhao);
}
function DecodeCookie(str) {
    var strArr;
    var strRtn = "";
    strArr = str.split("a");
    for (var i = strArr.length - 1; i >= 0; i--)
        strRtn += String.fromCharCode(eval(strArr[i]));
    return strRtn;
}

function login() {
    if (getc("huiyuan") == null) {
        lg_fun('');
        return;
    }
    else {
        var jshy = getc('jshuiyuan');
        if (jshy != null) {
            jshy = DecodeCookie(jshy);
            lg_fun(jshy);
            return;
        }
    }
    try { getajax('/member/getname.asp', lg_fun); }
    catch (e) {
        loadit('http://images.学海云端.com/js/ajax.js');
        setTimeout(login, 3000);
    }
}
function lg_fun(hy) {
    var p = [];
    if (hy.length < 1) hy = null;
    var star = getc('huiyuanstar');
    p.push('<span class="orange">欢迎光临<a href="#">学海云端网上书店</a>　</span>');
    if (hy != null) { p.push('：' + hy + ' &nbsp;&nbsp;'); }
    else {
        p.push('  ［<a href="#">登录</a>］');
        p.push('  <a href="#/DouBanUnionLogin.aspx" onclick="if(this.href.indexOf(\'?returnUrl\')==-1)this.href+=\'?returnUrl=\'+window.location.href;"><img src="#/images/douban_login.gif" border="0" alt="用豆瓣账号登录" style="vertical-align:middle" /></a>');
        p.push('  ［<a href="#">注册</a> ］');
    }
    if (hy != null) {
        if (parseInt(star) >= 5)
            p.push('<image src="http://images.学海云端.com/images/sf_vip.gif"/>');
        else {
            for (var i = 0; i < parseInt(star); i++)
                p.push('<image src="#/member/images/star.gif"/>');
        }
        p.push(' &nbsp;&nbsp; ');
    }
    p.push('  ［<a href="#/member/mypub2010/">我的学海云端</a> ］');
    if (hy != null) { p.push('<a href="javascript:logout();"  >退出</a>'); }
    var lg = $('logon');
    if (lg) { lg.innerHTML = p.join(''); };



    var cbShowMsg = getc('cbShowMsg');
    if (cbShowMsg != null) {
        cbShowMsg = DecodeCookie(cbShowMsg);
    }
    var cbhead = getc('cbhead');
    if (cbhead != null) {
        cbhead = DecodeCookie(cbhead);
    }
    if (cbShowMsg != null) {
        $C('header_container')[0].innerHTML = "<div class='hd_caibei'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cbhead + "<span style='float:right;'>" + cbShowMsg + "，您好！<a href='http://cb.qq.com/my/my_jifen_source.html' target='_blank' title='我的彩贝积分'>我的彩贝积分</a></span></div>" + $C('header_container')[0].innerHTML;

    }


}
function logout() {
    delCookie('memid');
    delCookie('huiyuan');
    delCookie('jshuiyuan');
    delCookie('huiyuanstar');
    delCookie('qqid');
    delCookie('union%5Fid');



    var cbShowMsg1 = getc('cbShowMsg');
    if (cbShowMsg1 != null) {
        $C('hd_caibei')[0].innerHTML = "";
    }
    delCookie('cbShowMsg');
    delCookie('cbhead');

    login();
}


String.prototype.query2 = function () {
    var a;
    if (this.indexOf("?") != -1)
        a = this.substr(this.indexOf("?") + 1).split("&");
    else {
        if (this.indexOf(".asp/") != -1)
            a = this.split('.asp/')[1].split("/");
        else
            if (this.indexOf(".aspx/") != -1)
                a = this.split('.aspx/')[1].split("/");
            else
                if (this.indexOf("&") != -1)
                    a = this.substr(this.indexOf("&") + 1).split("&");

    }

    var p = {};
    if (a) {
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split("=");
            p[b[0]] = b[1];
        }
    }
    return p;
}


function coop() {
    var s = document.location.href.toLowerCase();
    var k = ["website_id", "eu_id", "a_id", "cid", "source", "cps"];

    if (s.include(k)) {
        if (s.include(["cps="])) {

            var p = document.location.href.query2();
            for (var i = 0; i < k.length; i++) {
                if (p[k[i]] == null)
                    p[k[i]] = "";
            }
            p.a_id = "";
            p.source = "";
            p.cid = "";
            p.website_id = "";
            p.eu_id = "";
            var reg = /\|/g;
            var a = [p.website_id, p.eu_id, p.a_id.replace(reg, "/"), p.cid.replace(reg, "/"), p.source.replace(reg, "/"), p.cps];
            var d = 86400000;
            if (a[2] != "")
                d *= 7;
            setc("yqf_20070320", a.join("|"), d);
            delc('union_id');
        }
        else {
            if (s.include(["chinapub="])) {
                var cp = ["eqf", "yeedou", "linktech", "weiyi"];
                if (s.include(cp)) {
                    var p = document.location.href.query2();
                    for (var i = 0; i < k.length; i++) if (p[k[i]] == null) p[k[i]] = '';
                    switch (p["chinapub"]) {
                        case "eqf":
                            p.a_id = "";
                            p.cid = "";
                            p.source = "";
                            break;
                        case "yeedou":
                            p.a_id = "";
                            p.cid = "";
                            p.website_id = "";
                            p.eu_id = "";
                            break;
                        case "linktech":
                            p.source = "";
                            p.cid = "";
                            p.website_id = "";
                            p.eu_id = "";
                            break;
                        case "weiyi":
                            p.a_id = "";
                            p.source = "";
                            p.website_id = "";
                            p.eu_id = "";
                            break;
                    }
                    var reg = /\|/g;
                    var a = [p.website_id, p.eu_id, p.a_id.replace(reg, "/"), p.cid.replace(reg, "/"), p.source.replace(reg, "/"), ''];
                    var d = 1 * 24 * 60 * 60 * 1000;
                    if (a[2] != '') d *= 7;

                    setc("yqf_20070320", a.join('|'), d);
                    delc('union_id');
                }
            }
            else {

                var lkt1 = ["a_id"];
                if (s.include(lkt1)) {
                    var p = document.location.href.query2();
                    for (var i = 0; i < k.length; i++) if (p[k[i]] == null) p[k[i]] = '';

                    p.source = "";
                    p.cid = "";
                    p.website_id = "";
                    p.eu_id = "";
                    var reg = /\|/g;
                    var a = [p.website_id, p.eu_id, p.a_id.replace(reg, "/"), p.cid.replace(reg, "/"), p.source.replace(reg, "/"), ''];
                    var d = 1 * 24 * 60 * 60 * 1000;
                    if (a[2] != '') d *= 7;

                    setc("yqf_20070320", a.join('|'), d);
                    delc('union_id');

                }

            }
        }
    }
    if (s.include(["union_id="])) if (getc('union_id') == null) { setc('union_id', (s.query()).union_id, 24 * 60 * 60 * 1000); delc('yqf_20070320'); }
}

coop();

function tj(id) {
    var url = "#/computers/common/recordhistory.asp?id=" + id.toString();
    if (b_t() == 'ff') {
        try {
            getajax(url, function (p) { });
        } catch (e) { }
    }
    else {
        var i = new Image(1, 1);
        i.src = url;
        i.onload = function () { return; };
        i.onerror = function () { return; };
    }
}


function getajaxpro(url, spos, e) {
    //logUrlHistory('&fun=getajaxpro');


    if (ph) clearTimeout(ph);
    var pos = [0, 0];
    var tip = $('divproduct');
    var mp = [spos.top, spos.left];
    $('xtip').style.display = '';
    $('xtip').innerHTML = '<span class="red13">请稍侯……</span>';
    getajax(url, function (p) {
        $('xtip').style.display = 'none';
        tip.style.display = '';
        setpos(tip, mp, [200, 200]);

        //if($(divid).style.display=='none')showdiv(divid,x,y,w);
        tip.innerHTML = p;
        var xhs = document.getElementsByName("xinghao");
        var yss = document.getElementsByName("yanse");
        xhs[0].checked = true;
        yss[0].checked = true;
    });
}

function closepro() {
    $('divproduct').style.display = 'none'
}


function winpop2(tushubianhao) {//javascript:伪链接 不能传递事件 e=null
    logUrlHistory('&fun=winpop2.' + tushubianhao);

    var url = "/book/popproduct.aspx?id=" + tushubianhao;
    var divid = "divproduct";
    getajaxpro(url, getspos());
}

function moreup(IDD, shuming, type) {
    var url = "#/computers/common/Catalog.asp?type=" + type + "&IDD=" + IDD + "&shuming=" + escape(shuming.replace("·", "。"));
    var popup = window.open(url, "info", "");
    popup.focus();
}


function salebook(bookid) {
    logUrlHistory('&fun=salebook.' + bookid);
    newpop('/ureader/ecart/ebookajax.asp?num=0&bookids=' + bookid, getspos());
}
function lookcar() {
    var popupe = window.open("#/ureader/ecart/ebookcart.asp", "ebooksalecar", "");
    popupe.focus();

}
