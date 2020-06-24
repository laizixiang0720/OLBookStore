$S = jQuery.noConflict();

function del(orderid) {
    //if (confirm("真的要删除"+orderid+"号订单吗？不能恢复的！")){
    //	window.open("../../survey/Survey_esc.asp?orderid="+orderid);
    //}
    $S("#delorder").val(orderid);
    $S("#facebox2 .messages").html("你确定要取消" + orderid + "号订单吗？");
    $S("#facebox2").css("width", "350px");
    $S("#facebox2").overlay({
        top: 172,
        expose: { color: '#fff', loadSpeed: 200, opacity: 0.5 },
        closeOnClick: false,
        api: true
    }).load();

}
function del1(orderid) {
    $S("#facebox1 .message").html("网上支付订单已锁定，取消请联系客服");
    $S("#facebox1").overlay({
        top: 172,
        expose: { color: '#fff', loadSpeed: 200, opacity: 0.5 },
        closeOnClick: false,
        api: true
    }).load();
}
function isok(orderid) {

    $S("#sorderid").val(orderid);

    $S("#facebox").overlay({
        top: 172,
        expose: { color: '#fff', loadSpeed: 200, opacity: 0.5 },
        closeOnClick: false,
        api: true
    }).load();
}
function delok() {
    var doid = $S("#delorder").val();
    window.open("http://member.学海云端.com/Car/Survey_esc.aspx?orderid=" + doid);

}
function submit4() {
    //alert($("#sorderid").val() + "|" + $("#stime").val() );
    $S.ajax({
        type: "GET",
        url: "Handdle/OrderReceivingHandler.ashx",
        data: "act=ok&o=" + $S("#sorderid").val() + "&t=" + $S("#stime").val(),
        success: function (msg) {
            var arr = msg.split("$");
            $S(".message").html(arr[0]);
            //            if (arr[1] == 'ok') {
            $S("#facebox1").overlay({
                top: 172,
                expose: { color: '#fff', loadSpeed: 200, opacity: 0.5 },
                closeOnClick: false,
                api: true
            }).load();

            //            }
        }
    });
}
//首次加载
$S(function ($) {
    setTab("a1");
});
/*获取url参数*/
function get_urlpara(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//选项卡切换
function setTab(name, tp) {
    if (typeof tp == undefined || typeof tp == "undefined" || tp == null) {
        tp = "";
    }
    //给选项卡设置样式
    var dd = name.substr(1, 1);
    for (var i = 1; i <= 3; i++) {
        i == dd ? $S("#a" + i).addClass("hover") : $S("#a" + i).removeClass("hover");
    }
    var dy = get_urlpara("year"); //index.aspx 传过来的值
    if (typeof dy == undefined || typeof dy == "undefined" || dy == null) {
        dy = "";
    }
    else {
        $S("#selectyear").attr("value", dy);
    }
    var year = $S("#selectyear").val(); //得到年份
    $S.ajax({
        type: "GET",
        url: "Handdle/MemberOrdersNew.ashx?type=" + name + "&y=" + year + tp,
        data: "",
        success: function (msg) {
            if (msg != "err") {
                var arr = msg.split("$");
                $S("#ordersinfo").html(arr[0]);
                $S("#a1").html("纸版书(" + arr[1] + ")");
                $S("#a2").html("电子书&amp;视频教程(" + arr[2] + ")");
                $S("#a3").html("试读订单(" + arr[3] + ")");

                //bindWuliuSearch();
            }
            else {
                alert("请求参数有误，请重新提交！");
            }
        }
    });

}
//分页
function pageNext(tp, pagedex) {
    var name = $S(".hover").attr("id");
    var pagestr = "&page=" + pagedex;
    var setp = "&tp=" + tp + pagestr;
    setTab(name, setp);
}
//日期选择
function changeSelect() {
    var name = $S(".hover").attr("id");
    setTab(name);
}
//选择订单的状态
function changests(tp) {
    var name = $S(".hover").attr("id");
    var setp = "&tp=" + tp;
    setTab(name, setp);
}

//查询物流信息
function searchWuliu(obj) {
    var huiyuan = getc("huiyuan");
    if (huiyuan != "customer") {
        return;
    }
    try {
        if (obj) {
            obj = $S(obj);
            var url = "http://m.kuaidi100.com/query?type=" + obj.attr("compay") + "&postid=" + obj.attr("code") + "&id=1&valicode=&temp=0." + new Date().getMilliseconds() + "&callback=?";
            //url = "#/member/bookpinglun/putcar.ashx?topcar=1&_t=1393321035490&jsonp=reni_cid[%22yes_5318%22]=&rnd=0.25411024059694864&callback=?";
            try {
                $S.getJSON(url, function (date) {
                    alert(date);
                    var wuliuData = eval(data).data;
                    var maxLength = wuliuData.length - 1;

                    var txt = "";
                    for (var i = maxLength; i > 0; i--) {
                        txt += wuliuData[i].ftime + "    " + wuliuData[i].context + "<br/>";
                    }
                    var position = obj.offset();

                    $S("#wuliuDiv").html(date).css({ left: position.left, top: position.top });
                   }
               );
            } catch (err) {
                alert("错误名称: " + err.name + " ---> ");
                alert("错误信息: " + err.message + " ---> ");
            }
            
        }
    } 
    catch (rr) {
        alert("错误名称: " + e.name + " ---> ");
        alert("错误信息: " + e.message + " ---> ");
    }
}

function bindWuliuSearch() {
    $S(".wuliuTD").each(function (i) {
        $S(this).hover(
                         function (event) {
                             searchWuliu(this, event);
                         },
                         function (event) {

                         }
                 );
    });
}