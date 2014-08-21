chrome.browserAction.onClicked.addListener(function(tab){
	console.log('test!!!');
	chrome.tabs.executeScript(null,
			{file: "jquery-1.11.1.min.js"},function(){
					chrome.tabs.executeScript(null,
							{file: "myscript.js"},function(){
										$("#"+mid[0][0]).find("a").click();
								});
				});
	
});
