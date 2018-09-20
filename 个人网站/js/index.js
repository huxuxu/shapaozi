(function () {
    temOne();
    function temOne() {
        var teamStr = $("#template").html();
        var complied = _.template(teamStr);
        $.get("data/banner.json", function (data) {
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
    temTwo();
    function temTwo() {
        var teamStr = $("#temp").html();
        var complied = _.template(teamStr);
        $.get("data/life.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".aside_box").append(str1);
            })
        })
    }
    temThree();
    function temThree() {
        var teamStr = $("#tem_three").html();
        var complied = _.template(teamStr);
        $.get("data/content.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".blogsbox").append(str1);
            })
            var config = {
                reset: true, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
                origin: 'bottom', // 动画开始的方向
                duration: 800, // 动画持续时间
                delay: 150, // 延迟
                rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
                opacity: 0, // 初始透明度
                scale: 1, //缩放
                easing: 'cubic-bezier(0.1, 0.2, 0.3, 0.4)', // 动画效果'ease', 'ease-in-out'，'linear'...
                // 回调函数
                //动画开始前调用
                beforeReveal: function (domEl) { },
                //滚动鼠标之前调用
                beforeReset: function (domEl) { },
                //动画开始后调用
                afterReveal: function (domEl) { },
                //滚动鼠标之后调用
                afterReset: function (domEl) { }
            };
            window.sr = ScrollReveal();
            sr.reveal('.blogs', config);
            seleArticle();
        })

    }
    temFour();
    function temFour() {
        var teamStr = $("#tem_four").html();
        var complied = _.template(teamStr);
        $.get("data/zthome.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".home_box").append(str1);
            })
        })
    }
    temFive();
    function temFive() {
        var teamStr = $("#tem_five").html();
        var complied = _.template(teamStr);
        $.get("data/tjhome.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".tuijian").append(str1);
            })
        })
    }
    temSix();
    function temSix() {
        var teamStr = $("#tem_six").html();
        var complied = _.template(teamStr);
        $.get("data/phhome.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".paihang").append(str1);
            })
        })
    }

    var lock = true;
    $(".search").click(function () {
        if (lock) {
            $(".search_box span").css("background", "url(img/search.png) no-repeat center");
            $(".search_box").css("width", "18%");
            $(".keyboard").css({
                "display": "block",
                "width": "95%"
            });
            lock = false;
        }
        else {
            $(".search_box span").css("background", "url(img/searchbg.png) no-repeat center");
            $(".search_box").css("width", "6%");
            $(".keyboard").css({
                "display": "none",
            });
            lock = true;
        }
    })
    insertFn();
    function insertFn() {
        $.get("data/content.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            $.each(list, function (index, item) {
                $.post("php/insert.php", item, function (data) {
                    if (parseInt(data)) {
                        console.log('数据插入成功');
                    } else {
                        console.log('数据插入失败');
                    }
                })
            })
        })
    }

    function seleArticle() {
        $(".blog_title").click(function () {
            var title = $(this).html();
            console.log(title);
            $.post("php/find.php", { titles: title }, function (data) {
                var objdata = typeof data == "object" ? data : eval('(' + data + ')');
                var obj = objdata.data;
                var id = obj[0].id;
                console.log(id);
                location.href = "html/select.html#" + id;
            })
        })
    }

})();