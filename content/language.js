// chrome.runtime.sendMessage({ greeting: '你好' }, function (response) {
//     console.log('收到来自后台的回复：' + response);
// });

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log(sender.tab ? "from a back script:" + sender.tab.url : "from the extension");
//         console.log(request)
//     }
// );