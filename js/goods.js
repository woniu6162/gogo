(function() {
    function GoodsItem(obj) {
        // this.des = obj;
        this.goodsId = obj.goods_id;
        var space = 20;
        var colume = 5;
        var width = (1200 - space * (colume - 1)) / colume;

        this.item = $("<div class='goods_box'></div>");
        var name = $("<p class='goods_name'>" + obj.goods_name +
            "</p>");
        var other = $("<p><img width='" + width + "px' src='" + obj.goods_thumb +
            "' alt=''></p><h3>￥" + obj.price + "</h3><p>" + obj.goods_desc +
            "</p>");
        this.item.append(name);
        this.item.append(other);
        this.item.css({
            width: width + "px",
            height: "384px",
            border: "2px #ff4411 solid",
            "box-sizing": "border-box",
            float: "left",
            overflow: "hidden",
            position: "relative"
        });

        name.css({
            position: "absolute",
            height: "20px",
            "line-height": "20px",
            display: "none"
        });

        this.item.hover(function() {
            $(this).children().css("display", "block");
        }, function() {
            $(".goods_name").css("display", "none");
        });

    }


    // GoodsItem.prototype.click = function(callback) {
    //     this.item.on("click", callback);
    //     return this;
    // };


    GoodsItem.prototype.click = function(callback) {
        // var that = this;
        this.item.click(function() {
            window.open("product_details.html?name=" + this.goodsId);
        }.bind(this));
        return this;
    };

    function Goods(url, parm, superView, action) {
        this.loadData(url, parm, superView, action);
    };
    Goods.prototype.loadData = function(url, parm, superView, action) {
        $.get(url, parm, function(result) {
            if (result.code == 0) {
                this.showGoodsView(result.data, superView, action);
                console.log(result);
            }
        }.bind(this));
    };

    Goods.prototype.showGoodsView = function(goods, superView, action) {
        goods.forEach(function(data) {
            superView.append(new GoodsItem(data).click(action).item);
        });
    }

    window.Goods = Goods;
})();