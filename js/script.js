$(document).ready(function() {
    // $(document).keypress(function(event) {
    //     console.log(event);
    // });
    // $('input').keypress(function(event) {
    //     console.log(event);
    // });
    // $('a').click(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // });
    // $('a').dblclick(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // });
    // $('a').mousedown(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // });
    // $('a').mouseup(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // });
    // $('a').mouseenter(function() {
    //     index = $(this).index();
    //     swiper();
    // });
    // $('a').mouseleave(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // });
    // $('a').hover(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // }, function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '0' }).siblings().css({ 'opacity': '1' });
    // });
    // $('nav').mouseover(function() {
    // 	console.log($(this));
    // });
    // $('nav').mouseout(function() {
    // 	console.log($(this));
    // });
    // $('nav').mousemove(function() {
    // 	console.log($(this));
    // });
    // $('div').scroll(function() {
    // 	console.log($(this));
    // });
    // $(document).keydown(function(event) {
    // 	if (event.keyCode == 37) {
    // 		index = index > 0 ? -- index : $('a').length - 1;
    // 	} else if (event.keyCode == 39) {
    // 		index = index < $('a').length - 1 ? ++ index : 0;
    // 	} else {
    // 		return false;
    // 	}
    // 	swiper();
    // });
    // $(document).keyup(function() {
    // 	console.log($(this));
    // });
    // $(document).keypress(function(event) {
    // 	console.log(event);
    // });
    // $(window).resize(function() {
    // 	console.log($(this));
    // });
    // $('.formElement').focus(function() {
    // 	console.log('我获得焦点啦！O(∩_∩)O');
    // });
    // $('.formElement').blur(function() {
    // 	console.log('我失去焦点啦！5555555……');
    // });
    // $('.formElement').change(function() {
    // 	console.log('我正在发生改变！O(∩_∩)O');
    // });
    // $('.formElement').select(function() {
    // 	console.log('我被选中了！O(∩_∩)O');
    // });
    // 提交表单
    // $('input[type=button]').click(function() {
    //     $('form').submit();
    // });
    // 阻止表单提交
    // $('form').submit(function() {
    //     // ......
    //     return false;
    // });
    // 提交表单时做一些我们所需要做的事情(多用于表单验证)
    // $('form').submit(function() {
    //     var inputValue = $('input[type=text]').val();
    //     if (inputValue !== 'www.imooc.com') {
    //         return false;
    //     }
    // });
    // $(document).on('mouseenter', 'a', function(event) {
    //     event.stopPropagation();
    //     index = $(this).index();
    //     swiper();
    // });
    // $(document).on('keydown', function(event) {
    //     event.stopPropagation();
    //     if (event.keyCode == 37) {
    //         index = index > 0 ? --index : $('a').length - 1;
    //     } else if (event.keyCode == 39) {
    //         index = index < $('a').length - 1 ? ++index : 0;
    //     } else {
    //         return false;
    //     }
    //     swiper();
    // });
    // bind、delegate、live
    var index = 0;
    var mouseEvent = function(event) {
        event.stopPropagation();
        if ($(this)[0].nodeName == 'A') {
            index = $(this).index();
        } else {
            return true;
        };
        swiper();
    };
    var keyEvent = function(event) {
        event.stopPropagation();
        if (event.keyCode == 37) {
            index = index > 0 ? --index : $('a').length - 1;
        } else if (event.keyCode == 39) {
            index = index < $('a').length - 1 ? ++index : 0;
        } else {
            return true;
        }
        swiper();
    }
    var events = {
        mouseenter: mouseEvent,
        keydown: keyEvent
    };
    $('a').add(document).on(events);
    // // 要绑定的事件
    // function flash() {
    //     $('.button').show().fadeOut('slow');
    // }
    // // 事件绑定
    // $('.bind').click(function() {
    //     $(document).on('click', '.obj', flash)
    //     .find('.obj').text('点击按钮有效果');
    // });
    // // 取消事件绑定
    // $('.unbind').click(function() {
    //     $(document).off('click', '.obj', flash)
    //     .find('.obj').text('这个按钮点击没有效果');
    // });
    // // 绑定一次事件
    // $('.one').click(function() {
    //     $(document).one('click', '.obj', flash)
    //     .find('.obj').text('这个按钮可以点击一次');
    // });
    var swiper = function() {
        $('img').eq(index).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    }
    var init = function() {
        index = 0;
        swiper();
    }
    init();
});
