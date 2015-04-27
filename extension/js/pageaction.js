chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        pageUrl: {
            hostEquals: 'mail.google.com'
        }
      ],
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});