function Ali(id){if(typeof(id)=="string"){return document.getElementById(id);}return id;}

var curr="aid11"
function selectaid(str)
{
document.getElementById(curr).name="aid";
document.getElementById(str).name="said";
curr=str;
}
function countprice(val,type){ 
if (type==1){
if(val==2 || val==27 || val==59 || val==57 || val==58 || val==56){ 
Ali("paytype").options.length = 0; 
Ali("paytype").options.add(new Option("请选择充值方式", 0));
Ali("paytype").options.add(new Option("直冲到本账号", 2));
Ali("paytype").options.add(new Option("提取卡密手工充值", 1));
Ali("paytype").disabled='';
Ali("paytype").style.display='';
var sObj = document.getElementById("paytype");
sObj.options[0].selected = true;
Ali("num").style.left='-30px';
if(Sys.ie==6.0){Ali("jiage").style.marginLeft='150px';}
}
else if(val==7 || val==29 || val==30 || val==31 || val==32 || val==33 || val==34 || val==36 || val==37 || val==38 || val==39){
Ali("paytype").options.length = 0; 
Ali("paytype").options.add(new Option("提取卡密直接登陆", 1));

/*var varItem = new Option("提取卡密直接登陆", 1);
Ali("paytype").options.add(varItem);
Ali("paytype").disabled='disabled';
var sObj = document.getElementById("paytype");
sObj.options[3].selected = true;
Ali("paytype").options.remove(3);*/

Ali("paytype").style.display='';
Ali("num").style.left='-30px';
if(Sys.ie==6.0){Ali("jiage").style.marginLeft='150px';} 
}else{
Ali("paytype").options.length = 0; 
Ali("paytype").options.add(new Option("国内城市免费快递", 1));
Ali("paytype").style.display='';
Ali("num").style.left='-30px';
if(Sys.ie==6.0){Ali("jiage").style.marginLeft='150px';}
}	
} 
//alert(val);
var zs=document.getElementById("num").value;
 
if(zs<1){
document.all.totalprice.innerText=""; 
//document.all.totalprice1.innerText="总价："; 
document.all.totalprice2.innerText=""; 
document.getElementById("jiage").style.display="none";
//chargeForm.num.focus();
return false;
}
 
 
var price=0; 
 
var a=document.getElementsByName("price") 
for(var i=0;i<=a.length-1;i++){ 
if(a[i].checked){price=a[i].value; }
}

if (price!=0){ 
tmp_value=zs*price;
 
document.getElementById("totalprice").innerText=tmp_value; 
document.getElementById("totalprice2").innerText="元"; 
 
 
document.getElementById("totalprice").textContent=tmp_value; 
document.getElementById("totalprice2").textContent="元"; 
  
document.getElementById("jiage").style.display="";}


}
 

 
function CheckForm(){
if (CheckForm1()){ 
document.getElementById("Image4").disabled="true"; 
document.chargeForm.action="/ceshi.php";Ali("filetype").value="ceshi.php";
document.chargeForm.submit();}
}
 
function CheckRadio(name)
{
var radios=document.getElementsByName("price");
for(var i=0;i<radios.length;i++)
{
if(radios[i].checked==true)
{
return true;
}
}
return false;
}
 
function CheckForm1(){ 
 
if(!CheckRadio("price"))
{
alert("请在第1步中选择您需要购买的商品");
return false;
}
 
 
 
//alert(Ali("paytype").style.display!='none')
 
/*if(Ali("paytype").style.display!='none'&&Ali("paytype").value==0){
alert('请您在第2步中选择充值方式');
Ali("paytype").focus();
return false;
}*/
 
if(document.getElementById("num").value==0){
alert('请您在第2步中选择要购买商品的数量');
document.getElementById("num").focus();
return false;
}
 
var a = document.getElementsByName("pay");
var payMode=false;
var payModeId;
for (var i=0; i<a.length; i++){
if(a[i].checked){
payMode=true;
payModeId=a[i].id;}
} 
if(payMode==false){
alert("请您在第3步中选择支付方式");
return false;}
else{

return true;
}
 
}
 
function select(form){
form.price.select
return true;
}
 
