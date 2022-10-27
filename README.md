# table-note

用于在网页表格中快速标注快速备注

# 背景

基于开源Chrome插件开发模板开发

# 项目架构

background-后台常驻：一般需要一直运行，启动就运行的全局代码放入到background里面

popup-点击扩展打开的小窗口网页，临时性的交互

locales-国际化（中英文manifest.json）

待完善。。。

# manifest.json

参考： https://blog.csdn.net/sinat_34820292/article/details/86620593

```
{
    // 清单文件的版本，这个必须写，而且必须是2
    "manifest_version": 2,
    // 插件的名称
    "name": "hello-world-plugin",
    // 插件的版本
    "version": "1.0.0",
    // 插件描述
    "description": "简单的Chrome扩展demo",
    // 图标，一般偷懒全部用一个尺寸的也没问题
    "icons":
    {
        "16": "img/icon.png",
        "48": "img/icon.png",
        "128": "img/icon.png"
    },
    // 会一直常驻的后台JS或后台页面
    "background":
    {
        // 2种指定方式，如果指定JS，那么会自动生成一个背景页
        "page": "background.html"
        //"scripts": ["js/background.js"]
        //需要的时候开启，不需要的时候关闭
        "persistent": false
    },
    // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
    "browser_action": 
    {
        "default_icon": "img/icon.png",
        // 图标悬停时的标题，可选
        "default_title": "hello-world-plugin",
        "default_popup": "popup.html"
    },
    // 当某些特定页面打开才显示的图标
    /*"page_action":
    {
        "default_icon": "img/icon.png",
        "default_title": "我是pageAction",
        "default_popup": "popup.html"
    },*/
    // 需要直接注入页面的JS
    "content_scripts": 
    [
        {
            //"matches": ["http://*/*", "https://*/*"],
            // "<all_urls>" 表示匹配所有地址
            "matches": ["<all_urls>"],
            // 多个JS按顺序注入
            "js": ["js/jquery-1.8.3.js", "js/content-script.js"],
            // JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
            "css": ["css/custom.css"],
            // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
            "run_at": "document_start"
        },
        // 这里仅仅是为了演示content-script可以配置多个规则
        {
            "matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
            "js": ["js/show-image-content-size.js"]
        }
    ],
    // 权限申请
    "permissions":
    [
        "contextMenus", // 右键菜单
        "tabs", // 标签
        "notifications", // 通知
        "webRequest", // web请求
        "webRequestBlocking",
        "storage", // 插件本地存储
        "http://*/*", // 可以通过executeScript或者insertCSS访问的网站
        "https://*/*" // 可以通过executeScript或者insertCSS访问的网站
    ],
    // 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
    "web_accessible_resources": ["js/inject.js"],
    // 插件主页，这个很重要，不要浪费了这个免费广告位
    "homepage_url": "https://www.baidu.com",
    // 覆盖浏览器默认页面
    "chrome_url_overrides":
    {
        // 覆盖浏览器默认的新标签页
        "newtab": "newtab.html"
    },
    // Chrome40以前的插件配置页写法
    "options_page": "options.html",
    // Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
    "options_ui":
    {
        "page": "options.html",
        // 添加一些默认的样式，推荐使用
        "chrome_style": true
    },
    // 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
    "omnibox": { "keyword" : "go" },
    // 默认语言
    "default_locale": "zh_CN",
    // devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
    "devtools_page": "devtools.html"
}
```

# 示例项目

hello-world

项目目录

```
popup
  -index.html
images
manifest.json
```

index.html

```
<html>
    <body>
      <h1>hello world</h1>
    </body>
</html>
```

manifest.json

```
{
    "name": "table-tools",
    "description": "hello-world-plugin",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
        "default_title": "plugin title",
        "default_popup": "./html/index.html",
        "default_icon": "./images/logo.png"
    },
    "commands": {
        "_execute_browser_action": {
            "suggested_key": {
                "default": "Ctrl+Shift+F",
                "mac": "MacCtrl+Shift+F"
            },
            "description": "Opens index.html"
        }
    }
}
```



# v3

参考文档：[迁移到 Manifest V3 · GitBook](https://doc.yilijishu.info/chrome/mv3-migration.html)

```
{
	# 扩展程序的名称
	"name": "练手项目",
	# 扩展程序的描述
	"description": "这是一个扩展程序",
	# 扩展程序的版本
	"version": "1.0",
	# manifest的版本号
	"manifest_version": 3,
	# 引用后台脚本
	"background": {
		"service_worker": "js/background.js"
	},
	# 权限获取
	"permissions": [
		# 存储
		"storage"，
		# 访问活动选项卡
		"activeTab",
		# 脚本（上下文）
        "scripting"
	],
	# 声明弹出窗口的资源
	"action": {
		"default_popup": "./popup/index.html",
		"default_icon": {
			"16": "/images/logo.png",
			"32": "/images/logo32.png",
			"48": "/images/logo48.png"
		}
	}
	# 扩展程序管理页面的图标
	"icons": {
        "16": "/images/logo.png",
        "32": "/images/logo32.png",
        "48": "/images/logo48.png"
    }，
	# 选项卡网页
	"options_page": "/options/options.html"
}
```


