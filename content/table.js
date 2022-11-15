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
        if (count) {
            for (let i = 0; i < count; i++) {
                let tr = tbody.getElementsByTagName('tr')[i]
                let td = createTd()
                monitorTr(tr, td)
                // 绑定真实tr
                tr.appendChild(td)
            }

        }
    }
}
//注册监听
function monitorTr(tr, td) {
    tr.addEventListener('mouseover', (e)=>{
        td.style.display = "block"
    })
    tr.addEventListener('mouseout', (e)=>{
        td.style.display = "none"
    })
}


//  创建td
function createTd() {
    let td = document.createElement('td')
    // 先隐藏
    td.style.display = "none"
    // 文本节点
    let ttext = document.createTextNode('这里插入笔记')
    // 将文本节点绑定到td
    td.appendChild(ttext)
    return td
}


insertTableCol(table)