function sz(){ 
document.getElementById("szss").style.display = "none";
document.getElementById("sz2").innerText="支付宝为中国领先的专业在线支付平台，安全快捷，支持支付宝即时到帐交易与网上银行转账两种支付方式。 "; 
document.getElementById("sz3").innerText="阿里通推荐使用支付宝支付！";
document.getElementById("sz2").textContent="支付宝为中国领先的专业在线支付平台，安全快捷，支持支付宝即时到帐交易与网上银行转账两种支付方式。 "; 
document.getElementById("sz3").textContent="阿里通推荐使用支付宝支付！";
document.getElementById("sz3").color="#cc0000";
return true;
}
function sz1(){
document.getElementById("szss").style.display = "none";
document.getElementById("sz2").innerText="您的银行卡如开通了网上支付功能，即可进行网上银行转账支付，支持国内十五家主要银联成员银行，方便安全。"; 
document.getElementById("sz3").innerText="中国银联网上银行支付服务由环迅支付IPS合作提供。";
document.getElementById("sz2").textContent="您的银行卡如开通了网上支付功能，即可进行网上银行转账支付，支持国内十五家主要银联成员银行，方便安全。";
document.getElementById("sz3").textContent="中国银联网上银行支付服务由环迅支付IPS合作提供。";
document.getElementById("sz3").color="#0";
return true;
}
function sz2(){ 
document.getElementById("szss").style.display = "none";
document.getElementById("sz2").innerText="只支持50/100/300/500面值的标准神州行卡（卡号17位，密码18位），请勿使用其他地方卡，一次支付只限购买一件。"; 
document.getElementById("sz3").innerText="充值前请仔细确认神州行卡面额与支付金额一致！如使用金额不一致的卡充值所造成任何损失，本公司不承担任何责任。";
document.getElementById("sz2").textContent="只支持50/100/300/500面值的全国通用的标准神州行卡（卡号17位，密码18位），请勿使用其他地方卡，一次支付只限购买一件。";
document.getElementById("sz3").textContent="充值前请仔细确认神州行卡面额与支付金额一致！如使用金额不一致的卡充值所造成任何损失，本公司不承担任何责任。";
document.getElementById("sz3").color="#0";
return true;
}
function sz3(){
window.location.href="unicompay/"; 
return true;
}
 
function sz8(){
window.location.href="gamepay/"; 
return true;
}
 
function sz4(){ 
document.getElementById("szss").style.display = "none";
document.getElementById("sz2").innerText="骏网一卡通是骏网全力打造的面向各类数字产品的通用充值卡，其特点是“一卡认证，全国消费”。"; 
document.getElementById("sz3").innerText="提供通用的平台，让数字产品以总优化的方式送到消费者面前。";
document.getElementById("sz2").textContent="骏网一卡通是骏网全力打造的面向各类数字产品的通用充值卡，其特点是“一卡认证，全国消费”。"; 
document.getElementById("sz3").textContent="提供通用的平台，让数字产品以总优化的方式送到消费者面前。";
document.getElementById("sz3").color="#cc0000";
window.location.href = "http://www.jcard.cn/Fetch/UCardFetchCard.aspx?category=ABHRDKBLTV&product=ABHRDKBLTV001AV"; 
}
 
function sz6(){ 
document.getElementById("szss").style.display = "none";
document.getElementById("sz2").innerText="财付通是腾讯公司创办的中国领先的在线支付平台，致力于为互联网用户和企业提供安全、便捷、专业的在线支付服务。"; 
document.getElementById("sz3").innerText="支持国内多家银行的在线支付，以及财富通帐户和Q币支付。";
document.getElementById("sz2").textContent="财付通是腾讯公司创办的中国领先的在线支付平台，致力于为互联网用户和企业提供安全、便捷、专业的在线支付服务。"; 
document.getElementById("sz3").textContent="支持国内多家银行的在线支付，以及财富通帐户和Q币支付。";
document.getElementById("sz3").color="#cc0000";
return true;
}
 
function sz7(){
document.getElementById("szss").style.display = "none";
document.getElementById("sz2").innerText="全国用户均可通过固话或小灵通拨、手机等充值。"; 
document.getElementById("sz3").innerText="广东 16885668、湖南 16880400、河南 9600133、辽宁 96179000 ......"
document.getElementById("sz2").textContent="全国用户均可通过固话或小灵通拨、手机等充值。"; 
document.getElementById("sz3").textContent="广东 16885668、湖南 16880400、河南 9600133、辽宁 96179000 ......"
document.getElementById("sz3").color="#cc0000";
window.location.href="buyonphone.htm";
}
 
function ShowText(){
if(Ali("paytype").value==1){
Ali("sz2").innerText="在线支付时需于本网站登录阿里通用户，完成支付后可在个人帐户管理中，查询购买记录得到充值卡卡号密码信息。"; 
Ali("sz3").innerText="提示支付成功以后，如果未能及时获取卡密信息，请与客服热线80000联系。"}
else if(Ali("paytype").value==2){
Ali("sz2").innerText="在线支付时需于本网站登录阿里通用户，完成支付后可在个人帐户管理中，查询充值记录信息。"; 
Ali("sz3").innerText="提示支付成功以后，账户余额实时增加，方便快捷。"}
}
 
