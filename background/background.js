import hex_md5 from '../js/md5.js'
// import { encodeUTF8 } from '../js/utf8'

//翻译功能
async function translateNote(q) {
    // 开发者appid
    let appid = '20221031001426709'
    // 随机码
    let salt = '1435660288'
    // 需要翻译的语言类型
    let from = 'en'
    // 翻译后的语言类型
    let to = 'zh'
    // 开发者密钥
    let secretkey = 'GN89VDdu0v_1SAmMRKGQ'
    // md5
    let sign = hex_md5(appid + q + salt + secretkey)
    // 请求链接
    let url = `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${q}&from=${from}&to=${to}&appid=${appid}&salt=${salt}&sign=${sign}`
    const result = await fetch(url, {
        method: 'get',
    }).then((res) => {
        return Promise.resolve(res.json())
    })
    console.log(sign, result)
    return result.trans_result[0].dst
}

// 创建菜单
chrome.contextMenus.create({
    id: "trans-search",
    title: "英文搜索",
    contexts: ['selection'],
})

// 监听右键搜索
chrome.contextMenus.onClicked.addListener(async data => {
    let result = await translateNote(data.selectionText)
    console.log(result)
    // chrome.runtime.sendMessage({ result });
})

// 监听来自content-script的消息
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log('我是request:', request);
//     console.log('我是sender', sender)
//     sendResponse("嗯嗯");
// });
