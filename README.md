# table-note

用于在网页表格中快速标注快速备注

# 背景

基于开源Chrome插件开发模板开发

# 项目架构

background-后台常驻：一般需要一直运行，启动就运行的全局代码放入到background里面

popup-点击扩展打开的小窗口网页，临时性的交互

locales-国际化（中英文manifest.json）

待完善。。。


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


