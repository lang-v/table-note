const plugin_search_but = document.getElementById('plugin_search_but')
const plugin_search_inp = document.getElementById('plugin_search_inp')
plugin_search_but.onclick = function () {
    alert('plugin_search_inp的值为：' + plugin_search_inp.value.trim())
}