@js:
function init_duanPluin(){
    let sel_title = ['配置选择','编辑解析','程序主页','更新插件','批量管理','断插修复','导入帅助'].map((it) => {
        if(it==='配置选择'){
            return '🎯️‍️'+it;
        }else if(it==='更新插件'){
            return '🔁'+it;
        }else if(it==='程序主页'){
            return '🔮'+it;
        }else if(it==='批量管理'){
            return '🚨'+it;
        }else if(it==='断插修复'){
            return '♥'+it;
        }else if(it==='导入帅助'){
            return '♥'+it;
        }else{
            return '🍀'+it;
        }
    });
    return $(sel_title,2).select(() => {
        function compare(name) {
            return function (it) {
                return it === name;
            }
        }
        if(/配置选择/.test(input)){
            return require('https://jihulab.com/ls125781003/Hiker/-/raw/m/v/Route.js'),setupPages("设置", 1)
        }else if(/更新/.test(input)){
            return $('确定更新插件吗?').confirm(()=>{
                let base_search_js = 'hiker://files/rules/dzHouse/js/断插助手.js';
                writeFile(base_search_js,fetch('http://hiker.nokia.press/hikerule/rulelist.json?id=6462&auth=4d8483cd-2728-5554-bcc7-5b206a5b5646'));
                refreshPage(true);
                return 'toast://已更新'
            })
        }else if(/程序主页/.test(input)){
            return "hiker://home@𝑀𝑦𝐹𝑖𝑒𝑙𝑑ᴰⁿ"
        }else if(/批量管理/.test(input)){
            return "file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/cache/plglParse.html"
        }else if(/断插修复/.test(input)){
            return "https://ghproxy.net/https://raw.githubusercontent.com/ls125781003/dmtg/main/断插.hiker"
        }else if(/导入帅助/.test(input)){
            return "https://ghproxy.net/https://raw.githubusercontent.com/ls125781003/dmtg/main/帅助.hiker"
        }else{
              return require('https://jihulab.com/ls125781003/Hiker/-/raw/m/v/Route.js'),setupPages("编辑", 1)
        }
    })
}