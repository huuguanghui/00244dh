// JScript �ļ�

// JavaScript Document
var isCommentSubmit=false;
var grade=5;
 var addCommentCount=0;
$(function(){
		      $("#tags li").click(function(){
										      $(this).siblings().removeClass("selectTag");
										      $(this).addClass("selectTag");
											  var index=$("#tags li").index($(this));
											  
											  $(".zgr_paybox03").css("display","");
											  var desc=$(".zgr_paybox03[tag!='"+index+"']");
											  desc.css("display", "none");
											  

											  $(".zgr_paybox03_bt").css("display","none");
											  
											  $(".zgr_paybox03 div[class='zgr_paybox03_nr2'],.zgr_paybox03 div[class='zgr_paybox03_nr3']").removeClass("zgr_paybox03_nr2").addClass("zgr_paybox03_nr1");
											  
										   });
			  
			  
			   $("input.pre").focus(function(){
											   /// $(this).css("display","none");
												//var content=$("#commentContent");
												//content.slideDown("fast");
												//$("#comImg").css("display","");
												//$("#star").css("display","");
												
												//content.focus();
												
											 });
			   
			   
			   $("#commentContent").blur(function(){

														// setTimeout("commTextHide()",200);
														 			
												  });
			   
			   
			   
			  var allowSubmit=false;
            
              var options	= {
                 value:5,
                 after_click:function(ret){
                    grade=ret.number;
					isCommentSubmit=true;
                 },
                 title_format  : function(value) {
		            var title = '';
	               	switch (value) {
                        case 1 : 
			            	title	= '�ǳ���';
				            break;
		            	case 2 : 
			            	title	= '�ϲ�';
			                break;
			           case 3 : 
			            	title	= 'һ�㣬��������ֵ';
			                break;
			           case 4 : 
			            	title	= '�ܺã���������';
			                break;
			           case 5 : 
			            	title	= '�ǳ��ã��ﳬ��ֵ';
			                break;
			            default :
				            title = value;
				            break;
		             }
                     return title;
	             }
              }
              $('#statVote').rater(options);
			  
		      $("#commentSubmit").click(function(){comSubmit();});
		      
			  $("#commentContent").keypress(function(event){
													    if(event.keyCode==13)
														{
															comSubmit();
													    }
													 })
			  						.keyup(function(){
													    if($(this).val()!="")
														   $("#commentMsg").text(""); 
													});

			   $(".zgr_pl1,.zgr_pl2").hover(function(){

													   $(this).addClass("zgr_pl3");
													 }, 													 
											function(){
												$(this).removeClass("zgr_pl3");
											});

				
				   $("#Image13").toggle(function(){
		        $(".zgr_zc_fenxiang").css("display","");
		     },
		     function(){
		         $(".zgr_zc_fenxiang").css("display","none");
		     }
		     );	
											
								
		  	
		     
		     $("#sharecopy").click(function(){
		        try{
		             copy2Clipboard($("#shareURL").val());
		             alert("���Ƴɹ�");
		        }
		        catch(e)
		        {
		        
		        }     
		     });							
											
})


function hide(obj)
{
   window.location.href='#commentTop';
   $(obj).html("");
}



function commTextHide(obj)
{
    if(!isCommentSubmit)
	{
		$("#commentContent").slideUp("fast");
		$("input.pre").css("display","");
		$("#comImg").css("display","none");
		$("#star").css("display","none");
	}
}


function comSubmit()
{
isCommentSubmit=true;
												    var ail=new ailcall_ailen();
													if(ail.checkLogin())
													{
														var content=$.trim($("#commentContent").val());
														if(content=="")
														{
															var offset=$("#commentContent").offset();
															tips("���������Ľ��������",offset.left,offset.top);
															$("#commentContent").focus();
															return false;
														}
														else
														{
														    $("#commentMsg").html("<img src=\"/images/loading.gif\"/>�����ύ...");
															var url="/command/commentSave.ashx";
															$.post(
																   url,
															       {pid:prodId,content:content,grade:grade},
															       function(data){
																			$(".zgr_ms01").after(data);
																			
																			 var interlaceClass;
																			 if(addCommentCount%2==0)
																			 {
																					 interlaceClass="zgr_pl2";
																		 	 }
																		     else
																			 {
																					interlaceClass="zgr_pl1";
																		     }											 
																			$(".zgr_paybox03_nr3").children().eq(1).addClass(interlaceClass); 
																			addCommentCount++;
																			isCommentSubmit=false;
																			$("#commentContent").val("");
																			$("#commentMsg").html("�ύ�ɹ�");
																			
																			var  num=parseInt($(".zgr_pl_total a").text());
																			$(".zgr_pl_total a").text(num+1);
																			
																			
																			setTimeout("hide('#commentMsg')",500);
																	 });
														}
													}
													else
													{
														ail.showLoginDialog();
													}
						
}




function toShoppingCart()
{
   var ali=new ailcall_ailen();	
   
    var amount=document.getElementById("Amount").value;
   if(!ali.checkLogin())
   {
     ali.showLoginDialog();
     afterLoginUrl="/InitCart.aspx?pid="+prodId+"&amount="+amount;
     return false;
   }
   if(!ChkAmount())
      return false;

   var amount=document.getElementById("Amount").value;
   window.location.href="/InitCart.aspx?pid="+prodId+"&amount="+amount;
   return false;
}
