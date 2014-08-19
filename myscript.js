var mid=[];

function getMaxId(){
	$("div.thumbBlock").each(function(){
		var q = $(this).html().match(/([0-9]*)%/);
		var id = $(this).attr("id");
		console.log("quality:" + q[1] + "id:" + id);
		console.log(q[1]=="100");
		if(q[1]=="100"){
			mid[mid.length] = id;
		}
	});
}

//getMaxId();
//console.log(mid);
//var target = $("#"+mid).html();
//console.log(target);

function jump(){
	getMaxId();
	console.log(mid);
	$("#"+mid+" a").click(function(){
		var link = $(this).attr("href");
		console.log(link);
		location.href = "http://jp.xvideos.com/"+link;
	});
};

jump();

/*
$("div.thumbBlock").each(function(){
var time = $(this).html().match(/[0-9]+.*(min|sec)$/);
var q = $(this).html().match(/[0-9]*%/);
var id = $(this).attr("id");
console.log("time: "+time+"  quality: " + q + "  id: " + id);
});
*/
//var txt = $("span.bg").html();//.match(/^([0-9]).*%/);
//var txt = $("span.bg").html().match(/[0-9]*%/);
//txt = $("span.bg").html();
//
//alert(txt);
//console.log(txt);


