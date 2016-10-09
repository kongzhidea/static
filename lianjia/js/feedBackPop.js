$.feedBackPop = function(text) {
    var self = this;
    var marginTop = ($(window).height() - $(window).width() * 0.243442623) / 2;
    $('.popmask').remove();

    var $maskHtml = $("<div/>", {
        class: "popmask"
    }).html('<div class="popPromptText" style="margin-top:' + marginTop + 'px">' + text + '</div>')
        .appendTo($('body'));

    setTimeout(function() {
        $('.popmask').remove();
    }, 1000);
    //禁止滚动
    $('.popmask').bind('touchmove', function() {
        return false;
    });
}