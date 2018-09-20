var cloud = document.getElementById("mask_box");  // 云彩
var nav = document.getElementById("nav_box");
var lis = nav.children[1].children;
var current = 0;   // 用于存放点击时候的 offsetLeft
//alert(lis.length);
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        // alert(this.offsetLeft);
        target = this.offsetLeft;  // 把左侧的位置 ，给 target
    }
    lis[i].onmouseout = function () {
        target = current;     // 鼠标离开  target 是 刚才我们点击的位置
    }
    lis[i].onclick = function () {
        current = this.offsetLeft;//点击的时候吧当前位置存贮一下
    }
}
// 缓动公式
var leader = 0, target = 0;
setInterval(function () {
    leader = leader + (target - leader) / 10;
    mask_box.style.left = leader + "px";
}, 10);