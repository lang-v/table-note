// 笔记样式，后面改成storge读取
let note_style = 'table-note-common'
// 参与计算hash的节点，后面也用storge读取，并针对每个域名保存不同的设置
let hash_node = [0,1,2]

const table = document.getElementsByTagName('table');

// 插入列
function insertTableCol(table) {
    /*
        table: 表格对象
        目的：表格多处一列
        思路： 获取每一行插入
    */
    for (item of table) {
        const tbody = item.getElementsByTagName('tbody')[0]
        let count = tbody.children.length
        // tbody不能遍历，缺少内置迭代器
        if (count > 1) {
            for (let i = 1; i < count; i++) {
                let tr = tbody.getElementsByTagName('tr')[i]
                let td = createTd()
                fillContent(tr, td);
                // 绑定真实tr
                tr.appendChild(td)
            }

        }
    }
}

//  创建td
function createTd() {
    let td = document.createElement('td')
    // // 文本节点
    // let ttext = document.createTextNode('这里插入笔记')
    // // 将文本节点绑定到td
    // td.appendChild(ttext)
    return td
}

/**
 * 
 * @param {*} tr 根据每一列的数据来计算出一个hash数，以匹配到对应的笔记
 * @param {*} td 笔记内容
 */
function fillContent(tr, td) {
    let intput_note = document.createElement('input')
    intput_note.setAttribute('class', note_style)
    intput_note.setAttribute('placeholder', '这里插入笔记')
    td.appendChild(intput_note)
}

function computeHash(tr) {
    // return hash.
    return ''
}

insertTableCol(table)