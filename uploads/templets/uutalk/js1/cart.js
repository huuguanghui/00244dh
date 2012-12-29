var afterLoginUrl = "";
var delCartFormMin = false;

var LoginUserName = "";

Date.prototype.pattern=function(fmt) {     
    var o = {     
    "M+" : this. getMonth()+1, //月份     
    "d+" : this. getDate(), //日     
    "h+" : this. getHours()%12 == 0 ? 12 : this. getHours()%12, //小时     
    "H+" : this. getHours(), //小时     
    "m+" : this. getMinutes(), //分     
    "s+" : this. getSeconds(), //秒     
    "q+" : Math.floor((this. getMonth()+3)/3), //季度     
    "S" : this. getMilliseconds() //毫秒     
    };     
    var week = {     
    "0" : "\u65e5",     
    "1" : "\u4e00",     
    "2" : "\u4e8c",     
    "3" : "\u4e09",     
    "4" : "\u56db",     
    "5" : "\u4e94",     
    "6" : "\u516d"    
    };     
    if(/(y+)/.test(fmt)){     
        fmt=fmt.replace(RegExp.$1, (this. getFullYear()+"").substr(4 - RegExp.$1.length));     
    }     
    if(/(E+)/.test(fmt)){     
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);     
    }     
    for(var k in o){     
        if(new RegExp("("+ k +")").test(fmt)){     
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));     
        }     
    }     
    return fmt;     
}   


//\/Date(1269584259000+0800)\/ json 日期转换成标准日期格式
function Json2Date(json)
{
 var re = /-?\d+/; 
 var m = re.exec(json);

 var date = new Date(parseInt(m[0])); user.RU_TIME0 = Convert.ToDateTime(ds.Tables[0].Rows[0]["RU_TIME0"].ToString());
 return date.pattern("yyyy-MM-dd HH:mm:ss");

}







var imgname = new Array();
var img = new Array();
imgname[0] = "http://shop.alicall.com/images/mir_dl_anniu.gif";
imgname[1] = "http://shop.alicall.com/images/mir_tips.gif";
imgname[2] = "http://shop.alicall.com/images/bg_dl_menu_top.gif";
imgname[3] = "http://shop.alicall.com/images/logo_login_bt_03.gif";
for (i = 0; i <= imgname.length - 1; i++) {
    img[i] = new Image();
    img[i].src = imgname[i];
}





function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return arr[2]; return null;

}



function GetUrlFileName(url) {

  var file=url.substring(url.lastIndexOf("/")+1).toLowerCase();
  return file;
}


function goumai(id) {
    window.location.href = "/initCart.aspx?pid=" + id;
    return false;
}


function xiangxi(id) {
    window.location.href = "/prod/" + id;
    return false;  
}

///获取url参数
function GetUrlParam(param)
{ 
	var url = location.href; 
	var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
	var paraObj = {} 
	for (i=0; j=paraString[i]; i++)
	{ 
		paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
	} 
	var returnValue = paraObj[param.toLowerCase()]; 
	if(typeof(returnValue)=="undefined")
	{ 
		return ""; 
	}
	else
	{ 
		return returnValue; 
	} 
} 






var copy2Clipboard=function(txt){
if(window.clipboardData){window.clipboardData.clearData();window.clipboardData.setData("Text",txt);}else if(navigator.userAgent.indexOf("Opera")!=-1){window.location=txt;}else if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}catch(e){alert("您的firefox安全限制限制您进行剪贴板操作，请打开’about:config’将signed.applets.codebase_principal_support’设置为true’之后重试，相对路径为firefox根目录/greprefs/all.js");return false;}
var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);if(!clip)
return;var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);if(!trans)
return;trans.addDataFlavor('text/unicode');var str=new Object();var len=new Object();var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);var copytext=txt;str.data=copytext;trans.setTransferData("text/unicode",str,copytext.length*2);var clipid=Components.interfaces.nsIClipboard;if(!clip)
return false;clip.setData(trans,null,clipid.kGlobalClipboard);
}
}



