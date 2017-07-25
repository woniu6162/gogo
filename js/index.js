function init() {
    $(".header_top_login").click(function() {
        new Login(function(user) {
            $(".header_top_menu ul li:first-Child").html("<a href = '#'>" + user.username + "</a>");
        });
    });
    // 导航
    new Navigater().createView(PRODUCT_HOST + PRODUCT_TYPE, $(".main_nav_container"), function(event) {
        console.log(event);
    });

    new corouselView.Corouse("#left_course", [{ imagePath: "resource/image/header/hot1.jpg" }, { imagePath: "resource/image/header/hot2.jpg" }], 200, 400).putSuperView().createControlButton().startTimer(2000);

    new corouselView.Corouse("#center_course", [{ imagePath: "resource/image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg" }, { imagePath: "resource/image/header/TB1GBFrSXXXXXXDXpXXXXXXXXXX-440-680.jpg" }], 754, 400).putSuperView().startTimer(2000);

    new corouselView.Corouse("#right_course", [{ imagePath: "resource/image/header/hot1.jpg" }, { imagePath: "resource/image/header/hot2.jpg" }], 200, 400).putSuperView().startTimer(2000);

    new Goods(PRODUCT_HOST + GOODS, null, $(".goods_container"), function(event) {
        console.log(event.data);
    });
};

init();