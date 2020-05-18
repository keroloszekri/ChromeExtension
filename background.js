window.bears = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.bears[request.count] = request.emailsArr.join("\n")
  //alert(JSON.stringify(request.emailsArr));
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})