function updateAmount(mode)
{
   var amountInput=document.getElementById("Amount");
   var store=parseInt($("#ctl00_ContentPlaceHolder1_ltlStore").text());
   var amount=amountInput.value;
   if(mode=="down")
   {
      amount--;
      if(amount>0)
      {
         amountInput.value=amount;
      }
   }
   else
   {
      amount++;
      if(amount>store)
      {
          alert("购买数量不能大于库存");
          return false;
      }
      amountInput.value=amount;
   }
   return false;
}


function ChkAmount()
{
   var amountInput=document.getElementById("Amount");
   var store=parseInt($("#ctl00_ContentPlaceHolder1_ltlStore").text());
   var reg=/^\d+$/gi;
   if(!reg.test(amountInput.value))
   {
     alert("请正确填写购买数量");
     return false ;
   }
   
   var amount=parseInt(amountInput.value);
   if(amount>store)
   {
      alert("购买数量不能大于库存");
      return false ;
   }
   
   return true;
   
}



function getRadioChecked(name)
{
     var payMethodVal="notChecked";
		   $("input[name='"+name+"']").each(function(i){
													     if($(this).attr("checked")==true)
													        payMethodVal= $(this).val();
													  });
		   return payMethodVal;
}

function selectTag(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("tags").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
}



function tips1(id,text)
{ 

       var offset=$("#"+id).offset();
       var left=offset.left;
       var top=offset.top;

	var str="";
	str+="<div id=\"popHint\">";
	str+="<div id=\"popHeader\">"
	str+="<div class=\"popLeft\"></div>"
	str+="<div id=\"popHintText\">"+text+"</div>"
	str+="<div class=\"popRight\"></div>"
	str+="</div>"
	str+="<div class=\"popAngle\"><span></span></div>"
	str+="</div>"
	$("body").prepend(str);
	$("#popHint").css({"left":left-10,"top":top-25});
	//setTimeout("$('#popHint').remove()",2000);
	$("body").mousedown(function(){
							      $('#popHint').remove();
							   });
	 $(window).scroll(function(){
							     $('#popHint').remove();
							  });
}


function tips(text,left,top)
{ 
	var str="";
	str+="<div id=\"popHint\">";
	str+="<div id=\"popHeader\">"
	str+="<div class=\"popLeft\"></div>"
	str+="<div id=\"popHintText\">"+text+"</div>"
	str+="<div class=\"popRight\"></div>"
	str+="</div>"
	str+="<div class=\"popAngle\"><span></span></div>"
	str+="</div>"
	$("body").prepend(str);
	$("#popHint").css({"left":left-10,"top":top-25});
	//setTimeout("$('#popHint').remove()",2000);
	$("body").mousedown(function(){
							      $('#popHint').remove();
							   });
	 $(window).scroll(function(){
							     $('#popHint').remove();
							  });
}



$(function() {

    var ali = new ailcall_ailen();
    ali.loadUserInfo();

    $(".needCheckLogin").click(function() {

        if (!ali.checkLogin()) {
            var url = $(this).attr("href");
            if (url != "" && url != undefined) {
                afterLoginUrl = url;
            }

            ali.showLoginDialog();
            return false;
        }
    });


    $(".hoverChangeColor").hover(function() {
    $(this).css("border", "#099DD1 solid 1px");

    },
												  function() {
												      $(this).css("border", "1px solid #F4F4F4 ");
												  });

    for (var ii = 0; ii < document.links.length; ii++)
        document.links[ii].onfocus = function() {
            this.blur()
        }

    $(".hoverChange").hover(function() {
        var hoverOver = $(this).attr("hoverOver");
        var hoverOut = $(this).attr("hoverOut");
        $(this).addClass(hoverOver).removeClass(hoverOut);
    },
								function() {
								    var hoverOver = $(this).attr("hoverOver");
								    var hoverOut = $(this).attr("hoverOut");
								    $(this).addClass(hoverOut).removeClass(hoverOver);
								});


    $(".vip_tips .vip_tips_br").click(function() {
        $(this).closest(".vip_tips").hide();
    });



    $("#vvip").mouseover(function() {
        $(this).text("升级VIP");
    }).mouseout(function() {
        $(this).text("充值U币");
    });
})