var Sys = {};
var ua = navigator.userAgent.toLowerCase();
if (window.ActiveXObject)
Sys.ie = ua.match(/msie ([\d.]+)/)[1]
else if (document.getBoxObjectFor)
Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1]
else if (window.MessageEvent && !document.getBoxObjectFor)
Sys.chrome = ua.match(/chrome\/([\d.]+)/)[1]
else if (window.opera)
Sys.opera = ua.match(/opera.([\d.]+)/)[1]
else if (window.openDatabase)
Sys.safari = ua.match(/version\/([\d.]+)/)[1];
 
var menu='1';
function m1(str){ 
document.getElementById("b"+menu).style.display='none';
document.getElementById("b"+str).style.display='';
document.getElementById("f"+menu).style.background='url(/templets/default/css1/Img/f2bg.gif) no-repeat';
document.getElementById("f"+str).style.background='url(/templets/default/css1/Img/f1bg.gif) no-repeat';
menu=str;
if (str==1){document.getElementById("ts").innerText="标准卡支持中国及国际长途、收发短信、直拨、手机版等阿里通所有功能，有效期为充值后360天；短信0.1元/条，折后每分钟/每条短信最低至6分3。"; 
document.getElementById("ts").textContent="标准卡支持中国及国际长途、收发短信、直拨、手机版等阿里通所有功能，有效期为充值后360天；短信0.1元/条，折后每分钟/每条短信最低至6分3。"; 
document.getElementById("ts").color="#ff0000";}
else if (str==6){document.getElementById("ts").innerText="手机轻松拨打接入号，更加方便的在手机上使用阿里通。随时随地，畅所欲言！！";
document.getElementById("ts").textContent="手机轻松拨打接入号，更加方便的在手机上使用阿里通。随时随地，畅所欲言！！ "; 
document.getElementById("ts").color="#ff0000";}
else if (str==2){document.getElementById("ts").innerText="包月卡只能拨打中国大陆,不能拨打国际,不能收发短信和回拨,支持PC版/安卓版直拨/iphone版直拨.此卡为账号卡,不能用来充值.月卡有效期30天,季卡90天,年卡360天.国际包月请选择国际包月套餐.";
document.getElementById("ts").textContent="包月卡只能拨打中国大陆,不能拨打国际,不能收发短信和回拨,支持PC版/安卓版直拨/iphone版直拨.此卡为账号卡,不能用来充值.月卡有效期30天,季卡90天,年卡360天.国际包月请选择国际包月套餐."; 
document.getElementById("ts").color="#ff0000";}
else if (str==7){document.getElementById("ts").innerText="阿里通超值套餐“买话费送设备”，国内城市免运费（不含乡镇），限量出售。";
document.getElementById("ts").textContent="阿里通超值套餐“买话费送设备”，国内城市免运费（不含乡镇），限量出售。 ";
document.getElementById("ts").color="#ff0000";}
else if (str==3){document.getElementById("ts").innerText="时段卡只能在每天00:00至18:00时间段内使用,每分钟0.08元,只能拨打中国大陆,不能拨打国际长途,不支持短信和回拨,支持PC版/安卓版直拨/iphone版直拨.此卡为账号卡,不能用来充值,有效期30天.";
document.getElementById("ts").textContent="时段卡只能在每天00:00至18:00时间段内使用,每分钟0.08元,只能拨打中国大陆,不能拨打国际长途,不支持短信和回拨,支持PC版/安卓版直拨/iphone版直拨.此卡为账号卡,不能用来充值,有效期30天."; 
document.getElementById("ts").color="#ff0000";}
else if (str==5){document.getElementById("ts").innerText="号码卡会分配一个真实的深圳固定电话号码，此号码支持呼出，支持对方来显，支持对方呼入。支持收发短信和回拨。";
document.getElementById("ts").textContent="号码卡会分配一个真实的深圳固定电话号码，此号码支持呼出，支持对方来显，支持对方呼入。支持收发短信和回拨。"; 
document.getElementById("ts").color="#000000";}
else if (str==4){document.getElementById("ts").innerText="语音网关适合企业用户，USB话机适合个人用户。USB和网关都可以全面提升通话质量。";
document.getElementById("ts").textContent="语音网关适合企业用户，USB话机适合个人用户。USB和网关都可以全面提升通话质量。 ";
document.getElementById("ts").color="#000000";}
 }

function o2(str){}
 


function MM_swapImgRestore() { //v3.0
var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
 
function MM_preloadImages() { //v3.0
//m1('1');
//Ali("paytype").options.remove(3);
Ali("paytype").style.display='';
Ali("num").style.left='-30px';
if(Sys.ie==6.0){Ali("jiage").style.marginLeft='150px';}
//m1('1');
var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
 
function MM_findObj(n, d) { //v4.01
var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && d.getElementById) x=d.getElementById(n); return x;
}
 
function MM_swapImage() { //v3.0
var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
