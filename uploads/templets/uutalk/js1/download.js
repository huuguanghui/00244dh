// JavaScript Document
//----------------------------------------------------------
//  toMoeny
//----------------------------------------------------------
function toMoeny(str){
    var shownum = "";
    var num = String(str);
    var len = num.length;
	
	if(len > 6 && len < 10){
     
	shownum= num.substring(0,len-6)+','+num.substring(len-6,len-3)+','+num.substring(len-3,len);

	}else if(len >=10 && len <13){
	shownum=num.substring(0,len-9)+','+num.substring(len-9,len-6)+','+num.substring(len-6,len-3)+','+num.substring(len-3,len);
	}else if(len >=13 && len <16){
	shownum=num.substring(0,len-12)+','+num.substring(len-12,len-9)+','+num.substring(len-9,len-6)+','+num.substring(len-6,len-3)+','+num.substring(len-3,len);
	}
    return shownum;
}

//----------------------------------------------------------
//  Ali
//----------------------------------------------------------

function Ali(id){if(typeof(id)=="string"){return document.getElementById(id);}return id;}

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
//----------------------------------------------------------
//  AjaxRequest
//----------------------------------------------------------
function AjaxRequest(){
    var oThis = this; 
    var text = null;
    var xml = null;
    var object = null;
    var xmlhttp = null;
    var parameters = [];
    try {
        xmlhttp = new XMLHttpRequest();
    }catch (e1) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
            try{
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            }catch(e3){
            }
        }
    }
    if(xmlhttp==null){
        alert("Can't create XMLHttpRequest object");
        return null;
    }

    this.onreadystatechange = function(){
        if(xmlhttp.readyState==4){
            if(xmlhttp.status==200 ||xmlhttp.status==0){
                oThis.onBack();
            }else{
                if (xmlhttp.status==404){
                    // alert("URL: (" + oThis.url + ") doesn't exist!");
                }else{
                    // alert("Status is " + xmlhttp.status);
                }
            }
        }
    }
    
    this.open = function(_method,_url,_async){
        xml = null;
        text = null;
        object = null;
        oThis.clearParameters();
        oThis.async = _async;
        oThis.url = _url;
        xmlhttp.open(_method,_url,_async);
        xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
        oThis.setParameter("_isAjaxRequest",'true');    
        if(_async==true) {xmlhttp.onreadystatechange=oThis.onreadystatechange;}
    }

    this.setParameter = function(name,value) {
        parameters.push({'name':name,'value':value});
    }

    this.clearParameters = function(){
        parameters = new Array();
    }

    this.getParametersStr = function(){
        var info = [];
        var pvalue = null;
        for(var i=0;i<parameters.length;i++){
            var p = parameters[i];
            if(p==null) continue;
            pvalue = encodeURIComponent(p.value);
            info.push(p.name + "=" + pvalue);
        }
        var str = info.join("&");
        return str;
    }
    
    this.send = function(){
        var str =oThis.getParametersStr();
        xmlhttp.send(str);
        // if async is false, run function by synchronous
        if(oThis.async==false) {oThis.onreadystatechange();}
        oThis.clearParameters();
    }
    
    // return value of object
    this.getObject = function(){
        if(object==null){
            try{
                object = eval("obj=" + oThis.getText());
            }catch(e){
                object = null;
            }
        }
        return object;
    }
    
    // return value of text
    this.getText = function(){
        if(text==null) {text = xmlhttp.responseText;}
        return text;
    }

    // return value of xmlDoc
    this.getXml = function(){
        if(xml==null) {xml = xmlhttp.responseXML;}
        return xml;
    }
      
    this.onBack = function(){}
}

//----------------------------------------------------------
//  DownloadShowTips
//----------------------------------------------------------
var g_browserVer;
var g_tipsImgArr = [img1.src,img2.src,img3.src,img4.src,img5.src,img6.src,img7.src,img8.src];
var g_tips_timer = null;
var g_tips_j = 3;

function getPos(obj,location)
{
	var pos = [];
	if(location==1){pos[0] = obj.offsetLeft+400;pos[1] = obj.offsetTop+150;}	
	else{pos[0] = obj.offsetLeft-420;pos[1] = obj.offsetTop-50;}
	
	while (obj = obj.offsetParent)
	{
		pos[0] += obj.offsetLeft;
		pos[1] += obj.offsetTop;
	}
	return pos;
}

function DownloadShowTips(obj,way,imgIndex,imgHeight,location)
{
	var featureTips = Ali("featureTips");
	var pos = getPos(obj,location);	
	Ali("featureTipsImg").src = g_tipsImgArr[imgIndex];
	featureTips.style.left = pos[0] + "px";
	if (way == "down")
	{
		//g_tips_timer = setInterval(function(){tipsAnimateDown()},100);
		tipsAnimateDown();
	}
	else
	{
		//g_tips_timer = setInterval(function(){tipsAnimateUp(imgHeight)},100);
		tipsAnimateUp(imgHeight);
	}
	function tipsAnimateDown()
	{
		if (g_tips_j == 3)
		{
			featureTips.style.display = "block";
		}
		if (g_tips_j >= 0)
		{
			featureTips.style.top = (pos[1] + 20 + g_tips_j * 15) + "px";
			setOpacity();
			g_tips_j--;
		}
		else
		{
			//clearInterval(g_tips_timer);
			g_tips_timer = null;
			g_tips_j = 3;
		}
	}
	function tipsAnimateUp(imgHeight)
	{
		if (g_tips_j == 3)
		{
			featureTips.style.display = "block";
		}
		if (g_tips_j >= 0)
		{
			featureTips.style.top = (pos[1] - imgHeight - 10 - g_tips_j * 15) + "px";
			setOpacity();
			g_tips_j--;
		}
		else
		{
			//clearInterval(g_tips_timer);
			g_tips_timer = null;
			g_tips_j = 3;
		}
	}
	function setOpacity()
	{
		if (g_browserVer == 1)
		{
			//featureTips.filters.alpha.opacity = 100 - g_tips_j * 25;
			featureTips.filters.alpha.opacity = 100 ;
		}
		else
		{
			//featureTips.style.opacity = 1 - g_tips_j * 0.25;
			featureTips.style.opacity = 1;
		}
	}
}

function DownloadHideTips()
{
	Ali("featureTips").style.display = "none";
	//clearInterval(g_tips_timer);
	g_tips_timer = null;
	g_tips_j = 3;
	Ali("featureTipsImg").src = "";
}

//
  var downNum = 0;
  var downNum1 = 0;
  function getnewDownNumber(){		
	  //Ali("featureTips").style.display = "none";
	  var request = new AjaxRequest();
	  request.open("post","http://www.alicall.com/DownloadCount.asp",true);
	  request.onBack = function(){
		  var data = request.getText();
		  if(data!=null){
			  Ali("download").innerHTML = toMoeny(Number(data));
			/*if(downNum == null ){
			  Ali("load").innerHTML = toMoeny(Number(data)-50);
			  downNum = downNum1-50;
			  }
			 downNum1 = Number(data);
			 if(downNum1-50>downNum)
			  downNum = downNum1-50;*/			  
		  }else{
			  Ali("load").innerHTML = "<img src='http://210.83.225.5/alicall2010/images/Loading.gif' />";
		  }
	  }
	  request.send();
  }
  function showNum(){
  if(downNum<downNum1){
  downNum = downNum +parseInt(Math.random()*3);
  Ali("download").innerHTML = toMoeny(downNum);
  }
  }
<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->