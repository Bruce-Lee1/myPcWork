/**
 * Created by Administrator on 2016/8/11.
 */
//轮播图
(function () {
    var oBox = document.getElementById('banner');
    var oBoxInner = oBox.getElementsByTagName('div')[0];
    var aDiv = oBoxInner.getElementsByTagName('div');
    var aImg = oBoxInner.getElementsByTagName('img');
    var aLi = oBox.getElementsByTagName('li');
    var step = 0;
    oBoxInner.innerHTML += '<div class="bannerL"><a href="javascript:;"><img src="img/539.JPG" alt=""/></a></div>'
    oBoxInner.style.height = aDiv.length * aDiv[0].offsetHeight + 'px';
    var autoTimer = setInterval(autoMove, 1000);

    function autoMove() {
        step++;
        if (step >= aDiv.length) {
            step = 0;
            utils.css(oBoxInner, 'top', -step * 160)
        }
        zhufengAnimate(oBoxInner, {top: -step * 160}, 500);
        bannerTip();
    }

    function bannerTip() {
        var tmpStep = step >= aLi.length ? 0 : step;
        for (var i = 0; i < aLi.length; i++) {
            if (i === tmpStep) {
                aLi[i].className = 'bg'
            } else {
                aLi[i].className = ''
            }
        }
    }

    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].onmouseover = function () {
            clearInterval(autoTimer)
        };
        aDiv[i].onmouseout = function () {
            autoTimer = setInterval(autoMove, 1000)
        };

    }


})();
//回到顶部
var oBtn = document.getElementById('btn');
var oP = oBtn.getElementsByTagName('p')[0];
window.onscroll = computedDisplay;
function computedDisplay() {
    if (utils.win('scrollTop') > 50) {
        oP.style.display = 'block';
    } else {
        oP.style.display = 'none';
    }

}
oP.onclick = function () {

    window.onscroll = null;
    var taget = utils.win('scrollTop');
    var time = 500;
    var interval = 30;
    var step = taget / time * interval;
    var timer = setInterval(function () {
        var curTop = utils.win('scrollTop');
        if (curTop <= 0) {
            clearInterval(timer);
            if (utils.win('scrollTop') < 50) {
                oP.style.display = 'none';
            }
            window.onscroll = computedDisplay;
            return;
        }
        curTop -= step;
        utils.win('scrollTop', curTop);
    }, interval)
};
//底部
window.addEventListener("scroll", function () {
    var Log = document.getElementById("login");
    if (utils.win("scrollTop") >= 2017) {
        utils.css(Log, {
            position: "fixed",
            bottom: 70 + "px"
        })
    }else{
        Log.style.bottom=0;
    }
    console.log(utils.win("scrollTop"))
}, false);
//function fixed() {
//    if (utils.css(lin, "height") <= 31) {
//        if (utils.win("scrollTop") < 2200 - (217 - 31)) {
//            login.style.position = "fixed";
//            login.style.bottom = 0;
//        } else if (2200 - (217 - 31) <= utils.win("scrollTop")) {
//            login.style.position = "fixed";
//            login.style.bottom = utils.win("scrollTop") - (2200 - (217 - 31)) + "px";
//        }
//    } else if (utils.css(lin, "height") > 31) {
//        if (utils.win("scrollTop") < 2200) {
//            login.style.position = "fixed";
//            login.style.bottom = 0;
//        } else if (2200 - (217 - 31) <= utils.win("scrollTop")) {
//            login.style.position = "fixed";
//            login.style.bottom = utils.win("scrollTop") - 2200 + "px";
//        }
//    }
//}