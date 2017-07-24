function init() {
    $(".header_top_login").click(function() {
        new Login(function(user) {
            $(".header_top_menu ul li:first-Child").html("<a href = '#'>" + user.username + "</a>");
        });
    });
}

init();