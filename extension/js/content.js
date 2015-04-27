
window.onload = function () {

	// Inserts Gmail.js
	var gmailJSScript = document.createElement('script');
	gmailJSScript.type = 'text/javascript';
	gmailJSScript.src = chrome.extension.getURL('js/libs/jquery-2.1.3.js');
	document.getElementsByTagName('head')[0].appendChild(gmailJSScript);


	var gmailJSScript = document.createElement('script');
	gmailJSScript.type = 'text/javascript';
	gmailJSScript.src = chrome.extension.getURL('js/libs/gmail.js');
	document.getElementsByTagName('head')[0].appendChild(gmailJSScript);


	var insertScript = document.createElement('script');
	insertScript.type = 'text/javascript';
	insertScript.src = chrome.extension.getURL('js/gmailInsert.js');
	setTimeout(function () {
		document.getElementsByTagName('head')[0].appendChild(insertScript);
	}, 500);

};
