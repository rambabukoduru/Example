jQuery(document).ready(function(){
	//$.cookie("example", "foo");
	
	//alert( $.cookie("position"));
if($.cookie("position") == 2)
	{
	$("#colright").animate({marginLeft:"300px"}, 300);
	$("#panel").animate({marginLeft:"0px"}, 400 );
	$("#colleft").animate({width:"275px", opacity:1}, 400 );
	$("#showPanel").animate({width:"0px", opacity:0}, 600).hide("slow");
	}
else
	{
	$("#panel").animate({marginLeft:"-275px"}, 500 );
	$("#colleft").animate({width:"0px", opacity:0}, 400 );
	$("#showPanel").show("normal").animate({width:"28px", opacity:1}, 200);
	$("#colright").animate({marginLeft:"40px"}, 500);
	}
	
	$("#hidePanel").click(function(){
		$("#panel").animate({marginLeft:"-275px"}, 500 );
		$("#colleft").animate({width:"0px", opacity:0}, 400 );
		$("#showPanel").show("normal").animate({width:"28px", opacity:1}, 200);
		$("#colright").animate({marginLeft:"40px"}, 500);
		$.cookie("position", "1");
	});
	$("#showPanel").click(function(){
		$("#colright").animate({marginLeft:"300px"}, 300);
		$("#panel").animate({marginLeft:"0px"}, 400 );
		$("#colleft").animate({width:"275px", opacity:1}, 400 );
		$("#showPanel").animate({width:"0px", opacity:0}, 600).hide("slow");
		$.cookie("position", "2");
	});
	
	//$.cookie("position", "1", { expires: 7 });
	//$.cookie("position", "2", { expires: 7 });
});

function CheckAll(fmobj) {
	//alert(fmobj.elements.length)
  for (var i=0; i<fmobj.elements.length; i++) {
    var e = fmobj.elements[i];
    if ( (e.name != 'allbox') && (e.type=='checkbox') && (!e.disabled) ) {
      e.checked = fmobj.allbox.checked;
    }
  }
}

function CheckCheckAll(fmobj) {
	var TotalBoxes = 0;
	var TotalOn = 0;
	for (var i=0;i<fmobj.elements.length;i++) {
		var e = fmobj.elements[i];
		if ((e.name != 'allbox') && (e.type=='checkbox')) {
			TotalBoxes++;
			if (e.checked) {
				TotalOn++;
			}
		}
	}
	if (TotalBoxes==TotalOn) {
		fmobj.allbox.checked=true;
	}
	else 
	{
		fmobj.allbox.checked=false;
	}
}

