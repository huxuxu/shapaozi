var lock = true;
$(".search").click(function () {
    if (lock) {
        $(".search_box span").css("background", "url(../img/search.png) no-repeat center");
        $(".search_box").css("width", "18%");
        $(".keyboard").css({
            "display": "block",
            "width": "95%"
        });
        lock = false;
    }
    else {
        $(".search_box span").css("background", "url(../img/searchbg.png) no-repeat center");
        $(".search_box").css("width", "6%");
        $(".keyboard").css({
            "display": "none",
        });
        lock = true;
    }
})