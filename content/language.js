chrome.runtime.onMessage.addListener(
    function (request) {
        /*
            {
                result: 翻译结果
                width: 选择的宽度
                height: 选择的高度
            }
        */
        createTrans(request)
    }
);

//初始化
let trans = document.createElement("div")
trans.style.position = 'fixed'
trans.style.bottom = '150px'
trans.style.right = '50px'
trans.style.color = '#000'
trans.style.width = '400px'
trans.style.background = '#fff'
trans.style.borderRadius = '5px'
trans.style.padding = '10px 20px'
trans.style.boxShadow = '0 0 5px #000'
trans.style.display = 'none'
let body = document.getElementsByTagName('body')[0]
body.appendChild(trans)

//鼠标点击取消翻译浮窗
document.addEventListener('click', ()=>{
    trans.innerHTML = ''
    trans.style.display = 'none'
    console.log('1')
})

// 创建悬浮块
function createTrans(res) {
    trans.style.display = 'block'
    trans.innerHTML = `<div>英文：${res.en}</div><br/><div>中文：${res.zh}</div><br/>`
}
