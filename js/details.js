var param = location.search.replace("?", "");
var params = param.split("=");
var goodsId = params[1];
// var picContainer = $("<div></div>")
// document.body.append(picContainer)
var mainBody = $(".mainBody")

$.get(PRODUCT_HOST + GOODS, { goods_id: goodsId }, function(result) {
    var datas = result.data[0];
    console.log(datas);
    var imgContainer = $("<div><img src='" + datas.goods_thumb + "'/></div>");
    var info = $("<div class='info'><h3>" + datas.goods_name + "</h3><p class='price'>￥" + datas.price + "</p><p>" + datas.goods_desc + "</p><div class='numBtn'><button class='numMinus'>-</button><input class='goodsNum' type='text' value=1><button class='numPlus'>+</button></div><div class='purchase'><button class='buyNow'>立即购买</button><button class='addCart'>加入购物车</button></div></div>")

    var num = 1;
    mainBody.append(imgContainer);
    mainBody.append(info);

    $(".numMinus").click(function() {
        num <= 1 ? 1 : num--;
        $(".goodsNum").val(num);

    });
    $(".numPlus").click(function() {
        num++
        $(".goodsNum").val(num);
    });

    var cartUrl = "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.getItem("token");
    var cartParam = { goods_id: goodsId, number: num }
    $(".addCart").click(function() {
        $.post(cartUrl, cartParam, function(result) {
            console.log(result.data)
        });
    });

});

console.log();