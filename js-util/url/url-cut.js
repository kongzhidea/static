function cutOffStr(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var windowHref = decodeURI(window.location.search);
	var r = windowHref.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
