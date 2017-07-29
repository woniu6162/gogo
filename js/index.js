function init() {
    new corouselView.Corouse("#left_course", [{ imagePath: "resource/image/header/hot1.jpg" }, { imagePath: "resource/image/header/hot2.jpg" }], 200, 400).putSuperView().startTimer(2000);

    new corouselView.Corouse("#center_course", [{ imagePath: "resource/image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg" }, { imagePath: "resource/image/header/TB1GBFrSXXXXXXDXpXXXXXXXXXX-440-680.jpg" }], 754, 400).putSuperView().startTimer(2000);

    new corouselView.Corouse("#right_course", [{ imagePath: "resource/image/header/hot1.jpg" }, { imagePath: "resource/image/header/hot2.jpg" }], 200, 400).putSuperView().startTimer(2000);

    new Goods(PRODUCT_HOST + GOODS, null, $(".goods_container"), function(event) {

        console.log("1111");
        console.log(this);
        // console.log(event.data);
        // window.open("product_details.html")
    });
};

init();