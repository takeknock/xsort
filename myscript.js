//自動でquality95%超のもののうち、動画時間の一番長いものを自動的に再生する

//TODO: browserAction化（background.jsにmid送信し、向こうに画面遷移の処理書く）
//まずは、1ファイルにまとめた状態で動くようにする（myscript.jsにまとめる）

//TODO: browserAction実行するたびに、配列に入っている次の動画ページを表示する

const QUAL = 95;

function getMaxId(){
	var arry=[];
	$("div.thumbBlock").each(function(){
		var q = $(this).html().match(/([0-9]*)%/);
		var id = $(this).attr("id");
		var f = $(this).html().match(/duration">\(([0-9]*) ?([a-z]+).*\)/);
		//f[2]=="h"ならtime[1]=h,time[3]=min
		//otherwise, time[1]=min
		var time = $(this).html().match(/duration">\(([0-9]*) ?([a-z]*) ?([0-9]*) ?([a-z]*).*\)/);
		
		if(f[2]=="h"){
			time[1] = parseInt(time[3]) + 60 * parseInt(f[1]);
		}else{
			time[1] = parseInt(time[1]);
		}		
		//console.log("quality:" + q[1] + " id:" + id+" time:"+time[1]);
		if(parseInt(q[1]) > QUAL){
			arry.push([id,time[1]]);
		}
	});
	return arry;
}


function dsort(arry){
	arry.sort(function(a,b){
		return (a[1] > b[1])? -1 : 1;	
	});
	//console.log("sort後: "+arry);
};




var mid = getMaxId();
dsort(mid);
console.log(mid[0][0]);

//auto click
$("#"+mid[0][0]+" a").click(function(){
	var href = $(this).attr("href");
	location.href = href;
});
//$("#"+mid[0][0]).find("a").click();

//$("#"+mid[0][0]).children().children().children("a").click();

//TODO: browserAction化。background.jsにmid送って、向こうで画面遷移実行
//ひとまず、こちらのファイルに処理をまとめて、動くようにしてから、ファイル分割を試す。
chrome.browserAction.onClicked.addListener(function(tab){
	var mid = getMaxId();
	dsort(mid);
	console.log(mid[0][0]);
	chrome.tabs.executeScript(null{
		code: '$("#"+mid[0][0]).find("a").click();'
	});
});

