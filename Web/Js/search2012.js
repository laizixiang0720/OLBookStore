
function vicnewpop(url, spos) {
    //logUrlHistory('&fun=newpop');
    if (ph) clearTimeout(ph);
    var pos = [0, 0];
    var tip = $('box');
    var mp = [spos.top, spos.left];
    tip.style.display = '';
    setpos(tip, mp, pos);
    tip.innerHTML = '<span class="red13">���Ժ��</span>';
    getajax(url, function (p) {
        tip.innerHTML = p;
        ph = setTimeout(function () {
            tip.style.display = 'none';
        }, 10000);
    });
}

function openShutManager(oSourceObj, oTargetObj, shutAble, oOpenTip, oShutTip) {
    var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
    var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
    var openTip = oOpenTip || "";
    var shutTip = oShutTip || "";
    if (targetObj.style.display != "none") {
        if (shutAble) return;
        targetObj.style.display = "none";
        if (openTip && shutTip) {
            sourceObj.innerHTML = shutTip;
        }
    } else {
        targetObj.style.display = "block";
        if (openTip && shutTip) {
            sourceObj.innerHTML = openTip;
        }
    }
} 
/*
����ť�õ���js
*/
    function gobuy(id, tg,flag) {
        var num =1;//ÿ��Ĭ��ֻ���һ��
        var exp;
        
        exp = 1;
        if (tg == 3) {
            var vbooksj =flag;//��ʾVbookĬ������
            if (vbooksj == "3") {
                exp = 2;
            }
        }
        logUrlHistory('&tg=' + tg + '&fun=putmycar.' + id);
        var gp = getspos();
        gp.left-=180;
        vicnewpop("/member/bookpinglun/putcar.ashx?&pd=xiangxiyemian&typeid=c&sc=c&tushubianhao=" + id + "&tg=" + tg + "&exp=" + exp + "&num=" + num, gp);
        /*
        //���첽���������£�ʹ��window.open�ᱻ�������ֹ�����������ȴ�һ���յ�ҳ�棬Ȼ���ٰ�����ָ�������ҳ��
        var cart = window.open("about:blank", "cpubshoppingcart");
        
        getajax("/member/bookpinglun/simpleputcar.ashx?&pd=sousuoyemian&typeid=c&sc=c&tushubianhao=" + id + "&tg=" + tg + "&exp=" + exp + "&num=" + num, function (p) {

            if (p.indexOf("�ɹ����빺�ﳵ") >= 0 || p.indexOf("�Ѿ�����ͬ��Ʒ") >= 0) {

                cart.location.href = "http://member.ѧ���ƶ�.com/Car/cart_j.aspx";
                cart.focus();
            }
        });
        */
    }
    /*�ղ��õ���js*/

    function dengluyz(id, e) {
        var lshref = window.location.href;
        if (getc("huiyuan") == null) {
            window.location.href = '#?ref=' +lshref;
        } else {
            //alert(e.clientX + "|" + e.clientY)
            var x = e.offsetLeft - 15;
            var y = e.offsetTop + 20;
            while (e = e.offsetParent) {
                x += e.offsetLeft;
                y += e.offsetTop;
            }

            getajax('/book/xxshouchang.asp?lei=0&id=' + id + '', function (p) {
                var zt = p;
                if (zt == "1") {
                    if ($("box2").style.display != "none") {
                        return;
                    }
                    else {
                        if ($("box3").style.display != "none") {
                            closediv("box3");
                        }
                        if ($("box4").style.display != "none") {
                            closediv("box4");
                        }
                        opendiv("box2", x, y);
                    }

                }
                else if (zt == "2") {

                    if ($("box3").style.display != "none") {
                        return;
                    }
                    else {
                        if ($("box2").style.display != "none") {
                            closediv("box2");
                        }
                        if ($("box4").style.display != "none") {
                            closediv("box4");
                        }
                        opendiv("box3", x, y);
                    }

                }
                else {

                    if ($("box4").style.display != "none") {
                        return;
                    }
                    else {
                        if ($("box3").style.display != "none") {
                            closediv("box3");
                        }
                        if ($("box2").style.display != "none") {
                            closediv("box2");
                        }
                        opendiv("box4", x, y);
                    }

                }
            });
        }
       
      }
      function opendiv(id, x, y) {
          var scrollPos;
          if (typeof window.pageYOffset != 'undefined') {
              scrollPos = window.pageYOffset;
          }
          else if (typeof document.compatMode != 'undefined' &&
document.compatMode != 'BackCompat') {
              scrollPos = document.documentElement.scrollTop;
          }
          else if (typeof document.body != 'undefined') {
              scrollPos = document.body.scrollTop;
          }
         
          $(id).style.left=x+'px';
          $(id).style.top=y+'px';
          $(id).style.left = (window.screen.availWidth - 360) / 2 + 'px';
          $(id).style.top = scrollPos + 100 + 'px';
          $(id).style.display = '';
      }
    function closediv(id) {
      $(id).style.display = "none";
  }
  /* ���������������*/
  function sencSearch() {
      var key2 = $("key1").value;
      var ref_string = get_url("key1");
      var pagenum = get_url("page");
      var turl = "";
      var curl = window.location.href;
      var refstr = ref_string + ' ' + key2;
      if (typeof ref_string == undefined || typeof ref_string == "undefined" || ref_string == null) {
          window.location.href = curl;
      }
      else {

          turl = curl.replace(escape(ref_string),escape(refstr));

          if (typeof pagenum == undefined || typeof pagenum == "undefined" || pagenum == null) {
              window.location.href = turl;
          }
          else {
              var pg = 'page', pindex = 1;
              turl = turl.replace(new RegExp('(.+' + pg + '=)[\\w\\|]*(.+)?'), '$1' + pindex + '$2');
              window.location.href = turl;
          }

         
      }
  }
  /*��ȡurl����*/
  function get_url(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
  } 



 /*
    ���������õ���js
    */
    var isResult = true;
    var searkey = '<%=kvalue%>';
    function clearHistory() {
        $("HistoryList").innerHTML = "<p>�������...</p>";
        getajax('#/common/llajax.asp?act=cls');
        $("HistoryList").innerHTML = "<p>���������¼!</p>";
    }
    function istrue(zt) {
        if (!isResult) {
            $("resultsMsg").innerHTML = "<b>��л����֧�֣�һ������ֻ���ύһ�ε���!</b><br><a href='javascript:void(0);' class='box_qx' onclick=hidediv('resultsMsg')></a>";
            showMsgDiv(zt);
            return;
        }
        else {
            $("resultsMsg").innerHTML = "<b>��л������������ķ���!</b><br><a href='javascript:void(0);' class='box_qx' onclick=hidediv('resultsMsg')></a>";
            showMsgDiv(zt);
        }
        isResult = false;
    }
    function isfalse(zt) {
        if (!isResult) {
            $("resultsMsg").innerHTML = "<b>��л����֧�֣�һ������ֻ���ύһ�ε���!</b><br><a href='javascript:void(0);' class='box_qx' onclick=hidediv('resultsMsg')></a>";
            showMsgDiv(zt);
        }
        else {
            showMsgDiv(zt);
        }
     isResult = false;
 }
 function showMsgDiv(e) {
     var w = 100;
     var x = e.offsetLeft - 15;
     var y = e.offsetTop + 20;
     while (e = e.offsetParent) {
         x += e.offsetLeft;
         y += e.offsetTop;
     }
     showdiv("resultsMsg", x, y, w);
 }
    function msgsubmit() {
        if (!isResult) { $("resultsMsg").innerHTML = "<b>��л����֧�֣�һ������ֻ���ύһ�ε���!</b><br><a href='javascript:void(0);' class='box_qx' onclick=hidediv('resultsMsg')></a>"; return; }
        if ($("resultmsg").value == "����ʲô�뷨������ӭ���������ǡ����ǻ����濼����������ͽ��飬���������ø��ã�лл��")
            $("resultmsg").value =="";
        getajax("/search/searchResultFeedback.asp?act=f&result=0&resultnum=<%=toltalcount %>&resultmsg=' + escape($('resultmsg').value) + '&key=" + escape(searkey), "resultsMsg");
        isResult = false;

    }

