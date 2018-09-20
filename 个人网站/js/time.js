$(function () {
    // insertFn();
    // function insertFn() {
    //     $.get("../data/new.json", function (datas) {
    //         var obj = typeof datas ? datas : eval('(' + datas + ')');
    //         var list = obj.data;
    //         console.log(list);
    //         $.each(list, function (index, item) {
    //             $.post("../php/time.php", item, function (data) {
    //                 if (parseInt(data)) {
    //                     console.log('数据插入成功');
    //                 } else {
    //                     console.log('数据插入失败');
    //                 }
    //             })
    //         })
    //     })
    // }
    temFour();
    function temFour() {
        var teamStr = $("#tem_four").html();
        var complied = _.template(teamStr);
        $.get("../data/time.json", function (data) {
            var obj = typeof data == 'object' ? data : eval('(' + data + ')');
            var list = obj.data;
            list.forEach(function (item, index) {
                var str1 = complied(item);
                $(".home_box").append(str1);
            })
        })
    }
    pageFn();
    function pageFn() {
        var id = 0;
        // 页面刷新获取所有数据
        $.post('../php/selectAll.php', function (back) {
            var obj = typeof back == 'object' ? back : eval('(' + back + ')');
            var list = obj.data;
            var strlen = list.length;
            var cha = Math.ceil(list.length / 5);
            console.log(cha)
            lll()
            console.log($('.prev'))
            var more = $('#template').html();
            var more1 = _.template(more);
            $.post('../php/limit.php', { id: 0 }, function (data) {
                var dataObj = typeof data == 'object' ? data : eval('(' + data + ')');
                var obj = dataObj.data;
                _.each(obj, function (item) {
                    var $dom = more1(item);
                    // $('.news_box').append($dom);
                })
            })
            // 创建页数
            for (var i = 1; i <= cha; i++) {
                $('<a href="#" class="page">' + i + '</a>').appendTo('#pagenum')
            }
            // 下一页
            $('.next').click(function () {
                // 每次点击清空当前ul中的内容
                $('.new_cont').empty();
                // id自加5
                id += 5;
                console.log(id)
                if (id < strlen) {
                    lll()
                }
                else {
                    alert('到底了')
                    id = strlen - 5;
                    lll()
                }
            })
            // 上一页
            $('.prev').click(function () {
                $('.new_cont').empty();
                id -= 5;
                console.log(id)
                if (id < 0) {
                    id = 0;
                    lll()
                    alert('到了')
                } else {
                    lll()
                }
            })
            // 页数
            var num = Math.ceil(list.length / 5);
            $('.page').on('click', function () {
                $('.new_cont').empty();
                id = ($(this).html() - 1) * num;
                console.log(id)
                lll()
            })


        })
        function lll() {
            var more = $('#template').html();
            var more1 = _.template(more);
            $.post('../php/limit.php', { id: id }, function (data) {
                var dataObj = typeof data == 'object' ? data : eval('(' + data + ')');
                var obj = dataObj.data;
                _.each(obj, function (item) {
                    var $dom = more1(item);
                    $('.new_cont').append($dom);

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
                sr.reveal('.news', config);
            })
        }
    }

})