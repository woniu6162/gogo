var $ = jQuery.noConflict();
(function() {
    //显示在导航上面的每一个按钮
    function NavigaterItem(obj) {

        var obj = obj || {};
        this.name = obj.cat_name;
        this.id = obj.cat_id;
        this.item = $("<li>" + this.name + "</li>");
        // console.log(this.item)
        //工厂模式
        // var item = {};
        // item.name = obj.cat_name;
        // return item;
    }
    // click -> 是NavigaterItem 上面的click
    NavigaterItem.prototype.itemClick = function(callback) {
        // click->是 this.item调用的， 是jqeury对象里面的click
        this.item.on("click", this, callback);
        return this;
    };

    // function jQuery(selector) {
    //     this.dom = document.querySelector(selector);
    // }
    // jQuery.prototype.on = function(type, parm,fun) {
    //     this.dom.addEventListner(type, function(event){
    //         event.data=parm;
    //         fun(event);
    //     });
    // }
    window.NavigaterItem = NavigaterItem;

    function Navigater() {

    }
    //点击导航按钮的时候 需要知道 点击按钮的 商品类型id
    Navigater.prototype.createView = function(url, superView, callback) {
        $.get(url, {}, function(result) {
            console.log(result);
            if (result.code == 0) {
                result.data.forEach(function(obj) {
                    // 创建导航列表
                    superView.append(new NavigaterItem(obj).itemClick(callback).item);
                });
                // console.log(new NavigaterItem(obj).itemClick(callback).item)    

            }
        });
        return this;
    };
    window.Navigater = Navigater;
})();