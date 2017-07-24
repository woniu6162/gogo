// 为了防止其他的插件与jquery同名，可以通过noConflict找到jquery对象重新更改表示jquery对象的符号

var $ = jQuery.noConflict();
(function() {
    function Login(success) {
        this.showLogin(success);
    };
    Login.prototype.showLogin = function(success) {
        var loginContainer = $("<div class='loginContainer'></div>");
        var closeButton = $("<p>关闭</p>");
        var usernameInput = $("<p><input type='text' placeholder='用户名'></p>");
        var passwordInput = $("<p><input type='password' placeholder='密码'></p>");
        var loginButton = $("<p><button>登录</button></p>");

        loginContainer.css({
            width: "400px",
            height: "300px",
            "background-color": "#FB3434",
            border: "5px #ffd42e solid",
            position: "absolute",
            top: "50%",
            left: "50%",
            "box-sizing": "border-box",
            margin: "-150px 0 0 -200px"
        });
        closeButton.css({
            float: "right",
            color: "white",
            padding: "5px"
        });
        closeButton.click(function() {
            loginContainer.slideUp(500, function() {
                loginContainer.remove();
            });
        });
        var inputCss = {
            padding: "20px 0",
            margin: "0 auto",
            width: "300px",
            "text-align": "center"
        };
        usernameInput.css(inputCss);
        passwordInput.css(inputCss);
        loginButton.css(inputCss);
        loginButton.click(function() {
            $.post(PRODUCT_HOST + LOGIN, { status: "login", username: usernameInput.children().val(), password: passwordInput.children().val() }, function(data) {
                console.log(data);
                // 登录成功
                if (data.code == 0) {
                    loginContainer.slideUp(500, function() {
                        // todo:执行外面传入的 方法
                        loginContainer.remove();
                        // 执行外面传入的 方法
                        success(data.data);
                    });
                } else {
                    alert(data.message);
                }
            });
        });

        loginContainer.append(closeButton);
        loginContainer.append(usernameInput);
        loginContainer.append(passwordInput);
        loginContainer.append(loginButton);
        $(document.body).append(loginContainer);
    }
    window.Login = Login;
})()