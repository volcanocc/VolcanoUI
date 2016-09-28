//代码高亮
hljs.initHighlightingOnLoad();

//复制
var clipboard = new Clipboard('.clipboard-btn');
clipboard.on('success', function(e) {
    e.trigger.setAttribute('data-tootik','复制成功');
    e.trigger.onmouseleave = function () {
        e.trigger.setAttribute('data-tootik','复制');
    };
    e.clearSelection();
});

//滚动监听
$('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.3,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

//固定菜单
$(function () {
    $(window).scroll(function () {
        var scrollHeight = $(document).scrollTop();
        var menuWrap = $('.menu-wrap');
        if (scrollHeight > 60) {
            menuWrap.css({
                position: 'fixed',
                top: '0'
            });
        } else {
            menuWrap.css({
                position: '',
                top: ''
            });
        }

    });
});

