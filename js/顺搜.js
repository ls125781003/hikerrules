function 顺搜(height, arr) {
	if (MY_PAGE == 1) {
		var 程序名=MY_RULE.title;
		putVar('小程序名', 程序名);
		putVar(程序名+'顺搜高度', JSON.stringify(height));
		var 本地 =getPath('hiker://files/rules/dzHouse/html/顺搜.html');
		if (fileExist(本地) == false) {
			var 远程x5 = request('https://ghproxy.net/https://raw.githubusercontent.com/ls125781003/hikerdbw/master/顺搜.html');
			if (远程x5.indexOf("search_bg") > 0) {
				writeFile(本地, 远程x5);
			} else {
				confirm({
					title: '❌错误提示',
					content: '顺搜导入出错'
				});
				return
			}
		}
		if (!getVar('X5加载')) {
			x5_height = 0
		} else {
			x5_height = getVar(程序名+'顺搜高度', 'video')
		}
		let 顺搜_Arr = [{
			desc: 'list&&' + x5_height,
			url: 本地,
			col_type: 'x5_webview_single',
			extra: {
				ua: MOBILE_UA,
				autoPlay: true,
				imgLongClick: false
			}
		}];
		if(arr) arr.push(顺搜_Arr[0]);
		return arr || 顺搜_Arr
	}
}