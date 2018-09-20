$(function () {
    temp();
    function temp() {
        var teamStr = $("#template").html();
        var complied = _.template(teamStr);
        $.get("../data/xiangqing.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".home_box").append(str1);
            })
        })
    }

    temOne();
    function temOne() {
        var teamStr = $("#temp").html();
        var complied = _.template(teamStr);
        $.get("../data/bannerxq.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".swiper-wrapper").append(str1);
            })
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: {
                    stopOnLastSlide: true,
                }, //是否自动播放
                direction: 'horizontal',
                initialSlide: 0,
                loop: true,
                observe: true,
                observeParents: true,
                mousewheel: true,

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
            })
            mySwiper.el.onmouseover = function () {
                mySwiper.navigation.$nextEl.removeClass('hide');
                mySwiper.navigation.$prevEl.removeClass('hide');
            },
                mySwiper.el.onmouseout = function () {
                    mySwiper.navigation.$nextEl.addClass('hide');
                    mySwiper.navigation.$prevEl.addClass('hide');
                }

        })
    }

    seleFn();
    function seleFn() {
        var url = window.location.href.split('#');
        var id = parseInt(url[1]);
        console.log(id);
        $.post("../php/get.php", { id: id }, function (data) {
            // if (parseInt(data)) {
            //     alert("1");
            // } else {
            //     alert("0");
            // }
            var objdata = typeof data == "object" ? data : eval('(' + data + ')');
            var obj = objdata.data;
            console.log(obj)
            var title = obj[0].titles;
            var like = obj[0].like;
            var read = obj[0].read;
            var time = obj[0].time;
            var contname = obj[0].contname;
            console.log(title);
            $(".blog_title").html(title);
            $(".timer").html(like);
            $(".view span").html(read);
            $(".like").html(time);
            $(".loca_img").html(contname)
            $(".lmname").html(contname);
        })
    }
})