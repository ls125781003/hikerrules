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
            return require('https://agit.ai/ls125781003/Hiker/raw/branch/m/v/Route.js'),setupPages("设置", 1)
        }else if(/更新/.test(input)){
            return $('确定更新插件吗?').confirm(()=>{
                let base_search_js = 'hiker://files/rules/dzHouse/js/断插助手.js';
                writeFile(base_search_js,fetch('https://github.moeyy.xyz/https://raw.githubusercontent.com/ls125781003/hikerrules/main/js/断插助手.js'));
                refreshPage(true);
                return 'toast://已更新'
            })
        }else if(/程序主页/.test(input)){
            return "hiker://home@𝑀𝑦𝐹𝑖𝑒𝑙𝑑ᴰⁿ"
        }else if(/批量管理/.test(input)){
            return "file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/cache/plglParse.html"
        }else if(/断插修复/.test(input)){
            return "rule://77+laG9tZV9ydWxlX3VybO+/pWh0dHBzOi8vZ2l0aHViLm1vZXl5Lnh5ei9odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbHMxMjU3ODEwMDMvaGlrZXJydWxlcy9tYWluL3J1bGVzL/CdkYDwnZGm8J2QufCdkZbwnZGS8J2RmfCdkZHhtLDigb8uanNvbg=="
        }else if(/导入帅助/.test(input)){
            return "rule://77+laG9tZV9ydWxlX3VybO+/pWh0dHBzOi8vZ2l0aHViLm1vZXl5Lnh5ei9odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbHMxMjU3ODEwMDMvaGlrZXJydWxlcy9tYWluL3J1bGVzL+W4heWKqeaJi+KImi5qc29u"
        }else{
              return require('https://agit.ai/ls125781003/Hiker/raw/branch/m/v/Route.js'),setupPages("编辑", 1)
        }
    })
}