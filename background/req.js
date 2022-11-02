import hex_md5 from '../js/md5.js'

//翻译功能
function translateNote() {
    let q = 'hello world'
    let appid = '20221031001426709'
    let salt = '1435660288'
    let from = 'en'
    let to = 'zh'
    let secretkey = 'GN89VDdu0v_1SAmMRKGQ'
    let sign = hex_md5(appid + q + salt + secretkey)
    let url = `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${q}&from=${from}&to=${to}&appid=${appid}&salt=${salt}&sign=${sign}`
    fetch(url, {
        method: 'get',
    }).then((res) => {
        res.json().then((res) => {
            console.log(res.trans_result[0].dst)
        })
    })
}

translateNote()