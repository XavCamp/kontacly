chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'mail.google.com'
                      }
                  })
              ],
            actions: [new chrome.declarativeContent.ShowPageAction() ]
        }]);
    });
});

chrome.identity.getAuthToken({
    interactive: true
}, function (token) {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
    } else {  
        chrome.storage.local.set({token: token});
    }
    var x = new XMLHttpRequest();
    x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
    x.onload = function() {
        console.log('oauth ok', x.response);
    };
    x.send();
});
