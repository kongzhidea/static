$(function() {
          function _4() {
            var _5 = $("body").width();
            if (_5 > 1050) {
                var w = (_5 - 980) / 2;
                $("#gotoTop").css("right", w / 2 - 25 + "px");
            } else {
                $("#gotoTop").css("right", "10px");
            }
            if ($(document).scrollTop() == 0) {
                $("#gotoTop").hide();
            } else {
                $("#gotoTop").show();
            }
        };
        _4();
        $(window).resize(function() {
            _4();
        });
        $(window).scroll(function() {
            if ($(".navigation-wrap").size() && $(window).height() < 800) {
                if ($(document).scrollTop() == 0) {
                    $(".header-wrap").show();
                } else {
                    if ($(document).scrollTop() > 60 && $(".header-wrap").css("display") == "block") {
                        $(".header-wrap").hide();
                        $(document).scrollTop($(document).scrollTop() - 60);
                    }
                }
            }
            if ($("#gotoTop").size()) {
                _4();
            }
        });
}
);