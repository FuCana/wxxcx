/**
 * Created by hxsd on 2016/12/15.
 */

angular.module("filterModule")
    //分页过滤器
    .filter("pageFilter",function(){
        return function(products,pageNum,pageSize) {
            //对转入参数进行判断
            if (!angular.isArray(products) || !angular.isNumber(pageNum) || !angular.isNumber(pageSize)) {
                return products;
            }

            //计算请求的数据的起始索引值
            var startIndex = (pageNum - 1) * pageSize;

            //判断索引值是否在数组范围内
            if (startIndex >= products.length) {
                return [];
            }

            //提取一页数据到新数组中
            var newArr = products.slice(startIndex, startIndex + pageSize);

            return newArr;
        }

    })

    .filter("btnFilter",function(){
       return function(products,pageSize){
           //console.log(products);
           var btnArr = [];
           var n = Math.ceil(products.length/pageSize);
           for(var i=0;i<n;i++){
               btnArr.push(i+1);
           }

           return btnArr;
       }
    });




