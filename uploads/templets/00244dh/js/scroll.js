var pictwo=0;
var movement=0;
var p=0;
var onmoudu=0;
	
function fmouseover (index)
{
  figdx(index);
  p=1;
  pictwo=index;
  onmoudu=1;
}
function fmouseout(index)
{
 figdx(index);
 p=0;
}



function flashplay(){

     flash_pic=G("inpic");	
	 fig_Id=G("flash_btn");
	 fig_Href=G("flash_img");
	 fig_Hreflink=fig_Href.getElementsByTagName("a");
	 fig_list=fig_Id.getElementsByTagName("li");
	
	if(movement){
		clearTimeout(movement);
	}
	for(i=0;i<fig_list.length;i++){
		fig_list[i].className="";
	}
	
     o=document.getElementById("flash_btn");
	 tt=o.getElementsByTagName("li");
	 picgg=G("flash_img");
	 pitt=picgg.getElementsByTagName("a");	
	 pitt[0].onmouseover=function(){p=1;pictwo--;if(onmoudu==1){pictwo++};}
	 pitt[0].onmouseout=function(){p=0;pictwo++;}
	
	if(pictwo==fig_list.length){
		pictwo=0;
	}	
			
	if(p==0){
			if(pictwo<fig_list.length){		
			flash_pic.setAttribute("src",picarr[pictwo]);
			fig_Hreflink[0].setAttribute("href",linkarr[pictwo]);
			fig_list[pictwo].className="figlist";
			pictwo++;
			onmoudu=0;
		    }
	}else{
		fig_list[pictwo].className="figlist";
	}
    
	movement=setTimeout("flashplay()",2000)
}

function figdx(index){
	pictwo=index;
	if(movement!=0){clearTimeout(movement);movement=0;}
	flashplay();
}

function G(id){if(typeof(id)=="string"){return document.getElementById(id);}return id;}

