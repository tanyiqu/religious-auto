// 提示值
chrome.browserAction.setBadgeText({ text: '点我' });

// 图标点击事件
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
    // 注入css
    chrome.tabs.insertCSS(tab.id, { file: 'css/toast.css' });
    // 注入js
    chrome.tabs.executeScript(tab.id, { file: 'js/script.js' });
});