function loadDirectPay()
{    
     var selClass, pid;
	 var url="DirectPayInfo.xml";
	 var str="<ul>";
	 var currPath=window.location.pathname;
	 if(currPath.indexOf("Charge.aspx")!=-1)
	 {
		selClass="SelectCategory"; 
		pid=GetUrlParam("pid");
	 }	 
	 $.get(url,function(data){
						    $("card",data).each(function(i){
														       var id=$("id",this).text();
															   str+="<li><a href=\"Charge.aspx?pid="+id+"\" class=\"";
															   if(id==pid)
															   {
																   str+=selClass;
															   }
															   str+="\">";
															   str+=$("title",this).text();
															   str+="</a></li>"; 
														 });
							str+="</ul>";
							$(".women .bd").html(str);
						});

	
}

function indexUpdateCart(obj)   //删除购物车中商品后后更新数据
{
	var o=$(obj);
	var $p=o.closest("p.delCart");
	var num=parseInt($(".zgr_prodNum",$p).text());
	var price=parseFloat($p.children(".zgr_prodPrice").text());
	var AllNum=parseInt($("#ProdNum").text());
	var AllPrice=parseFloat($("#ProdPrice").text());
	$("#prodAmount").text(AllNum-num);
	$("#ProdNum").text(AllNum-num);
	$("#ProdPrice").text((AllPrice-price*num).toFixed(2));
	o.closest("p.delCart").remove();
	
}

function down()
{
       var $cartOffset= $("#shopping").offset();
	   var top=$cartOffset.top+28;
	   var left=$cartOffset.left; 	
	   var obj=$(".zgr_list_box");
	   obj.css("top",top);
	   obj.css("left",left);
	   $(".zgr_list_box").slideDown(200);
}

function up()
{
	$(".zgr_list_box").slideUp(200);
}

var successLoad=function(data){
	          
	          if($(".zgr_list_box").length>0)
			  {
				  $(".zgr_list_box").remove();
			  }
			  
              $("#prodAmount").text(data.ProdAmount);
	          var str="<div class=\"zgr_list_box\">"
			  if(data.ProdAmount!=0)
			  {
			     $.each(data.cart,function(i,Item){
			     str += "<p class=\"delCart\"><a target=\"_blank\" href=\"/prod/" + Item.prodId + "\" value=\"" + Item.cartId + "\" class=\"zgr_b\">" + Item.prodName + "</a>&nbsp;&nbsp;&nbsp;&nbsp;￥<span class=\"zgr_prodPrice\">" + Item.price + "</span>&nbsp;×&nbsp;<span class=\"zgr_prodNum\">" + Item.number + "</span>&nbsp;&nbsp;<a class=\"zgr_d\" href=\"#\" val=\"" + Item.cartId + "\">删除</a></p>";
											
										})
			  }
			  else
			  {
				  str+="<p class=\"delCart\">您的购物车中暂无商品！</p>";
			  }
			  
			  str+="<div class=\"zgr_zj\">共<span id=\"ProdNum\">"+data.ProdAmount+"</span>件商品，总金额：￥<span id=\"ProdPrice\">"+data.sumPrice.toFixed(2)+"</span></div>";
              str+="<div class=\"zgr_settlement\"><a href=\"/shoppingCart.aspx\"><img src=\"/images/settlement.gif\" /></a></div></div>" 
			  
			  $("body").append(str);
			  
			  var downHandle=0,upHandle=0;	
			  $("#showList").mouseover(function(event){   
											      clearTimeout(upHandle);
												  downHandle=setTimeout("down()",200);	
											   }).mouseout(function(event){
											     clearTimeout(downHandle);
												 upHandle=setTimeout("up()",200);
											  });
	 	
			  $(".zgr_list_box").live("mouseover",function(){
											      clearTimeout(upHandle) ;
												  clearTimeout(downHandle) ;
											   });
			  
			  $(".zgr_list_box").mouseout(function(event){upHandle=setTimeout("up()",50);});
			  
			  $(".zgr_d").click(function(){

			                                         delCartFormMin=true;
												     var cid=$(this).attr("val");
													 $.post("/command/delShoppingCart.ashx",{cid:cid});
													 
													 indexUpdateCart(this);
													 
													 var fileName=window.location.pathname;
													 var file=fileName.substring(fileName.lastIndexOf("/")+1).toLowerCase();
													 if(file=="shoppingcart.aspx")
													 {
													    delShoppingCart(cid);
													 }
												       
												  });
			  
	  
	}
	

