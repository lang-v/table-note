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
                // 绑定真实tr
                tr.appendChild(td)
            }

        }
    }
}

//  创建td
function createTd() {
    let td = document.createElement('td')
    // 文本节点
    let ttext = document.createTextNode('这里插入笔记')
    // 将文本节点绑定到td
    td.appendChild(ttext)
    return td
}


insertTableCol(table)