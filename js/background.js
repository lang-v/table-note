let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// 注入当前激活标签页面
async function insertCSS() {
const css = 'body { background-color: ${color}; }';
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
console.log(tab);
chrome.scripting.insertCSS(
  {
    target: {tabId: tab.id},
    css: css
  }
)
}



insertCSS();