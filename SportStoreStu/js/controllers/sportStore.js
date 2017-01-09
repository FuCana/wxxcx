/**
 * Created by hxsd on 2016/12/15.
 */
//顶层控制器
angular.module("myapp")
    .controller("sportStoreCtrl",function($scope,shopCart,$location,$http){
        $scope.data = {
            //商品类别
            categories:[
                {id:"10001",category:"金三胖系列"},
                {id:"10002",category:"金大胖系列"},
                {id:"10003",category:"金二胖系列"},
                {id:"10004",category:"金小胖系列"}
            ],
            //商品明细
            products:[
                {name:"金三胖人形玩偶1",category:"金三胖系列",price:998,desc:"2016年流行款",imgsrc:"images/TB1_50x50.jpg"},
                {name:"金三胖人形玩偶2",category:"金三胖系列",price:998,desc:"2016年流行款",imgsrc:"images/TB2_50x50.jpg"},
                {name:"金三胖人形玩偶3",category:"金三胖系列",price:998,desc:"2016年流行款",imgsrc:"images/TB3_50x50.jpg"},
                {name:"金三胖人形玩偶4",category:"金三胖系列",price:998,desc:"2016年流行款",imgsrc:"images/TB4_50x50.jpg"},
                {name:"金三胖人形玩偶5",category:"金三胖系列",price:998,desc:"2016年流行款",imgsrc:"images/TB1_50x50.jpg"},
                {name:"金大胖人形玩偶1",category:"金大胖系列",price:666,desc:"2016年流行款",imgsrc:"images/TB1_50x50.jpg"},
                {name:"金大胖人形玩偶2",category:"金大胖系列",price:666,desc:"2016年流行款",imgsrc:"images/TB2_50x50.jpg"},
                {name:"金大胖人形玩偶3",category:"金大胖系列",price:666,desc:"2016年流行款",imgsrc:"images/TB1_50x50.jpg"},
                {name:"金大胖人形玩偶4",category:"金大胖系列",price:666,desc:"2016年流行款",imgsrc:"images/TB2_50x50.jpg"},
                {name:"金二胖人形玩偶1",category:"金二胖系列",price:98,desc:"2016年流行款",imgsrc:"images/TB3_50x50.jpg"},
                {name:"金二胖人形玩偶2",category:"金二胖系列",price:98,desc:"2016年流行款",imgsrc:"images/TB2_50x50.jpg"},
                {name:"金二胖人形玩偶3",category:"金二胖系列",price:98,desc:"2016年流行款",imgsrc:"images/TB1_50x50.jpg"},
                {name:"金二胖人形玩偶4",category:"金二胖系列",price:98,desc:"2016年流行款",imgsrc:"images/TB2_50x50.jpg"},
                {name:"金小胖人形玩偶1",category:"金小胖系列",price:199,desc:"2016年流行款",imgsrc:"images/TB3_50x50.jpg"},
                {name:"金小胖人形玩偶2",category:"金小胖系列",price:199,desc:"2016年流行款",imgsrc:"images/TB1_50x50.jpg"}
            ],
            //保存用户的收货信息
            shipping:{}
        };

        //发送订单的方法
        //1）$http 2)购物商品信息+收货人信息
        $scope.send = function(){
            //打包好要发送的信息去服务器
            var order = {};
            order.cart = shopCart.findAll();
            order.shipping = angular.copy($scope.data.shipping);

            //使用http发送，并处理：1）成功；2）失败；3）收尾
            var url = "order.json";      //服务器订单处理接口
            $http.post(url,order)
                .success(function(data){
                    console.log(data.orderId);
                    //服务器把订单号保存起来，并显示在thank you 页面
                    $scope.data.orderId = data.orderId;
                    //清空购物车
                    shopCart.clear();

                })
                .error(function(err){
                    //将错误信息保存起来，并显示在thank you页面
                    $scope.data.orderErr =err;
                })
                //不管成功与否，最后都会执行finally里面的函数
                .finally(function(){
                    $location.path("/thanks");
                });
        }


    });