var ailcall_ailen=function(){}

ailcall_ailen.prototype = {
    createCover: function() {
        var html = "<div style=\"Z-INDEX: 999; POSITION: absolute;  BACKGROUND: #cccccc;  TOP: 0px; LEFT: 0px\" id=\"cover_div\"></div>"
        $("body").append(html);
        var width = this.getBodySize()[0];
        var height = this.getBodySize()[1];
        $("#cover_div").css("opacity", "0.6");
        $("#cover_div").css("width", width);
        $("#cover_div").css("height", height);
    },
    checkLogin: function() {
        var successLogin = false;
        $.ajax({ type: 'POST',
            url: '/command/checklogin.ashx',
            success: function(data) {
                if (data != "$$false")
                    successLogin = true;
                LoginUserName = data;
            },
            async: false
        });

        //if (getCookie("Name") != null) {
        //  successLogin = true;
        //}
        return successLogin;
    },
    createPop: function() {
        var str = "";
        str += "<div class=\"zgr_dl_login\"  id=\"loginDialog\"  style=\"z-index:999;position:absolute;\">";
        str += "<div class=\"zgr_dl_login_bt\">"
        str += "<div class=\"zgr_dl_login_bt_name\"><div class=\"zgr_dl_login_logo\"></div>用户登录"
        str += "</div>"
        str += "<div class=\"zgr_dl_login_bt_close\">"
        str += "<a onmouseover=\"MM_swapImage('DialogClose','','/images/mir_dl_guanbi02.gif',1)\" onmouseout=\"MM_swapImgRestore()\" href=\"http://localhost:3934/Web/default.aspx#\">"
        str += "<img id=\"DialogClose\" border=\"0\" name=\"DialogClose\" src=\"/images/mir_dl_guanbi01.gif\" width=\"22\" height=\"22\"  /></a>"
        str += "</div>"
        str += "</div>"
        str += "<div class=\"zgr_dl_login_box\">"
        str += "<div class=\"zgr_dl_login_box2\">"
        str += "<span class=\"zgr_dl_login_t01\">用户名：</span>"
        str += "<input onblur=\"this.style.border='1px solid #a9E3F8'\"  tabindex=\"11\" onfocus=\"this.style.border='1px solid #0EB1ED'\" style=\"BORDER-BOTTOM: #a9e3f8 1px solid; BORDER-LEFT: #a9e3f8 1px solid; BORDER-TOP: #a9e3f8 1px solid; BORDER-RIGHT: #a9e3f8 1px solid\" id=\"username\" name=\"username\" value=\"\" />"
        str += "<span class=\"zgr_dl_login_forget\"><a href=\"http://www.alicall.com/register.htm\">注册新用户</a></span>"
        str += "</div>"
        str += "<div style=\"HEIGHT: 18px\">"
        str += "</div>"
        str += "<div class=\"zgr_dl_login_box3\">"
        str += "<span class=\"zgr_dl_login_t01\">密&nbsp;&nbsp;&nbsp;码：</span>"
        str += "<input  tabindex=\"12\" onblur=\"this.style.border='1px solid #a9E3F8'\" id=\"password\" onfocus=\"this.style.border='1px solid #0EB1ED'\" type=\"password\" name=\"password\"  />"
        str += "<span class=\"zgr_dl_login_forget\"><a href=\"http://www.alicall.com/forget.htm\">忘记密码？</a></span>"
        str += "</div>"
        str += "<div class=\"zgr_dl_login_s\">"
        str += "<div class=\"zgr_dl_login_s2\" align=\"left\">"
        str += "<input id=\"loginStatus\"  tabindex=\"13\" class=\"zgr_dl_login_s0\" type=\"checkbox\" name=\"loginStatus\" value=\"1\" />"
        str += "</div>"
        str += "<label for=\"loginStatus\">"
        str += "<div class=\"zgr_dl_login_s3\">"

        str += "<span class=\"zgr_dl_login_t03\">记住登陆状态</span>"

        str += "</div>"
        str += "</label>"
        str += "</div>"
        str += "<div id=\"zgr_loading\">&nbsp;"
        str += "</div>"
        str += "<div class=\"zgr_dl_login_b0\" >"
        str += "<input type=\"submit\" class=\"zgr_dl_l_button01\" onmouseout=\"this.className='zgr_dl_l_button01'\" onmouseover=\"this.className='zgr_dl_l_button01_hover'\"   id=\"submitLogin\" tabindex=\"14\"  value=\"登&nbsp;&nbsp;录\" >&nbsp;&nbsp;<input type=\"submit\" id=\"cancelLogin\"  onmouseout=\"this.className='zgr_dl_l_button01'\" onmouseover=\"this.className='zgr_dl_l_button01_hover'\"   tabindex=\"15\"  class=\"zgr_dl_l_button01\" value=\"取&nbsp;&nbsp;消\" >"
        str += "<div class=\"c\"></div>"
        str += "</div>"
        str += "</div>"
        str += "</div>"

        $("body").append(str);
        var $login = $("#loginDialog");
        this.toCenter($login);
        $(window).scroll(function() {
            var top = (document.documentElement.scrollTop + (document.documentElement.clientHeight - document.getElementById("loginDialog").offsetHeight) / 2) + "px";
            $login.css("top", top);
        });


        $("#loginDialog #username").focus();

        $(window).resize(function() {

        });

        $("#submitLogin").click(function() {
            var ali = new ailcall_ailen();
            ali.submitLogin();
            return false;
        });
        $("#password").keypress(function(event) {
            if (event.keyCode == 13) {
                var ali = new ailcall_ailen();
                ali.submitLogin();
                return false;
            }
        });
        $("#DialogClose,#cancelLogin").click(function() {

            var ali = new ailcall_ailen();
            ali.clearLoginDialog();
            return false;
        });

    },
    getBodySize: function() {
        var bodySize = [];
        with (document.documentElement) {
            bodySize[0] = (scrollWidth > clientWidth) ? scrollWidth : clientWidth;
            bodySize[1] = (scrollHeight > clientHeight) ? scrollHeight : clientHeight;
        }
        return bodySize;
    },
    clearLoginDialog: function() {
        this.clearDiv($("#loginDialog"));
        this.clearDiv($("#cover_div"));
        $(window).unbind("scroll");
        return false;
    },
    clearDiv: function(obj) {
        $(obj).remove();
    },
    submitLogin: function() {

        var username = $("#loginDialog #username").val();
        var password = $("#loginDialog #password").val();
        var loginStatus = $("#loginDialog #loginStatus:checked").val();

        if (username == "") {
            //alert("用户名不能为空");
            var $userInput = $("#loginDialog #username");
            var offset = $userInput.offset();
            tips("请输入用户名", offset.left, offset.top);
            $userInput.focus();
            return false;
        }
        else {
            $("#usernametext").text("");
        }

        if (password == "") {
            var $passInput = $("#loginDialog #password");
            var passOffset = $passInput.offset();
            tips("请输入密码", passOffset.left, passOffset.top);
            $("#loginDialog #password").focus();
            return false;
        }
        else {
            $("#passwordtext").text("");
        }

        $.post("/command/login.ashx",
				  { username: username, password: password, loginStatus: loginStatus },
				  function(data) {
				      var ali = new ailcall_ailen();
				      if (ali.submitLoginCallBack(data)) {
				          ali.loadUserInfo();
				          if (afterLoginUrl != "" && afterLoginUrl.toLowerCase().indexOf("userlogin.aspx") == -1) {
				              window.location.href = afterLoginUrl;
				          }
				      }
				  });
        $("#zgr_loading").html("正在登录...");

    },
    submitLoginCallBack: function(data) {
        if (data == "1") {
            //$("#zgr_loading").html("<span style=\"color:red\">登录成功！</span>");
            setTimeout("var ali=new ailcall_ailen();ali.clearLoginDialog()", 10);
            return true;
        }
        else {
            $("#zgr_loading").html("<span style=\"color:red\">用户名或密码错误！</span>");
            return false;
        }
    },
    showLoginDialog: function() {
        this.createCover();
        this.createPop();
    },
    loadUserInfo: function() {
        var url = window.location.href;
        //var len = $(".zgr_top_box .zgr_box02 .userInfo").children.length;
        $(".zgr_top_box .zgr_box02 .userInfo").children(":not(.zgr_menub,:last)").remove();

        if (this.checkLogin())///顶部用户登录信息加载
        {
            var str = "欢迎<span class=\"name_yh\"><a href=\"/userCenter.aspx\">" + LoginUserName;
            str += "</a></span>登陆阿里通商城！<span class=\"tc\"><a href=\"/loginOut.aspx?url=" + url + "\">[ 退出 ]</a></span>";
            $(".zgr_box01").html("").prepend(str);

            var str = "<div class=\"zgr_menub2\"  style=\"position:relative; z-index:20;\">";
            str += "<div id=\"account_c\"></div>";
            str += "<div class=\"zgr_menub_img_yhzx\"><img src=\"/images/center.gif\" width=\"17\" height=\"14\" /></div><span id=\"account_c_span\"><a href=\"/UserCenter.aspx\">我的帐户</a></span>";
            str += "<div id=\"index_user\">";
            str += "<div id=\"index_user_con\">";
            str += "<div id=\"account_c_new\"></div>";
            str += "<span id=\"new_myaccount\"><a href=\"/UserCenter.aspx\" rel=\"nofollow\">我的帐户</a> </span>";
            str += "<div class=\"clear\"></div>";
            str += "<ul>";
            str += "<li><a href=\"/userCenter.aspx?url=userhome/OrderList.aspx\" rel=\"nofollow\">我的订单</a></li>";
            str += "<li><a href=\"/userCenter.aspx?url=userhome/jifen.aspx\" rel=\"nofollow\">我的积分</a></li>";
            str += "<li><a href=\"/userCenter.aspx?url=userhome/mybalance.aspx\" rel=\"nofollow\">U币余额</a></li>";
            str += "</ul></div>";
            str += "<div style=\"width:96px; height:3px; background:url(/images/center_box_bottom.jpg) no-repeat\"></div>";
            str += "</div></div>";

            $(".zgr_box02 .userInfo").prepend(str);


            $("#account_c_span").mouseover(function() {
                $("#index_user").css("display", "block");
            });

            $("#index_user").mouseover(function() {
                $(this).css("display", "block")
            })
                   .mouseout(function() {
                       $("#index_user").css("display", "none");
                   });

            this.loadCart();
        }
        else {

            var str = "<div class=\"zgr_menub_dl\"><div class=\"zgr_menub_img_dl\"><img src=\"/images/enter.gif\" /></div><span><a href=\"/UserLogin.aspx\" class=\"needCheckLogin\">登录</a></span></div>";
            str += "<div class=\"zgr_menub_zc\"><div class=\"zgr_menub_img_zc\"><img src=\"/images/zhuce.gif\" /></div><span><a target=\"_blank\" href=\"http://www.alicall.com/register.htm\">注册</a></span></div>";

            $(".zgr_box02 .userInfo").prepend(str);

        }
    },
    loadCart: function() {
        $.post("/command/getCartInfo.ashx", {}, function(data, textStuts) { successLoad(data); }, "json")
    },
    toCenter: function(obj) {
        var $login = $(obj);
        var height = $login.height();
        var width = $login.width();
        var $body = $("body");
        var clientWidth = $body.width();
        var clientHeight = $body.height();
        var clientHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft;
        var left = scrollLeft + (clientWidth - width) / 2 + "px";
        var top = parseInt(scrollTop + (clientHeight - height) / 2) + "px";
        $login.css({ "left": left, "top": top });
    }


}

