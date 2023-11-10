//push_tips = "优化高度设定逻辑\n请不要再跑到html文件里改高度了\n直接在顺搜元素里改，回到主页刷新一下就好";
update(1020)
//$("#search-ok img").attr("src", "https://hikerfans.com/weisyr/icon/pus00.gif");
//fba.writeFile(ln + '顺搜_备.html', request('https://gh-proxy.com/https://raw.githubusercontent.com/ls125781003/hikerrules/main/html/顺搜_备.html'))

let tt = request("https://yiketianqi.com/api.php?style=tw&city="+get_settings('位置'));
tt = fba.parseDomForHtml(tt, "div,0&&Text") +"。" + fba.parseDomForHtml(tt, "div,6&&Text");

/*
let tt = JSON.parse(request("https://xiaoapi.cn/API/zs_tq.php?type=cytq&msg="+get_settings('位置')+"&n=1")).data;
tt=tt.split('感觉')[1];
*/
fba.log(tt)

let wt = JSON.parse(request('https://xiaoapi.cn/API/zs_tts.php?type=xunfei&id=3&msg='+tt)).tts;
audio0 = new Audio("https://hikerfans.com/weisyr/video/天气预报bgm.mp3");
audio = new Audio(wt);
$("#weather_info").click(() => {
audio0.volume = 0.6;
audio0.play();
setTimeout(function() {
audio.play();
},2000)
});
push_img = "https://hikerfans.com/weisyr/img/guoqing.png";

push_url = "";

push_rule = `js:var d=[];d.push({desc:'auto&&float',col_type:'x5_webview_single',url:'${push_url}'});setResult(d)`;
push("10-01")