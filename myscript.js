//自動でquality95%超のもののうち、動画時間の一番長いものを自動的に再生する

//var mid=[];
//var mtime=[];
var arry=[];
const QUAL = 95;

function getMaxId(){
	$("div.thumbBlock").each(function(){
		var q = $(this).html().match(/([0-9]*)%/);
		var id = $(this).attr("id");
		var f = $(this).html().match(/duration">\(([0-9]*) ?([a-z]+).*\)/);
		var time = $(this).html().match(/duration">\(([0-9]*) ?([a-z]*) ?([0-9]*) ?([a-z]*).*\)/);
		
		if(f[2]=="h"){
			//console.log("time: "+time);
			//console.log("f: "+f[1]);
			time[1] = parseInt(time[3]) + 60 * parseInt(f[1]);
			//console.log("time:  "+time[1]);
		}else{
			time[1] = parseInt(time[1]);
		}
		
		console.log("quality:" + q[1] + " id:" + id+" time:"+time[1]);
		//console.log(q[1]=="100");
		if(parseInt(q[1]) > QUAL){
			//mid[mid.length] = id;
			//mtime[mtime.length] = time[1];
			arry.push([id,time[1]]);
		}
	});
}

//getMaxId();
//console.log(mid);
//var target = $("#"+mid).html();
//console.log(target);

function jump(){
	getMaxId();
	//console.log(mid);
	//console.log("#"+mid[0]);
	//console.log("sort前: "+arry);
	arry.sort(function(a,b){
		return (a[1] > b[1])? -1 : 1;	
	});
	console.log("sort後: "+arry);
	//$("div#"+mid[0]).click();
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


