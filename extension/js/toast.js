/**
 * 网上抄的toast
 * https://blog.csdn.net/weixin_39644462/article/details/82998308
 */

(function(window, undefined) {
    var Ygtoast = function() { //构造函数大驼峰命名法
    };
    Ygtoast.prototype = { //prototype 属性使您有能力向对象添加属性和方法。
        create: function(str, duration) {
            let self = this;
            var toastHtml = '';
            var toastText = '<div class="yg-toast-text">' + str + '</div>';
            toastHtml = '<div class="yg-toast" >' + toastText + '</div>';
            if (document.querySelector(".yg-toast")) return; //当还没hide时禁止重复点击
            document.body.insertAdjacentHTML('beforeend', toastHtml);
            duration == null ? duration = 2000 : ''; //如果toast没有加上时间，默认2000毫秒；
            self.show();
            setTimeout(function() {
                self.hide();
            }, duration);
        },
        show: function() {
            let self = this;
            document.querySelector(".yg-toast").style.display = "block";
            document.querySelector(".yg-toast").style.marginTop = "-" + Math.round(document.querySelector(".yg-toast").offsetHeight / 2) + "px";
            if (document.querySelector(".yg-toast")) return;
        },
        hide: function() {
            var self = this;
            if (document.querySelector(".yg-toast")) {
                document.querySelector(".yg-toast").parentNode.removeChild(document.querySelector(".yg-toast"));
            }
        },
        toast: function(str, duration) {
            var self = this;
            return self.create(str, duration);
        }
    };
    window.Ygtoast = Ygtoast;
}(window));


// 调用
// var yg = new Ygtoast();
// yg.toast("你说神马", 1500);