
//这个script标签中的方法为检测用户浏览器版本的,其他方法请勿写在此标签中
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
   var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
   var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
   var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
   var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
   if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
    }//isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
}//myBrowser() end
//以下是调用上面的函数
if (myBrowser() == "FF") {
    alert("您当前使用Firefox浏览器,如有问题,请更换ie11或Chrome浏览器");
}
if (myBrowser() == "Opera") {
    alert("您当前使用Opera浏览器,如有问题,请更换ie11或Chrome浏览器");
}
if (myBrowser() == "Safari") {
    alert("您当前使用Safari浏览器,如有问题,请更换ie11或Chrome浏览器");
}
if (myBrowser() == "IE55") {
    location.href="other/ub.htm";
}
if (myBrowser() == "IE6") {
    location.href="other/ub.htm";
}
if (myBrowser() == "IE7") {
    location.href="other/ub.htm";
}
if (myBrowser() == "IE8") {
    location.href="other/ub.htm";
}

//平台、设备和操作系统
var system ={
win : false,
mac : false,
xll : false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//跳转语句，如果是手机访问就自动跳转到自定义页面
if(system.win||system.mac||system.xll){
  
}else{
window.location.href="http://blog.kemeiba.com";
}
