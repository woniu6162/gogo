function share() {
    $(".header_top_login").click(function() {
        new Login(function(user) {
            $(".header_top_menu ul li:first-Child").html("<a href = '#'>" + user.username + "</a>");
        });
    });
    // 导航
    new Navigater().createView(PRODUCT_HOST + PRODUCT_TYPE, $(".main_nav_container"), function(event) {
        console.log(event);
    });
}

share();