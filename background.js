chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.executeScript(null,
			{file: "myscript.js"},function(){
					jump();
			});	
	
});
